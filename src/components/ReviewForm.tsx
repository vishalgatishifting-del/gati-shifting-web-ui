import React, { useState } from "react";
import type { ChangeEvent } from "react";
import "./ReviewForm.scss";
import axios from "axios";
type ReviewForm = {
  dialog: boolean;
};
interface ReviewFormData {
  name: string;
  review_title_c: string;
  rating: number;
  description: string;
}

const ReviewForm: React.FC<ReviewForm> = ({dialog}) => {
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    review_title_c: "",
    rating: 0,
    description: "",
  });


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

      const apiUrl = "https://icrmondemand.com/wellnect/index.php?entryPoint=CreateEnquiryAPI";

      const response = await axios.post(apiUrl, body);

      console.log("CRM Response:", response.data);
      setSuccess("Form successfully submitted!");
      setFormData({ name: "", review_title_c: "", rating: 0, description: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess("Error submitting form. Try again!");
    } finally {
      setLoading(false);
    }
  };



  // setFormData({ name: "", title: "", rating: 0, experience: "" });

  return (
    <div className="review-page" style={dialog ? {margin: "0px", padding: "0px"} : {}}>
      <h2>Write Your Review</h2>
      <p  style={dialog ? {margin: "0px 5px"} : {}}>
        We value your experience. Share your honest feedback and help others
        make the right choice with Gati Packers and Movers.
      </p>
      <form className="review-form" onSubmit={handleSubmit} style={dialog ? {padding: "10px"} : {}}>
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
          name="review_title_c"
          placeholder="Review Title (e.g., Smooth Move to Delhi)"
          value={formData.review_title_c}
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
          name="description"
          placeholder="Your Experience..."
          value={formData.description}
          onChange={handleChange}
          rows={5}
          required
        />
        <span className="green-msg">{success && <p>{success}</p>}</span>
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Review"}
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
