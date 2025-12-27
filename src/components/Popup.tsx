import React, { useEffect, useState } from "react";
import "./Popup.scss"; // styling alag file me rakhenge
import { Link } from "react-router-dom";

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={() => setShowPopup(false)}>
          ✕
        </button>
        <h2>🎁 New Year Special Offer! 🎁</h2>
        <p>Get <strong>20% OFF</strong> if you book your shifting today!</p>
        <Link className="popup-btn" to="/contact-us">
          Get Free Quote
        </Link>
      </div>
    </div>
  );
};

export default Popup;
