import React, { useState } from "react";
import type { ChangeEvent } from "react";
import "./ReviewForm.scss";

type ReviewForm = {
  dialog: boolean;
};

interface ReviewFormData {
  name: string;
  review_title_c: string;
  rating: number;
  description: string;
}

const ReviewForm: React.FC<ReviewForm> = ({ dialog }) => {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    review_title_c: "",
    rating: 0,
    description: "",
  });

  const [hoveredStar, setHoveredStar] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRating = (value: number) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const jsonParam = JSON.stringify(formData);

    const body = new FormData();
    body.append("user", "admin_user");
    body.append("pass", "p8mju5dnk");
    body.append("url", "https://icrmondemand.com/wellnect");
    body.append("module_name", "Enqu1_Enquiry1");
    body.append("jsonParam", jsonParam);

    try {
      setSuccess("Form successfully submitted!");
      setFormData({ name: "", review_title_c: "", rating: 0, description: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess("Error submitting form. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const ratingLabels = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

  return (
    <div className={`review-page ${dialog ? "dialog-mode" : ""}`}>
      {!dialog && (
        <div className="review-hero">
          <div className="hero-badge">
            <span className="badge-icon">★</span>
            <span>Share Your Experience</span>
          </div>
          <h2>
            How Was Your <span className="highlight">Move?</span>
          </h2>
          <p>
            Your honest feedback helps thousands make smarter moving decisions.
            <br />
            <strong>Gati Packers and Movers</strong> — trusted by families across India.
          </p>
        </div>
      )}

      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <div className="input-wrapper">
              <span className="input-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g. Priya Sharma"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="review_title_c">Review Title</label>
            <div className="input-wrapper">
              <span className="input-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </span>
              <input
                id="review_title_c"
                type="text"
                name="review_title_c"
                placeholder="e.g. Smooth Move to Delhi"
                value={formData.review_title_c}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="rating-section">
          <label>Overall Rating</label>
          <div className="stars-wrapper">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star-btn ${star <= (hoveredStar || formData.rating) ? "active" : ""}`}
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  aria-label={`Rate ${star} stars`}
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </button>
              ))}
            </div>
            {(hoveredStar > 0 || formData.rating > 0) && (
              <span className="rating-label">
                {ratingLabels[hoveredStar || formData.rating]}
              </span>
            )}
          </div>
        </div>

        <div className="input-group textarea-group">
          <label htmlFor="description">Your Experience</label>
          <textarea
            id="description"
            name="description"
            placeholder="Tell us about your moving experience — was the team punctual? Were your belongings handled with care?"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
          />
          <span className="char-hint">{formData.description.length}/500</span>
        </div>

        {success && (
          <div className={`status-msg ${success.includes("Error") ? "error" : "success"}`}>
            <span className="status-icon">
              {success.includes("Error") ? "✕" : "✓"}
            </span>
            {success}
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? (
            <span className="loader-wrapper">
              <span className="spinner" />
              Submitting...
            </span>
          ) : (
            <span className="btn-content">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Submit Review
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;