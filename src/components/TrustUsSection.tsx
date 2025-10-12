import StarRateIcon from '@mui/icons-material/StarRate';
import CollectionsIcon from '@mui/icons-material/Collections';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { Link } from "react-router-dom";
import "./TrustUsSection.scss"

const TrustUsSection = () => {
    return (
        <section id="trust-us-section">
            <h1>Trust Us With Confidence</h1>
            <p>Verify our reliability through real reviews, videos, images, or even a direct call:</p>
            <div className="cards">
                <Link className="card" to="/review">
                    <StarRateIcon className="icon"></StarRateIcon>
                    <span>Customer Review</span>
                </Link>
                <Link className="card" to="/photo-gallery">
                    <CollectionsIcon className="icon"></CollectionsIcon>
                    <span>Photo Gallery</span>
                </Link>
                <Link className="card" to="/video-gallery">
                    <PlayCircleIcon className="icon"></PlayCircleIcon>
                    <span>Video Gallery</span>
                </Link>
                <a className="card" href="https://wa.me/917290008200">
                    <WhatsAppIcon className="icon"></WhatsAppIcon>
                    <span>Chat With Us</span>
                </a>
                <a className="card" href="tel:+917290008200">
                    <CallIcon className="icon"></CallIcon>
                    <span>Call Now</span>
                </a>
            </div>
        </section>
    )
}

export default TrustUsSection;