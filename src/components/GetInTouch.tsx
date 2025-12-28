import getInTouchImg from "../assets/get-in-touch.webp"
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./GetInTouch.scss";

const GetInTouch = () => {
    return (
        <section id="get-in-touch">
            <div className="content">
                <div className="img-slider">
                    <img src={getInTouchImg} alt="Get In Touch Image" title="Get In Touch" loading="lazy" />
                </div>
                <div className="details">
                    <h1>Get In Touch</h1>
                    <p>For reliable shifting services across India, choose Gati Shifting Packers PVT LTD. We provide door-to-door transport and affordable logistics solutions.</p>

                    <ul>
                        <li><CallIcon></CallIcon> <span>+91 9422799477</span></li>
                        <li><EmailIcon></EmailIcon> <span>gatishiftingpackers@gmail.com</span></li>
                        <li><a href="https://wa.me/917290008200"><ChatBubbleIcon></ChatBubbleIcon><span>Chat Now</span></a></li>
                        <li><LocationOnIcon></LocationOnIcon><span>India</span></li>
                    </ul>
                    <div className="social-links">
                        <a href="https://www.instagram.com/gati_shifting_packers_pvt_ltd/profilecard/?igsh=eXYzY25mYXkyNG05"><InstagramIcon></InstagramIcon></a>
                        <a href="https://www.facebook.com/share/1CZTDwNPWw/"><FacebookIcon></FacebookIcon></a>
                        <a href="https://x.com/gati_shifting"><XIcon></XIcon></a>
                        <a href="https://www.linkedin.com/in/gati-shifting-6878bb377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon></LinkedInIcon></a>
                        <a href="https://youtube.com/@gatishifting-moves?si=Lz283_yPnXuNCkQW"><YouTubeIcon></YouTubeIcon></a>
                        <a href="https://in.pinterest.com/infogatishiftingpackers"><PinterestIcon></PinterestIcon></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch;