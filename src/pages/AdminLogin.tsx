import React, { useState } from "react";
import "./AdminLogin.scss";
import { useNavigate } from "react-router-dom";

interface Props {
    onLoginSuccess: () => void;
}

const AdminLogin: React.FC<Props> = ({ onLoginSuccess }) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        if (email === "admin@gmail.com" && password === "admin123") {
            localStorage.setItem("adminToken", "logged_in");
            onLoginSuccess();
            navigate("/admin")
        } else {
            setError("Invalid email or password");
        }
    };
    return (
        <div className="admin-login-container">
            <form className="login-card" onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
                <p>Login to access admin panel</p>

                {error && <p className="error">{error}</p>}
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <div className="password-box">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "Hide" : "Show"}
                        </span>
                    </div>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
