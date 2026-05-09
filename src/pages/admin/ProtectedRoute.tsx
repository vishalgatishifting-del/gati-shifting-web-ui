import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import privateAPI from "../../api/privateAxios";

const ProtectedRoute = ({ children }: any) => {

    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {

        const checkAuth = async () => {

            try {

                await privateAPI.get("/api/auth/me");
                setAuthenticated(true);
            }
            catch {

                // try refresh token
                try {
                    await privateAPI.post("/api/auth/refresh");

                    // retry auth check
                    await privateAPI.get("/api/auth/me");

                    setAuthenticated(true);

                }
                catch {

                    setAuthenticated(false);

                }

            }
            finally {

                setLoading(false);

            }

        };

        checkAuth();

    }, []);

    if (loading)
        return <div>Loading...</div>;

    if (!authenticated)
        return <Navigate to="/admin-login" />;

    return children;

};

export default ProtectedRoute;