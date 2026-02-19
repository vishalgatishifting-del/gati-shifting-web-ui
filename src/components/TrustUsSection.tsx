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

  <div className="trust-header">
    <h2>Trust Us With Confidence</h2>
    <p>
      Verify our reliability through genuine reviews, real photos, videos,
      or connect with us directly.
    </p>
  </div>

  <div className="cards">

    <Link className="card" to="/review">
      <div className="icon-box">
        <StarRateIcon className="icon"/>
      </div>
      <span>Customer Reviews</span>
    </Link>

    <Link className="card" to="/photo-gallery">
      <div className="icon-box">
        <CollectionsIcon className="icon"/>
      </div>
      <span>Photo Gallery</span>
    </Link>

    <Link className="card" to="/video-gallery">
      <div className="icon-box">
        <PlayCircleIcon className="icon"/>
      </div>
      <span>Video Gallery</span>
    </Link>

    <a className="card" href="https://wa.me/917065994000">
      <div className="icon-box whatsapp">
        <WhatsAppIcon className="icon"/>
      </div>
      <span>WhatsApp Chat</span>
    </a>

    <a className="card" href="tel:+919422799477">
      <div className="icon-box call">
        <CallIcon className="icon"/>
      </div>
      <span>Call Now</span>
    </a>

  </div>

</section>

    )
}

export default TrustUsSection;