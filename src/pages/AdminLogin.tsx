import React, { useState } from "react";
import "./AdminLogin.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Props {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<Props> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("https://api.gatishiftingpackers.com/admin-login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);

      onLoginSuccess();
      navigate("/admin");

    } catch (err: any) {
        console.log(err)
      setError(
        err?.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
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

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
