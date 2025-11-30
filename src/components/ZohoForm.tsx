import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import './ZohoForm.css';
import axios from "axios";

type FormData = {
  Name: string;
  Email: string;
  Phone: string;
  From: string;
  To: string;
  Goods: string;
};

const ZohoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Name: '',
    Phone: '',
    Email: '',
    From: '',
    To: '',
    Goods: ''
  });

  // Change Handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value // ✅ TypeScript ko key safe karne ke liye FormKeys use kar sakte ho
    }));
  };

  // Email Validation
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Submit Handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const mandatoryFields: { name: keyof FormData; label: string }[] = [
      { name: 'Name', label: 'Name' },
      { name: 'Email', label: 'Email' },
      { name: 'Phone', label: 'Phone' },
      { name: 'From', label: 'Pickup From' },
      { name: 'To', label: 'Drop point' },
      { name: 'Goods', label: 'Goods type' }
    ];

    for (let field of mandatoryFields) {
      if (!formData[field.name].trim()) {
        alert(`${field.label} cannot be empty.`);
        return;
      }
    }

    if (!validateEmail(formData.Email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const payload = {
      ...formData,
      landingPage: window.location.href,
    };

    try {
      console.log(payload)
      const response = await axios.post("https://api.gatishiftingpackers.com/create-lead", payload);

      if (response) {
        alert('Form submitted successfully!');
        setFormData({
          Name: '',
          Email: '',
          Phone: '',
          From: '',
          To: '',
          Goods: ''
        });
      } else {
        alert('Failed to submit form...');
      }
    } catch (err) {
      console.error(err);
      alert('This error occured Error submitting form.' + err);
    }
  };

  return (
    <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm">
      <div className="zcwf_title">Gati Shifting Website</div>
      <form onSubmit={handleSubmit}>
        {(
          Object.keys(formData) as Array<keyof FormData>
        ).map((key) => (
              <input
                type={key === 'Email' ? 'email' : 'text'}
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key+'*'}
              />
        ))}

        <div className="zcwf_row">
          <div className="zcwf_col_lab"></div>
          <div className="zcwf_col_fld">
            <button type='submit'>Get Free Quote</button>
            <input
              type="reset"
              value="Reset"
              className="zcwf_button"
              onClick={() =>
                setFormData({
                  Name: '',
                  Email: '',
                  Phone: '',
                  From: '',
                  To: '',
                  Goods: ''
                })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ZohoForm;
