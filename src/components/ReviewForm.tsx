import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./ReviewForm.scss";

interface ReviewFormData {
  name: string;
  title: string;
  rating: number;
  experience: string;
}

const ReviewForm: React.FC = () => {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    title: "",
    rating: 0,
    experience: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRating = (value: number) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Review:", formData);
    // API call ya backend submit code yaha likhen
    alert("Review submitted successfully!");
    setFormData({ name: "", title: "", rating: 0, experience: "" });
  };

  return (
    <div className="review-page">
      <h2>Write Your Review</h2>
      <p>
        We value your experience. Share your honest feedback and help others
        make the right choice with Gati Packers and Movers.
      </p>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Review Title (e.g., Smooth Move to Delhi)"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <div className="rating-section">
          <span>Rating:</span>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= formData.rating ? "star filled" : "star"}
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <textarea
          name="experience"
          placeholder="Your Experience..."
          value={formData.experience}
          onChange={handleChange}
          rows={5}
          required
        />

        <button type="submit" className="submit-btn">
          Submit Review
        </button>
      </form>

      {/* <div className="contact-buttons">
        <button className="contact-btn call" type="button">
          Call Us
        </button>
        <button className="contact-btn email" type="button">
          Email Us
        </button>
        <button className="contact-btn whatsapp" type="button">
          Whatsapp
        </button>
      </div> */}
    </div>
  );
};

export default ReviewForm;
