import "./ContactForm.scss";
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {


    interface FormData {
        name: string;
        email1: string;
        phone_office: string;
        pickup_location_c: string;
        drop_location_c: string;
        service_detail_c: string;
    }

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email1: "",
        phone_office: "",
        pickup_location_c: "",
        drop_location_c: "",
        service_detail_c: ""
    });



    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
            
            setFormData({ name: "", email1: "", phone_office: "", pickup_location_c: "", drop_location_c: "",service_detail_c: ""  });
        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccess("Error submitting form. Try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="get-in-touch-form">
            <h1>Get In Touch</h1>
            <p>We make shifting fast, safe & affordable. Connect now!</p>
            <div className="container">
                <div className="detail">
                    <h4>Gati Shifting Packers and Movers</h4>
                    <span>+91 72900 08200</span>
                    <span>gatishiftingpackers@gmail.com</span>
                    <p>Office No. 001, Shree Ganesh Tower CHS, Plot No. 98, Sector 21, Ghansoli, Navi Mumbai, Maharashtra 400701, India</p>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" name="name" onChange={handleChange} value={formData.name} required/>
                        <input type="text" placeholder="Your Email" name="email1" onChange={handleChange} value={formData.email1} required/>
                        <input type="text" placeholder="Contact Number" name="phone_office" onChange={handleChange} value={formData.phone_office} required/>
                        <input type="text" placeholder="Pickup From" name="pickup_location_c" onChange={handleChange} value={formData.pickup_location_c} required/>
                        <input type="text" placeholder="Drop Point" name="drop_location_c" onChange={handleChange} value={formData.drop_location_c} required/>
                        <input type="text" placeholder="Goods Type (e.g. Furniture, Boxes)" name="service_detail_c" onChange={handleChange} value={formData.service_detail_c} required/>
                        <button type="submit" disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                        <span className="success-msg">{success && <p>{success}</p>}</span>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;