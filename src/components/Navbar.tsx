import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarRateIcon from '@mui/icons-material/StarRate';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactsIcon from '@mui/icons-material/Contacts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactForm from './ContactForm';

// import Logo from "../assets/logo2.webp";
import Logo from "../assets/Themes/NewYear/transparentIco.png";
// import Logo from "../assets/diwaliTheme/christmasLogo.png";
import whatsappIcon from "../assets/whatsappIcon.jpg";
import callIcon from "../assets/call.webp";
import gmailIcon from "../assets/gmailIcon.webp";



import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';









// Pngs For New Year Theme
import starPng from "../assets/Themes/NewYear/star.png"

interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ open, setOpen, successCondition }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setOpen]);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <header>
        <div className="top-area">
          <a className='phone' href="tel:+919422799477">
            <LocalPhoneIcon />
            <span>Contact No - +91 9422799477</span>
          </a>
          <a className="email" href="mailto:gatishiftingpackers@gmail.com">
            <EmailIcon />
            <span>gatishiftingpackers@gmail.com</span>
          </a>
          <a className="whatsapp" href="https://wa.me/917065994000" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            <span><span className='no'>Click to </span>Chat Now</span>
          </a>
        </div>

        <nav>
          <div className="logo">
            <Link to="/">
              <img
                src={Logo}
                alt="Gati Shifting Packers Logo"
                title="Gati Shifting Logo"
                loading="lazy"
              />
            </Link>
          </div>

          <ul className={openNav ? "active" : "inactive"}>
            <li>
              <Link
                className={currentPath === "/" ? "active" : ""}
                to="/"
                onClick={() => setOpenNav(false)}
              >
                <HomeIcon className="icon" /> Home
              </Link>
            </li>
            <li>
              <Link
                className={currentPath === "/about" ? "active" : ""}
                to="/about"
                onClick={() => setOpenNav(false)}
              >
                <InfoIcon className="icon" /> About Us
              </Link>
            </li>
            <li>
              <Link
                className={currentPath === "/review" ? "active" : ""}
                to="/review"
                onClick={() => setOpenNav(false)}
              >
                <StarRateIcon className="icon" /> Review
              </Link>
            </li>
            <li>
              <Link
                className={currentPath === "/faqs" ? "active" : ""}
                to="/faqs"
                onClick={() => setOpenNav(false)}
              >
                <HelpOutlineIcon className="icon" /> FAQs
              </Link>
            </li>
            <li>
              <Link
                className={currentPath === "/contact-us" ? "active" : ""}
                to="/contact-us"
                onClick={() => setOpenNav(false)}
              >
                <ContactsIcon className="icon" /> Contact Us
              </Link>
            </li>
            <li>
              <Link
                className={currentPath.startsWith("/services") ? "active" : ""}
                to="/services"
                onClick={() => setOpenNav(false)}
              >
                <MiscellaneousServicesIcon className="icon" /> Services
                <ArrowDropDownIcon />
              </Link>
            </li>
          </ul>

          <div className="get-in-touch-btns">
            <a href="tel:+919422799477">
              <LocalPhoneIcon />
            </a>
            <button
              aria-label="Get in touch with Gati Shifting Packers"
              onClick={handleClickOpen}
            >
              Get In Touch
            </button>
            <button className="nav-Toggle-Btn" onClick={() => setOpenNav(!openNav)}>
              {openNav ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </DialogActions>
        <DialogContent sx={{ padding: '0 !important' }}>
          <ContactForm closeControl={handleClose} showDetail={false} successCondition={successCondition} />
        </DialogContent>
      </Dialog>

      <div className="action-button">
        <a href="https://wa.me/917065994000" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="tel:+919422799477">
          <img src={callIcon} alt="Call" />
        </a>
        <a href="mailto:gatishiftingpackers@gmail.com">
          <img src={gmailIcon} alt="Email" />
        </a>
      </div>

      <div className="social-button">

        <a className='social-link-insta' href="https://www.instagram.com/gati_shifting_packers_pvt_ltd/profilecard/?igsh=eXYzY25mYXkyNG05"><InstagramIcon className='icon'></InstagramIcon></a>
        <a className='social-link-facebook' href="https://www.facebook.com/share/1CZTDwNPWw/"><FacebookIcon className='icon'></FacebookIcon></a>
        <a className='social-link-x' href="https://x.com/gati_shifting"><XIcon className='icon'></XIcon></a>
        <a className='social-link-linkedin' href="https://www.linkedin.com/in/gati-shifting-6878bb377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon className='icon'></LinkedInIcon></a>
        <a className='social-link-youtube' href="https://youtube.com/@gatishifting-moves?si=Lz283_yPnXuNCkQW"><YouTubeIcon className='icon'></YouTubeIcon></a>
        <a className='social-link-pinterest' href="https://in.pinterest.com/infogatishiftingpackers"><PinterestIcon className='icon'></PinterestIcon></a>
      </div>


      {/* <section>
        <div className='star1'>
          <img src={starPng} />
        </div>
        <div className='star2'>
          <img src={starPng} />
        </div>
      </section> */}



      {/* <section id='christmas-theme'>
        <div className='particle'></div>
        <div className='particle2'></div>
      </section> */}
    </>
  );
};

export default Navbar;
