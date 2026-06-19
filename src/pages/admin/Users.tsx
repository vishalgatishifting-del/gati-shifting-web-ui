import { useEffect, useState } from "react";
import privateAPI from "../../api/privateAxios";
import "./UsersManagement.scss";

interface User {
    _id: string;
    email: string;
    permissions: string[];
    isActive: boolean;
}

const availablePermissions = [
    "orders",
    "leads",
    "items",
    "partners",
    "employees",
    "reports",
    "users",
];

type ToastState = {
    message: string;
    variant: "success" | "error";
} | null;

const UsersManagement = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [savingUserId, setSavingUserId] = useState<string | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [creating, setCreating] = useState(false);

    const [toast, setToast] = useState<ToastState>(null);

    const showToast = (message: string, variant: "success" | "error" = "success") => {

        setToast({ message, variant });

        window.setTimeout(() => setToast(null), 3000);

    };

    const fetchUsers = async () => {

        try {

            const res = await privateAPI.get(
                "/api/users"
            );

            setUsers(res.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchUsers();

    }, []);

    // lock background scroll while modal is open
    useEffect(() => {

        document.body.style.overflow = isModalOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };

    }, [isModalOpen]);

    // close modal on Escape
    useEffect(() => {

        const handleKeyDown = (e: KeyboardEvent) => {

            if (e.key === "Escape" && isModalOpen) {
                closeModal();
            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);

    }, [isModalOpen]);

    const handlePermissionChange = (
        userId: string,
        permission: string
    ) => {

        setUsers((prev) =>
            prev.map((user) => {

                if (user._id !== userId)
                    return user;

                const exists =
                    user.permissions?.includes(
                        permission
                    );

                return {
                    ...user,
                    permissions: exists
                        ? user.permissions.filter(
                            (p) => p !== permission
                        )
                        : [
                            ...(user.permissions || []),
                            permission,
                        ],
                };

            })
        );

    };

    const savePermissions = async (
        userId: string,
        permissions: string[]
    ) => {

        setSavingUserId(userId);

        try {

            await privateAPI.put(
                `/api/users/${userId}/permissions`,
                {
                    permissions,
                }
            );

            showToast("Permissions updated");

        } catch (error) {

            console.error(error);
            showToast("Failed to update permissions", "error");

        } finally {

            setSavingUserId(null);

        }

    };

    const toggleUserStatus =
        async (
            userId: string
        ) => {

            try {

                const res =
                    await privateAPI.put(
                        `/api/users/${userId}/toggle-status`
                    );

                setUsers((prev) =>
                    prev.map((user) =>

                        user._id === userId
                            ? {
                                ...user,
                                isActive:
                                    res.data.isActive
                            }
                            : user
                    )
                );

                showToast(
                    res.data.message
                );

            } catch {

                showToast(
                    "Failed to update status",
                    "error"
                );

            }

        };

    const openModal = () => {

        setEmail("");
        setPassword("");
        setShowPassword(false);
        setIsModalOpen(true);

    };

    const closeModal = () => {

        if (creating) return;

        setIsModalOpen(false);

    };

    const createUser = async () => {

        if (!email || !password) {

            showToast("Email and password are required", "error");

            return;

        }

        setCreating(true);

        try {

            await privateAPI.post(
                "/api/users/create",
                {
                    email,
                    password,
                }
            );

            showToast("User created");

            setEmail("");
            setPassword("");
            setIsModalOpen(false);

            fetchUsers();

        }
        catch (error: any) {

            showToast(
                error?.response?.data?.message ||
                "Failed to create user",
                "error"
            );

        } finally {

            setCreating(false);

        }

    };

    const initials = (value: string) =>
        value.slice(0, 2).toUpperCase();

    return (

        <div className="users-management">

            <div className="um-header">

                <div>


                    <h2>User Permissions</h2>


                </div>

                <button className="um-add-btn" onClick={openModal}>

                    <span className="um-add-btn__icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>

                    Add User

                </button>

            </div>

            {!loading && (

                <div className="um-stats">

                    <div className="um-stat-card">
                        <span className="um-stat-card__label">Total users</span>
                        <span className="um-stat-card__value">{users.length}</span>
                    </div>

                    <div className="um-stat-card">
                        <span className="um-stat-card__label">With full access</span>
                        <span className="um-stat-card__value">
                            {users.filter((u) => (u.permissions?.length || 0) === availablePermissions.length).length}
                        </span>
                    </div>

                    <div className="um-stat-card">
                        <span className="um-stat-card__label">No permissions set</span>
                        <span className="um-stat-card__value">
                            {users.filter((u) => !u.permissions || u.permissions.length === 0).length}
                        </span>
                    </div>

                </div>

            )}

            <div className="um-table-card">

                {loading ? (

                    <div className="um-loading">
                        <div className="um-spinner-lg" />
                        <span>Loading users…</span>
                    </div>

                ) : users.length === 0 ? (

                    <div className="um-empty">
                        <div className="um-empty__title">No users yet</div>
                        <div className="um-empty__sub">Add your first user to get started.</div>
                    </div>

                ) : (

                    <table className="users-table">

                        <thead>

                            <tr>
                                <th>User</th>
                                <th>Permissions</th>
                                <th>Action</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            {users.map((user) => (

                                <tr key={user._id}>

                                    <td>

                                        <div className="um-user-cell">

                                            <div className="um-user-cell__avatar">
                                                {initials(user.email)}
                                            </div>

                                            <div>
                                                <div className="um-user-cell__email">{user.email}</div>
                                            </div>

                                        </div>

                                    </td>

                                    <td>

                                        <div className="um-permissions">

                                            {availablePermissions.map((permission) => (

                                                <label className="um-chip" key={permission}>

                                                    <input
                                                        type="checkbox"
                                                        checked={!!user.permissions?.includes(permission)}
                                                        onChange={() =>
                                                            handlePermissionChange(user._id, permission)
                                                        }
                                                    />

                                                    <span className="um-chip__box">
                                                        <svg viewBox="0 0 10 8" fill="none">
                                                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>

                                                    {permission}

                                                </label>

                                            ))}

                                        </div>

                                    </td>

                                    <td>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "10px",
                                            }}
                                        >

                                            <button
                                                className={`um-save-btn ${savingUserId === user._id
                                                    ? "is-saving"
                                                    : ""
                                                    }`}
                                                onClick={() =>
                                                    savePermissions(
                                                        user._id,
                                                        user.permissions
                                                    )
                                                }
                                            >
                                                Save
                                            </button>

                                            <button
                                                className={
                                                    user.isActive
                                                        ? "um-block-btn"
                                                        : "um-unblock-btn"
                                                }
                                                onClick={() =>
                                                    toggleUserStatus(
                                                        user._id
                                                    )
                                                }
                                            >
                                                {user.isActive
                                                    ? "Block"
                                                    : "Activate"}
                                            </button>

                                        </div>

                                    </td>
                                    <td>

                                        {user.isActive ? (

                                            <span
                                                style={{
                                                    color: "green",
                                                    fontWeight: 600
                                                }}
                                            >
                                                Active
                                            </span>

                                        ) : (

                                            <span
                                                style={{
                                                    color: "red",
                                                    fontWeight: 600
                                                }}
                                            >
                                                Blocked
                                            </span>

                                        )}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}

            </div>

            {isModalOpen && (

                <div className="um-modal-overlay" onClick={closeModal}>

                    <div className="um-modal" onClick={(e) => e.stopPropagation()}>

                        <div className="um-modal__head">

                            <div>
                                <h3>Add User</h3>
                                <p>Create a new account and assign access later.</p>
                            </div>

                            <button className="um-modal__close" onClick={closeModal} aria-label="Close">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </button>

                        </div>

                        <div className="um-field">

                            <label htmlFor="um-email">Email</label>

                            <input
                                id="um-email"
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />

                        </div>

                        <div className="um-field um-field--password">

                            <label htmlFor="um-password">Password</label>

                            <input
                                id="um-password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") createUser();
                                }}
                            />

                            <button
                                type="button"
                                className="um-field__toggle"
                                onClick={() => setShowPassword((prev) => !prev)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >

                                {showPassword ? (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M1 1L15 15M6.6 6.6a2 2 0 002.8 2.8M8 3c3.5 0 6 2.5 7 5-.4 1-1 1.9-1.8 2.7M4 4.3C2.6 5.2 1.6 6.5 1 8c1 2.5 3.5 5 7 5 1 0 2-.2 2.9-.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M1 8C2 5.5 4.5 3 8 3s6 2.5 7 5c-1 2.5-3.5 5-7 5s-6-2.5-7-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                                        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
                                    </svg>
                                )}

                            </button>

                        </div>

                        <div className="um-modal__actions">

                            <button className="um-btn-secondary" onClick={closeModal} disabled={creating}>
                                Cancel
                            </button>

                            <button className="um-btn-primary" onClick={createUser} disabled={creating}>

                                {creating && <span className="um-spinner" style={{ display: "inline-block", borderColor: "rgba(255,255,255,0.35)", borderTopColor: "#fff" }} />}

                                {creating ? "Creating…" : "Create User"}

                            </button>

                        </div>

                    </div>

                </div>

            )}

            {toast && (

                <div className={`um-toast ${toast.variant === "error" ? "um-toast--error" : ""}`}>
                    <span className="um-toast__dot" />
                    {toast.message}
                </div>

            )}

        </div>

    );

};

export default UsersManagement;