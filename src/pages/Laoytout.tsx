import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from 'react';
import PopUp from "../components/PopUpDisplay.tsx"
import ChaportWidget from "../components/ChatPort.tsx";
import whatsappIcon from "../assets/whatsappIcon.webp";
import callIcon from "../assets/call.webp";
import gmailIcon from "../assets/gmailIcon.webp";
// import Popup from "../components/Popup";


import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [visibilityCondition, setVisibilityCondition] = useState<boolean>(false);
    return (
        <>
            <div className="action-button">
                <a href="https://wa.me/917065994000" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappIcon} alt="WhatsApp" loading="eager"  />
                </a>
                <a href="tel:+919422799477">
                    <img src={callIcon} alt="Call" loading="eager"  />
                </a>
                <a href="mailto:gatishiftingpackers@gmail.com">
                    <img src={gmailIcon} alt="Email" loading="eager"  />
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
            {/* <Popup /> */}
            <ChaportWidget></ChaportWidget>
            <PopUp visibility={visibilityCondition} condition={setVisibilityCondition}></PopUp>
            <Navbar successCondition={setVisibilityCondition} setOpen={setOpen} open={open} />
            <ScrollToTop>
                {children}
            </ScrollToTop>
            <Footer />
        </>
    );
};

export default Layout;
