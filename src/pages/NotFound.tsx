import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss"

const NotFound: React.FC = () => {
  return (
    <div className="container-not-found" style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "90px", color: "#ff4c4c" }}>404</h1>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Oops! Page Not Found
      </h2>
      <p style={{ marginBottom: "20px", color: "#555" }}>
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="redirect-btn"
        style={{
          padding: "10px 20px",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
