import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import './ZohoForm.css';
import { submitForm } from '../api/formAPI';
import CircularProgress from '@mui/material/CircularProgress';
// import axios from 'axios';

type FormData = {
  Name: string;
  Email: string;
  Phone: string;
  From: string;
  To: string;
  Goods: string;
};

interface props {
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}
const ZohoForm: React.FC<props> = ({ successCondition }) => {

  const [loading, setLoading] = useState(false);
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
      [name]: value
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


    setLoading(true);

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

        setLoading(false);
        return;
      }
    }

    if (!validateEmail(formData.Email)) {
      setLoading(false);
      alert('Please enter a valid email address.');
      return;
    }

    const payload = {
      ...formData,
      landingPage: window.location.href,
    };

    try {

      const response = await submitForm(payload);

      if (response) {
        setFormData({
          Name: '',
          Email: '',
          Phone: '',
          From: '',
          To: '',
          Goods: ''
        });
        successCondition(true)


        // try {
        //   axios.post(
        //     "https://script.google.com/macros/s/AKfycbwx0nY0P8Z2ydcecNzI1gS0Tvj_gz8G2zxY_Jt1FS4kdaw-IASVsw5s7ZSQiZxikWkVtQ/exec",
        //     JSON.stringify({
        //       id: "Website",
        //       ad_id: "Website",
        //       ad_name: "Website",
        //       adset_id: "Website",
        //       adset_name: "Website",
        //       campaign_id: "Website",
        //       campaign_name: "Website",
        //       form_id: "Website",
        //       form_name: "Website",
        //       is_organic: "true",
        //       platform: "Website",
        //       full_name: formData.Name,
        //       "Column 1": formData.Phone,
        //       email: formData.Email,
        //       lead_status: "CREATED",
        //       "Lead Notes": "",
        //       Update: ""
        //     }),
        //     {
        //       headers: {
        //         "Content-Type": "text/plain;charset=utf-8"
        //       }
        //     }
        //   );

        // } catch (err) {
        //   console.error(err);
        // }


      } else {
        alert('Failed to submit form...');
      }

      setLoading(false);
    } catch (err) {
      alert('This error occured Error submitting form.' + err);

      setLoading(false);
    }
  };

  return (
    <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm">
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
            placeholder={key + '*'}
          />
        ))}

        <div className="zcwf_row">
          <div className="zcwf_col_lab"></div>
          <div className="zcwf_col_fld">
            <button type='submit' disabled={loading}>
              {loading ? <CircularProgress color='inherit'></CircularProgress> : "Get Free Quote"}</button>
            <input
              style={{ marginLeft: "10px", cursor: "pointer" }}
              type="reset"
              value="Reset"
              className="zcwf_button"
              onClick={() =>
                setFormData({
                  Name: '',
                  Phone: '',
                  Email: '',
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
