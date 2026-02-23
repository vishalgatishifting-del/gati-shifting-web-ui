import React, { useState } from "react";
import "./AdminLogin.scss";
import { useNavigate } from "react-router-dom";
import { getDeviceId } from "../../utils/deviceId";
import privateAPI from "../../api/privateAxios";


interface Props {
  onLoginSuccess: () => void;
}

const AdminLogin: React.FC<Props> = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);


  const [otp, setOtp] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  const [otpLoading, setOtpLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await privateAPI.post("/api/auth/login", {
        email,
        password,
        deviceId: getDeviceId()
      });
      // alert(res.data.message)
      setShowOtpPopup(true);


      // localStorage.setItem("adminToken", res.data.token);

      // navigate("/admin-dashboard");

    } catch (err: any) {
      console.log(err)
      setError(
        err?.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };


  const handleVerifyOtp = async () => {

    setOtpLoading(true);

    try {

      await privateAPI.post(
        "/api/auth/verify-otp",
        {
          email,
          otp,
          deviceId: getDeviceId()
        }
      );

      // alert(res.data.message);

      setShowOtpPopup(false);

      navigate("/admin-dashboard");

    }
    catch (err: any) {

      alert(
        err?.response?.data?.message || "Invalid OTP"
      );

    }
    finally {

      setOtpLoading(false);

    }

  };

  return (
    <div className="admin-login-container">
      {!showOtpPopup && (
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
      )}


      {showOtpPopup && (

        <div className={`otp-overlay ${showOtpPopup ? "active" : ""}`}>

          <div className="otp-popup">

            <h3>Enter OTP</h3>

            <p>
              OTP sent to your email
            </p>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value)
              }
            />

            <div className="otp-buttons">

              <button
                onClick={handleVerifyOtp}
                disabled={otpLoading}
              >
                {otpLoading
                  ? "Verifying..."
                  : "Verify OTP"}
              </button>

              <button
                className="cancel"
                onClick={() =>
                  setShowOtpPopup(false)
                }
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}
    </div>
  );
};

export default AdminLogin;
