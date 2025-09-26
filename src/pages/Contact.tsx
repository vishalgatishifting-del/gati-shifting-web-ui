import BrandList from "../components/BrandsList";
import ContactForm from "../components/ContactForm";
import FAQList from "../components/FAQList";
import OfficeLocation from "../components/OfficeLocation";
import "./Contact.scss"




const Contact = ()=>{
    return (
        <>
        <section id="contact-page-sec">
        <ContactForm />
        <BrandList />
        <OfficeLocation />
        <FAQList />
        </section>
        </>
    )
}

export default Contact;