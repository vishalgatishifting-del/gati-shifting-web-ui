import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarRateIcon from '@mui/icons-material/StarRate';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactsIcon from '@mui/icons-material/Contacts';
import "./Navbar.scss"
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png"



const Navbar = () => {
    return (
        <header>
            <div className="top-area">
                <a href="tel:+917290008200">
                    <LocalPhoneIcon></LocalPhoneIcon>
                    <span>Contact No - +91 7290008200</span>
                </a>
                <a href="mailto:gatishiftingpackers@gmail.com">
                    <EmailIcon></EmailIcon>
                    <span>gatishiftingpackers@gmail.com</span>
                </a>
                <a href="https://wa.me/917290008200" target="_blank" rel="noopener noreferrer">'
                    <WhatsAppIcon></WhatsAppIcon>
                    <span>Chat Now</span>
                </a>
            </div>
            <nav>
                <div className='logo'>
                    <img src={Logo} alt="Gati Shifting Packers Logo" title='Gati Shifting Logo' loading='lazy' />
                </div>
                <ul>
                    <li><Link to="/"><HomeIcon className='icon'></HomeIcon> Home</Link></li>
                    <li><Link to="/about"><InfoIcon className='icon'></InfoIcon> About Us</Link></li>
                    <li><Link to="/review"><StarRateIcon className='icon'></StarRateIcon> Review</Link></li>
                    <li><Link to="/faqs"><HelpOutlineIcon className='icon'></HelpOutlineIcon> FAQs</Link></li>
                    <li><Link to="/services"><MiscellaneousServicesIcon className='icon'></MiscellaneousServicesIcon> Services</Link></li>
                    <li><Link to="/contact"><ContactsIcon className='icon'></ContactsIcon> Contact Us</Link></li>
                    
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/review">Review</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li> */}
                </ul>

                <div className='get-in-touch-btns'>
                    <a href="tel:+917290008200"><LocalPhoneIcon></LocalPhoneIcon></a>
                    <button aria-label="Get in touch with Gati Shifting Packers">Get In Touch</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar