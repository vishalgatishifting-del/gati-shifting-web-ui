import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import privateAPI from "../../api/privateAxios";

const ProtectedRoute = ({ children }: any) => {

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] =
    useState(false);

  useEffect(() => {

    privateAPI.get(
      "/api/auth/me"
    )
    .then(() => {

      setAuthenticated(true);

    })
    .catch(() => {

      setAuthenticated(false);

    })
    .finally(() => {

      setLoading(false);

    });

  }, []);

  if (loading)
    return <div>Loading...</div>;

  if (!authenticated)
    return <Navigate to="/admin-login" />;

  return children;

};

export default ProtectedRoute;