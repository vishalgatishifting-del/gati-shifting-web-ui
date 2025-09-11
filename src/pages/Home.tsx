import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "./Home.scss"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FactoryIcon from '@mui/icons-material/Factory';
import whyGatiImg from "../assets/why_gati_banner.jpg";

const Home: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        "src/assets/gatislider1.png",
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    ];

    return (
        <>
            <Box sx={{ width: "100%", overflow: "hidden" }}>
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <Box key={index} sx={{ position: "relative", outline: "none" }}>
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                style={{
                                    width: "100%",
                                    height: "450px",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>

            <div className="service-tab">
                <div className="tabs">
                    <button><LocalShippingIcon></LocalShippingIcon> <span>Domestic</span></button>
                    <button><DirectionsCarFilledIcon></DirectionsCarFilledIcon><span>Car</span></button>
                    <button><WarehouseIcon></WarehouseIcon><span>Storage</span></button>
                    <button><ConnectingAirportsIcon></ConnectingAirportsIcon><span>Flight</span></button>
                    <button><LanguageIcon></LanguageIcon><span>International</span></button>
                    <button><BusinessCenterIcon></BusinessCenterIcon><span>Office</span></button>
                    <button><FactoryIcon></FactoryIcon><span>Commercial</span></button>
                </div>

                <div className="form-area">
                    <h3>Get a free <span>Domestic Moving</span> Quote</h3>
                    <form>
                        <input type="text" placeholder="Full Name*" />
                        <input type="text" placeholder="Mobile No*" />
                        <input type="text" placeholder="Email ID" />
                        <input type="text" placeholder="From*" />
                        <input type="text" placeholder="To*" />
                        <input type="text" placeholder="Goods Type (e.g., Household, " />
                        <br />
                        <button>Submit</button>
                    </form>

                </div>
            </div>

            <section id="company-description">
                <div className="img-bx">
                    <img src={whyGatiImg} />
                </div>
                <div className="text-bx">
                    <h1>Moving Services by Gati Shifting Packers Movers</h1>
                    <p>
                        Gati House Shifting Packers Movers are always ready to help make the moving and packing experience excellent, more efficient and easier for you and your family. Just sit back, chill out and know that you are in safe hands!

                        Relocating to a new place can be a tiring and difficult process. There are many things to arrange and pack, including heavy furniture, electrical appliances and fragile and valuable antique items.

                        Gati House Shifting's goal is to make your relocating experience as trouble-free as possible. Let us manage all of the difficult work. Our job is to be sure that your shifting is complete on time, every time.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Home