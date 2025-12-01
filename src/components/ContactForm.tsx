import "./ContactForm.scss";
import React, { useState, useRef } from "react";
import axios from "axios";
import { sendEmail } from "../utils/emailHelper";

import ReCAPTCHA from "react-google-recaptcha"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getUserSource } from "../utils/sourceTracker";

interface ContactFormProps {
    showDetail?: true | false;
    closeControl?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ showDetail = true, closeControl }) => {


    interface FormData {
        Name: string;
        Email: string;
        Phone: string;
        From: string;
        To: string;
        Goods: string;
    }

    const [formData, setFormData] = useState<FormData>({
        Name: "",
        Email: "",
        Phone: "",
        From: "",
        To: "",
        Goods: ""
    });



    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");


    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const recaptchaRef = useRef<any>(null); // 👈 Ref banaya


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaValue) {
            alert("Please verify that you're not a robot!");
            return;
        }
        setLoading(true);
        setSuccess("");

        const jsonParam = JSON.stringify(formData);

        const body = new FormData();
        body.append("user", "admin_user");
        body.append("pass", "p8mju5dnk");
        body.append("url", "https://icrmondemand.com/wellnect");
        body.append("module_name", "Enqu1_Enquiry1");
        body.append("jsonParam", jsonParam);
        const payload = {
            ...formData,
            landingPage: window.location.href,
        };

        try {

           await axios.post("https://api.gatishiftingpackers.com/create-lead", payload);

            const userSource = getUserSource();
            const templateParams = {
                name: formData.Name,
                email: formData.Email,
                phone: formData.Phone,
                pickup_location: formData.From,
                drop_location: formData.To,
                service_detail: "NAN. Contact Form Query",
                good_type: "NAN. Contact Form Query",
                userSource: userSource
            };

            sendEmail(templateParams)
            gtag('event', 'conversion', {
                'send_to': 'AW-17573064597/5JeFCIznu74bEJXfvrtB',
                'value': 1.0,
                'currency': 'INR'
            });
            setSuccess("Form successfully submitted!");

            setFormData({ Name: "", Email: "", Phone: "", From: "", To: "", Goods: "" });

            recaptchaRef.current?.reset();
            setCaptchaValue(null);
            closeControl?.();
        } catch (error) {
            setSuccess("Error submitting form. Try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="get-in-touch-form" style={(showDetail == false) ? { boxShadow: "0 5px 20px #00000029", marginTop: "0px", width: "100%", padding: "14px" } : {}}>
            <h2>Get Free Quote in 1 min!</h2>
            <p>Fast, Safe & Affordable Shifting - Book Now & Save Upto 20%!</p>
            <div className="container" style={(showDetail == false) ? { width: "100%", boxShadow: "none" } : {}}>
                {(showDetail == true ? (

                    <div className="detail">
                        <h4>Gati Shifting Packers and Movers</h4>
                        <span>+91 9422799477</span>
                        <span>gatishiftingpackers@gmail.com</span>
                        <p>Office No. 001, Shree Ganesh Tower CHS, Plot No. 98, Sector 21, Ghansoli, Navi Mumbai, Maharashtra 400701, India</p>
                    </div>
                ) : "")}
                <div className="form" style={(showDetail == false) ? { width: "100%" } : {}} >
                    <form onSubmit={handleSubmit} className={(showDetail == false) ? "dialogeForm" : " "}>
                        <input type="text" placeholder="Your Name" name="Name" onChange={handleChange} value={formData.Name} required />

                        {showDetail == true ? (

                            <input type="text" placeholder="Your Email" name="Email" onChange={handleChange} value={formData.Email} required />
                        ) : ""}

                        <input type="text" placeholder="Contact Number" name="Phone" onChange={handleChange} value={formData.Phone} required />
                        <input type="text" placeholder="Pickup From" name="From" onChange={handleChange} value={formData.From} required />
                        <input type="text" placeholder="Drop Point" name="To" onChange={handleChange} value={formData.To} required />

                        {showDetail == true ? (<input type="text" placeholder="Goods Type (e.g. Furniture, Boxes)" name="Goods" onChange={handleChange} value={formData.Goods} required />) : ""}


                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LfaOf4rAAAAAGZBXvb01FTAtYQoh0UXm4ChBDHV"
                            onChange={(value: string | null) => setCaptchaValue(value)}
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? "Submitting..." : "Get My Free Quote"}
                        </button>
                        <i>Instant Response | No Hidden Charges | 24x7 Support</i>
                        <a href="https://wa.me/917065994000">Chat Instantly on<WhatsAppIcon className="icon"></WhatsAppIcon></a>
                        <span className="success-msg">{success && <p>{success}</p>}</span>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;