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
import Logo from "../assets/logo2.webp"
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import ContactForm from './ContactForm';

import whatsappIcon from "../assets/whatsappIcon.jpg"
import callIcon from "../assets/call.webp"
import gmailIcon from "../assets/gmailIcon.webp"





const Navbar = () => {


    useEffect(() => {
        // 2 second baad dialog khulega
        const timer = setTimeout(() => {
            setOpen(true);
        }, 2000);

        // cleanup (agar component unmount ho jaye)
        return () => clearTimeout(timer);
    }, []);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [openNav, setOpenNav] = useState(false);
    const [active, isActive] = useState("home");
    return (
        <>
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
                    <a href="https://wa.me/917065994000" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon></WhatsAppIcon>
                        <span>Chat Now</span>
                    </a>
                </div>
                <nav>
                    <div className='logo'>
                        <Link to="/"><img src={Logo} alt="Gati Shifting Packers Logo" title='Gati Shifting Logo' loading='lazy' /></Link>
                    </div>
                    <ul className={(openNav) ? "active" : "inactive"}>
                        <li><Link className={(active == "home" ? "active" : "")} to="/" onClick={() => { setOpenNav(false); isActive("home") }}><HomeIcon className='icon'></HomeIcon> Home</Link></li>
                        <li><Link className={(active == "about" ? "active" : "")} to="/about" onClick={() => { setOpenNav(false); isActive("about") }}><InfoIcon className='icon'></InfoIcon> About Us</Link></li>
                        <li><Link className={(active == "review" ? "active" : "")} to="/review" onClick={() => { setOpenNav(false); isActive("review") }}><StarRateIcon className='icon'></StarRateIcon> Review</Link></li>
                        <li><Link className={(active == "faqs" ? "active" : "")} to="/faqs" onClick={() => { setOpenNav(false); isActive("faqs") }}><HelpOutlineIcon className='icon'></HelpOutlineIcon> FAQs</Link></li>
                        <li><Link className={(active == "services" ? "active" : "")} to="/services" onClick={() => { setOpenNav(false); isActive("services") }}><MiscellaneousServicesIcon className='icon'></MiscellaneousServicesIcon> Services</Link></li>
                        <li><Link className={(active == "contact-us" ? "active" : "")} to="/contact-us" onClick={() => { setOpenNav(false); isActive("contact-us") }}><ContactsIcon className='icon'></ContactsIcon> Contact Us</Link></li>

                        {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/review">Review</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li> */}
                    </ul>

                    <div className='get-in-touch-btns'>
                        <a href="tel:+917290008200"><LocalPhoneIcon></LocalPhoneIcon></a>
                        <button aria-label="Get in touch with Gati Shifting Packers" onClick={handleClickOpen}>Get In Touch</button>
                        <button className='nav-Toggle-Btn' onClick={() => setOpenNav(!openNav)}>
                            {(openNav ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>)}

                        </button>
                    </div>
                </nav>
            </header>

            <Dialog open={open} onClose={handleClose}>
                <DialogActions>
                    <Button onClick={handleClose}><CloseIcon></CloseIcon></Button>
                </DialogActions>
                <DialogContent sx={{ padding: '0 !important' }}>
                    <ContactForm closeControl={handleClose} showDetail={false}></ContactForm>
                </DialogContent>
            </Dialog>

            <div className='action-button'>
                <a href="https://wa.me/917065994000" target="_blank" rel="noopener noreferrer"><img src={whatsappIcon} /></a>
                <a href="tel:+917290008200"><img src={callIcon} /></a>
                <a href="mailto:gatishiftingpackers@gmail.com"> <img src={gmailIcon} /></a>

            </div>
        </>
    )
}

export default Navbar