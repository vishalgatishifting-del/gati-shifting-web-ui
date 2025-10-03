import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";


import StarRateIcon from '@mui/icons-material/StarRate';
import CollectionsIcon from '@mui/icons-material/Collections';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

import { Link } from "react-router-dom";
import "./WhoWeAre.scss"
import Slider from "react-slick";
import { Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';



const Who_we_are = () => {
    
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipeToSlide: true
    };
    return (
        <>
            <section id="who-we-are-section">
                <div className="container">
                    <div className="content">
                        <h1>Who We Are</h1>
                        <p>Founded in <b>2006, Gati Shifting Packers and Movers</b> has emerged as one of the most reliable and respected names in the Indian relocation and logistics industry. With our headquarters based in Mumbai and a wide network of branches across the country, we are committed to delivering top-notch shifting experiences with unmatched professionalism and care.

                            Over the years, we have helped thousands of families, individuals, and businesses move safely and efficiently — whether it’s local, intercity, or interstate shifting. Our services include comprehensive packing, secure transportation, careful loading and unloading, organized unpacking, and even warehouse storage and vehicle transportation. Every move is handled with personal attention, precision, and a promise of on-time delivery.

                            At the heart of Gati Shifting Packers and Movers is a team of highly skilled professionals with over a decade of hands-on experience in the logistics and moving industry. Our staff is thoroughly trained to handle fragile items, heavy furniture, electronics, office equipment, and vehicles using modern techniques and the best-quality packing materials. From bubble wrap to tamper-proof cartons and GPS-tracked transport vehicles, we ensure maximum safety at every step.

                            What sets us apart is our unwavering commitment to our core values: <b>transparency, accountability, safety, timeliness, and customer satisfaction</b>. We provide upfront quotations with no hidden charges, round-the-clock customer support, and end-to-end responsibility for every move. Our clients trust us not just because we move their belongings, but because we move them with care, responsibility, and integrity.

                            Our 24/7 customer care team is always ready to assist, provide real-time updates, and resolve concerns, ensuring your peace of mind throughout the shifting process. Whether you are a student moving into a hostel, a family relocating to a new city, a corporate office shifting workspace, or a car owner transporting your vehicle across states — Gati Shifting Packers and Movers is your all-in-one relocation solution.

                            With over <b>18+ years of experience</b>, a growing base of loyal customers, and a passion for excellence, Gati Shifting is more than just a packers and movers company — we are your trusted relocation partner. We continue to evolve and expand, staying ahead of industry trends, investing in technology, and improving our service standards to ensure that your next move is not just a transfer of goods, but a smooth and memorable experience.

                            Choose Gati Shifting Packers and Movers for a moving experience that is smooth, transparent, affordable, and backed by professionals who care. Your journey begins with us — and we ensure it begins on the right foot.</p>
                    </div>
                </div>
            </section>
            <section id="customer-review">
                <h1>What Our Customers Say</h1>
                <h4>Real experiences from real people. Watch how we made their move stress-free.</h4>

                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MlgLNz2-wbo?si=CWB7OKc-LM9dVgoa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
            <GetInTouch></GetInTouch>
            <AwardCertification></AwardCertification>
            
            <section id="trust-us-section">
                <h1>Trust Us With Confidence</h1>
                <p>Verify our reliability through real reviews, videos, images, or even a direct call:</p>
                <div className="cards">
                    <Link className="card" to="/review">
                        <StarRateIcon className="icon"></StarRateIcon>
                        <span>Customer Review</span>
                    </Link>
                    <Link className="card" to="/review">
                        <CollectionsIcon className="icon"></CollectionsIcon>
                        <span>Photo Gallery</span>
                    </Link>
                    <Link className="card" to="/review">
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
            <BrandList></BrandList>
            <section id="customer-review-list">
                <h1>What Our Customers Say</h1>
                <p className="para">Genuine feedback from people who’ve moved homes, offices & even countries with us.</p>

                <div className="container">

                    <Slider {...settings2}>
                        <Box key="1" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Smooth Domestic Move</h4>
                                    <p>"Gati made our move from Delhi to Bangalore seamless."</p>
                                    <div className="rating">
                                        ★★★★☆
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "orange", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        A
                                    </Avatar>
                                    Arjun S.
                                </div>
                            </div>
                        </Box>
                        <Box key="2" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>International Relocation</h4>
                                    <p>"Moved from Mumbai to Dubai. Excellent support."</p>
                                    <div className="rating">
                                        ★★★★★
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "#a6a600", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        P
                                    </Avatar>
                                    Pooja M.
                                </div>
                            </div>
                        </Box>
                        <Box key="3" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Packing Quality</h4>
                                    <p>"Boxes were well labeled and nothing broke."</p>
                                    <div className="rating">
                                        ★★★★☆
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "red", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        R
                                    </Avatar>
                                    Ravi K.
                                </div>
                            </div>
                        </Box>
                        <Box key="4" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Fast and Reliable</h4>
                                    <p>"They delivered from Pune to Hyderabad a day early."</p>
                                    <div className="rating">
                                        ★★★⯨☆
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "Gray", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        S
                                    </Avatar>
                                    Simran T.
                                </div>
                            </div>
                        </Box>
                        <Box key="5" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Bike Transport</h4>
                                    <p>"Bike arrived in Chennai scratch-free. Happy!"</p>
                                    <div className="rating">
                                        ★★★★★
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "orange", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        N
                                    </Avatar>
                                    Neeraj B.
                                </div>
                            </div>
                        </Box>
                        <Box key="6" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Office Shift</h4>
                                    <p>"Relocated office to Gurgaon over the weekend."</p>
                                    <div className="rating">
                                        ★★★★⯨
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "#b80046", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        M
                                    </Avatar>
                                    Megha R.
                                </div>
                            </div>
                        </Box>


                        <Box key="6" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Furniture Shifting</h4>
                                    <p>"No damage, no stress. Superb service."</p>
                                    <div className="rating">
                                        ★★★★★
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "#ea00ff", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        K
                                    </Avatar>
                                    Kavita D.
                                </div>
                            </div>
                        </Box>
                        <Box key="6" sx={{ position: "relative", outline: "none" }}>
                            <div className="card">
                                <div className="detail">
                                    <h4>Pet Relocation</h4>
                                    <p>"Handled my dog with care during the move. Thankful!"</p>
                                    <div className="rating">
                                        ★★★★☆
                                        {/* <span>4.5</span> */}
                                    </div>
                                </div>
                                <div className="customer-name">
                                    <Avatar
                                        sx={{ bgcolor: "#00fff5", width: "25px", height: "25px", fontSize: "15px", marginRight: "7px" }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        S
                                    </Avatar>
                                    Suresh P.
                                </div>
                            </div>
                        </Box>
                    </Slider>


                </div>
            </section>
            <FAQList></FAQList>
        </>
    )
}

export default Who_we_are;