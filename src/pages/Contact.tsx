import BrandList from "../components/BrandsList";
import ContactForm from "../components/ContactForm";
import FAQList from "../components/FAQList";
import OfficeLocation from "../components/OfficeLocation";
import "./Contact.scss"
import { Helmet } from "react-helmet-async";


interface props{
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact = ({successCondition} : props)=>{
    return (
        <>

        <Helmet>
      
       <title>Contact Gati Shifting Packers | Get a Quote</title> 
        <meta  name="description"content="Reach out to Gati Shifting Packers for quotes, assistance, or inquiries. Our team is ready to help with your relocation needs through calls, messages, or the contact form." /> 
        <meta  name="keywords"content="Gati Shifting contact, Packers and Movers contact, relocation support, moving service inquiry, Gati Shifting Packers customer care"  /> 
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Gati Shifting Packers & Movers" />
        <meta  property="og:description" content="Reach out to Gati Shifting Packers for quotes, bookings, and relocation support. Available for home, office, and pan-India moves." /> 
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatishiftingpackers.com" /> 
        <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" /> 
      

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Gati Shifting Packers" /> 
        <meta  name="twitter:description" content="Contact Gati Shifting Packers for relocation support, free cost estimates, and customer service across India." /> 
        <meta name="twitter:image" content="https://gatishiftingpackers.com/metaImg.png" /> 
      </Helmet>

        <section id="contact-page-sec">
        <ContactForm successCondition={successCondition} />
        <BrandList />
        <OfficeLocation />
        <FAQList />
        </section>
        </>
    )
}

export default Contact;