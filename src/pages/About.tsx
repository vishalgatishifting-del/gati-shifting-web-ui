import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "./About.scss";
import about_company_photo from "../assets/about_company_photo.png"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import houseShiftingImg from "../assets/house_shifting_img.jpg"
import storageImg from "../assets/storage_img.jpg"
import internationalImg from "../assets/international_img.jpg"
import carImg from "../assets/car_img.jpg"
import bikeImg from "../assets/bike_img.jpg"
import petImg from "../assets/pet_img.jpg"
import officeImg from "../assets/office_img.jpg"
import commercialImg from "../assets/commercial_img.jpg"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import dtdc from "../assets/dtdc.png";
import dhl from "../assets/dhl.png";
import bluedart from "../assets/blue_dart.png";
import xpressbees from "../assets/xpressbee.png";
import delhivery from "../assets/delhivery.png";


import andhra_pradesh from "../assets/andhra-pradesh.jpeg"
import arunachal_pradesh from "../assets/arunachal-pradesh.jpeg"
import assam from "../assets/assam.jpeg"
import bihar from "../assets/bihar.jpeg"
import chhattisgarh from "../assets/chhattisgarh.jpeg"
import goa from "../assets/goa.jpeg"
import gujarat from "../assets/gujarat.jpeg"
// import haryana from "../assets/haryana.jpeg"
// import himachal_pradesh from "../assets/himachal-pradesh.jpeg"
// import jharkhand from "../assets/jharkhand.jpeg"
// import karnataka from "../assets/karnataka.jpeg"
// import kerala from "../assets/kerala.jpeg"
// import madhya_pradesh from "../assets/madhya-pradesh.jpeg"
// import maharashtra from "../assets/maharashtra.jpeg"
// import manipur from "../assets/manipur.jpeg"
// import meghalaya from "../assets/meghalaya.jpeg"
// import mizoram from "../assets/mizoram.jpeg"
// import nagaland from "../assets/nagaland.jpeg"
// import odisha from "../assets/odisha.jpeg"
// import punjab from "../assets/punjab.jpeg"
// import rajasthan from "../assets/rajasthan.jpeg"
// import sikkim from "../assets/sikkim.jpeg"
// import tamil_nadu from "../assets/tamil-nadu.jpeg"
// import telangana from "../assets/telangana.jpeg"
// import tripura from "../assets/tripura.jpeg"
// import uttar_pradesh from "../assets/uttar-pradesh.jpeg"
// import uttarakhand from "../assets/uttarakhand.jpeg"
// import west_bengal from "../assets/west-bengal.jpeg"
// import andaman_nicobar from "../assets/andaman-nicobar.jpeg"
// import dadra_nagar_haveli from "../assets/dadra-nagar-haveli.jpeg"
// import daman_diu from "../assets/daman-diu.jpeg"
// import jammu_kashmir from "../assets/jammu-kashmir.jpeg"
// import ladakh from "../assets/ladakh.jpeg"
// import puducherry from "../assets/puducherry.jpeg"

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";

const About = () => {

    const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 0.5; // adjust speed

  useEffect(() => {
    let animationFrameId: number;

    const scrollStep = () => {
      const slider = sliderRef.current;
      if (slider && !isPaused) {
        slider.scrollLeft += speed;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0; // seamless loop
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);


    const rows = [
        { Service_Features: "Certified Vehicle", Typical_Local_Movers: <CheckIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Insurance Cover</> },
        { Service_Features: "Vetted Drivers", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Police Verified</> },
        { Service_Features: "Tracking System", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + App Updates</> },
        { Service_Features: "Packing Quality", Typical_Local_Movers: <CheckIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Recyclable Wraps</> },
        { Service_Features: "Furniture Handling", Typical_Local_Movers: <CheckIcon />, Rehousing_Packers_Movers: <><CloseIcon /> + Tools Included</> },
        { Service_Features: "Staff Support", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Coordinator</> },
        { Service_Features: "Cushioning", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Dust-Free</> },
        { Service_Features: "Storage", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Temp Regulated</> },
        { Service_Features: "Item Protection", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Full Coverage</> },
        { Service_Features: "Helpline", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Move Advisor</> },
        { Service_Features: "Pricing", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Transparent</> },
        { Service_Features: "Eco-Friendly", Typical_Local_Movers: <CloseIcon />, Rehousing_Packers_Movers: <><CheckIcon /> + Green Materials</> },
    ];

    return (
        <>
            <section id="company-info">
                <div className="container">
                    <div className="img-bx">
                        <img src={about_company_photo} />
                    </div>
                    <div className="details">
                        <h1>About Us</h1>
                        <p>
                            At Gati, we redefine the moving experience by offering end-to-end packers and movers solutions across India. Whether you're relocating locally or to another state, we make every transition seamless, stress-free, and efficient.

                            Our expert team handles everything—from careful packing with premium materials to timely transportation and safe delivery. With clear, upfront pricing and personalized moving plans, we’ve become the go-to choice for individuals, families, and professionals.
                        </p>

                        <ul>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> 100% Safety Assurance</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> Skilled & Trained Manpower</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> 24/7 Real-Time Support</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> On-Time Pickup & Delivery</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> Premium Packing Supplies</li>
                        </ul>
                        <Link className="contact-btn" to="/contact">Enquiry Now</Link>
                    </div>
                </div>
            </section>

            <section id="our-services">
                <h1>Our Services</h1>
                <div className="container">
                    <div className="card">
                        <div className="img-bx">
                            <img src={houseShiftingImg} />
                        </div>
                        <h4>House Shifting</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={storageImg} />
                        </div>
                        <h4>Storage</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={internationalImg} />
                        </div>
                        <h4>International</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={carImg} />
                        </div>
                        <h4>Car</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={bikeImg} />
                        </div>
                        <h4>Bike</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={petImg} />
                        </div>
                        <h4>Pet</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={officeImg} />
                        </div>
                        <h4>Office</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={commercialImg} />
                        </div>
                        <h4>Commercial</h4>
                    </div>
                </div>
            </section>

            <section id="table-section">
                <h1>Service Comparison</h1>
                <div className="container">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#2563eb' }}>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Service Features</b></TableCell>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Typical Local Movers</b></TableCell>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Gati Shifting Packers</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow>
                                        <TableCell align="center">{row.Service_Features}</TableCell>
                                        <TableCell align="center">{row.Typical_Local_Movers}</TableCell>
                                        <TableCell align="center">{row.Rehousing_Packers_Movers}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>

            <section id="partners">
                <h1>Our Serivce Partners</h1>

                <div className="container">
                    <div className="row">
                        <div className="card">
                            <img src={dtdc} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <img src={dhl} />
                        </div>
                        <div className="card">
                            <img src={bluedart} />
                        </div>
                        <div className="card">
                            <img src={xpressbees} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <img src={delhivery} />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="presence">
                <h1>National Presence</h1>

                <div
                    className="presence-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{ overflow: "hidden" }}
                >
                    <div
                        className="scroll-track"
                        ref={sliderRef}
                        style={{ display: "flex", width: "max-content" }}
                    >
                        <div className="card"><div className="img-bx"><img src={andhra_pradesh} alt="Andhra Pradesh" /></div><span>Andhra Pradesh</span></div>
                        <div className="card"><div className="img-bx"><img src={arunachal_pradesh} alt="Arunachal Pradesh" /></div><span>Arunachal Pradesh</span></div>
                        <div className="card"><div className="img-bx"><img src={assam} alt="Assam" /></div><span>Assam</span></div>
                        <div className="card"><div className="img-bx"><img src={bihar} alt="Bihar" /></div><span>Bihar</span></div>
                        <div className="card"><div className="img-bx"><img src={chhattisgarh} alt="Chhattisgarh" /></div><span>Chhattisgarh</span></div>
                        <div className="card"><div className="img-bx"><img src={goa} alt="Goa" /></div><span>Goa</span></div>
                        <div className="card"><div className="img-bx"><img src={gujarat} alt="Gujarat" /></div><span>Gujarat</span></div>

                        <div className="card"><div className="img-bx"><img src={andhra_pradesh} alt="Andhra Pradesh" /></div><span>Andhra Pradesh</span></div>
                        <div className="card"><div className="img-bx"><img src={arunachal_pradesh} alt="Arunachal Pradesh" /></div><span>Arunachal Pradesh</span></div>
                        <div className="card"><div className="img-bx"><img src={assam} alt="Assam" /></div><span>Assam</span></div>
                        <div className="card"><div className="img-bx"><img src={bihar} alt="Bihar" /></div><span>Bihar</span></div>
                        <div className="card"><div className="img-bx"><img src={chhattisgarh} alt="Chhattisgarh" /></div><span>Chhattisgarh</span></div>
                        <div className="card"><div className="img-bx"><img src={goa} alt="Goa" /></div><span>Goa</span></div>
                        <div className="card"><div className="img-bx"><img src={gujarat} alt="Gujarat" /></div><span>Gujarat</span></div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default About;