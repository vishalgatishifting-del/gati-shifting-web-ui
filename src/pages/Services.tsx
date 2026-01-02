import BrandList from "../components/BrandsList";
import ContactForm from "../components/ContactForm";
import ServicesSection from "../components/Services";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";
import "./Services.scss"

import { Helmet } from "react-helmet-async";
import "./Services.scss"

import { useState } from "react";
import petSlider from "../assets/expandable_slider/pet.webp";
import bike from "../assets/expandable_slider/bike.webp";
import house from "../assets/expandable_slider/house.webp";
import car from "../assets/expandable_slider/car.webp";


import AV_icon_png from "../assets/servicesPageImg/ac.png"
import House_icon_png from "../assets/servicesPageImg/household.png"
import Bike_icon_png from "../assets/servicesPageImg/bike.png"
import Car_icon_png from "../assets/servicesPageImg/car.png"
import Pet_icon_png from "../assets/servicesPageImg/pets.png"
import Office_icon_png from "../assets/servicesPageImg/office.png"
import Commercial_icon_png from "../assets/servicesPageImg/commercial.png"
import Luggage_icon_png from "../assets/servicesPageImg/luggage.png"
import Domestic_icon_png from "../assets/servicesPageImg/domestic.png"
import International_icon_png from "../assets/servicesPageImg/international.png"
import Temp_icon_png from "../assets/servicesPageImg/tempo.png"
import Warehouse_icon_png from "../assets/servicesPageImg/warehouse.png"
import Storage_icon_png from "../assets/servicesPageImg/storage.png"
import Cold_icon_png from "../assets/servicesPageImg/cold.png"


type Services = {
    id: number;
    tt: string;
    title: string;
    description: string;
    Img?: string;
};


interface props {
    successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}
const Services = ({ successCondition }: props) => {

    interface Service {
        shiftingType: string;
        packingMaterial: string;
        movingCharges: string;
    }

    const servicesData: Service[] = [
        { shiftingType: "1 BHK Moving", packingMaterial: "Rs. 500 - 1000", movingCharges: "Rs. 2500 - 3000" },
        { shiftingType: "2 BHK Moving", packingMaterial: "Rs. 800 - 1200", movingCharges: "Rs. 3000 - 3500" },
        { shiftingType: "3/4 BHK Moving", packingMaterial: "Rs. 1200 - 1500", movingCharges: "Rs. 3500 - 3800" },
        { shiftingType: "Few Items Only", packingMaterial: "Rs. 600 - 1000", movingCharges: "Rs. 2000 - 2800" },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    interface ImageItem {
        img: string;
        heading: string;
        text: string;
    }

    const imagesForC: ImageItem[] = [
        { img: house, heading: "House Shifting", text: "Smooth and reliable house shifting with professional packing, loading, transport, and setup at your new home." },
        { img: car, heading: "Car Transport", text: "Car shifting through open or enclosed carriers with tracking, insurance, and timely delivery." },
        { img: bike, heading: "Bike Transport", text: "Bike relocation with protective wrapping, proper anchoring, and doorstep pickup and delivery." },
        { img: petSlider, heading: "Pet Relocation", text: "Stress-free pet transportation with temperature-controlled spaces and necessary travel documentation." },
    ];


    const services: Services[] = [
        { id: 1, tt: "House", title: "House Shifting", description: "Smooth and reliable house shifting with professional packing, loading, transport, and setup at your new home.", Img: House_icon_png },
        { id: 2, tt: "AC", title: "AC Shifting", description: "Expert AC dismantling, secure packaging, and reinstallation at your destination by skilled technicians.", Img: AV_icon_png },
        { id: 3, tt: "Bike", title: "Bike Transport", description: "Bike relocation with protective wrapping, proper anchoring, and doorstep pickup and delivery.", Img: Bike_icon_png },
        { id: 4, tt: "Car", title: "Car Transport", description: "Car shifting through open or enclosed carriers with tracking, insurance, and timely delivery.", Img: Car_icon_png },
        { id: 5, tt: "Pet", title: "Pet Relocation", description: "Stress-free pet transportation with temperature-controlled spaces and necessary travel documentation.", Img: Pet_icon_png },
        { id: 6, tt: "Office", title: "Office Shifting", description: "Efficient office relocation ensuring minimal downtime, safe equipment handling, and IT setup support.", Img: Office_icon_png },
        { id: 7, tt: "Commercial", title: "Commercial Shifting", description: "End-to-end commercial shifting designed for factories, shops, and warehouses with heavy-duty transport.", Img: Commercial_icon_png },
        { id: 8, tt: "Luggage", title: "Luggage Transport", description: "Affordable and secure luggage transport with pickup, packaging, and on-time delivery options.", Img: Luggage_icon_png },
        { id: 9, tt: "Domestic", title: "Domestic Moving", description: "Full-service domestic relocation with packing, loading, transport, and unpacking support across India.", Img: Domestic_icon_png },
        { id: 10, tt: "International", title: "International Moving", description: "International moving with customs documentation, freight handling, and global door-to-door service.", Img: International_icon_png },
        { id: 11, tt: "Tempo", title: "Tempo for Shifting", description: "On-demand tempo services for short-distance or same-day local moves, perfect for quick shifting.", Img: Temp_icon_png },
        { id: 12, tt: "Warehouse", title: "Warehouse Services", description: "Safe and monitored warehouse services for short or long durations, with 24/7 security and organized storage.", Img: Warehouse_icon_png },
        { id: 13, tt: "Storage", title: "Storage Facility", description: "Flexible personal or business storage options with clean, secure units and easy access.", Img: Storage_icon_png },
        { id: 14, tt: "Cold", title: "Cold Storage", description: "Temperature-controlled storage for sensitive items like electronics, pharmaceuticals, and perishables.", Img: Cold_icon_png },
    ];
    return (
        <>

            <Helmet>

                <title>Gati packers and movers services| Gati Shifting packers</title>
                <meta name="description" content="Explore Gati Packers and Movers services including home shifting, office relocation, vehicle transport, and customized packing solutions across India. Get estimated charges for your move." />
                <meta name="keywords" content="Gati services, packers and movers charges, relocation services India, house shifting cost, office moving, vehicle transport" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content="Our Services | Gati Shifting Packers " />
                <meta property="og:description" content="Check estimated packing and moving charges in India. From 1 BHK to 4 BHK, office relocation, and vehicle shifting – Gati Shifting Packers provides reliable services nationwide." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://gatishiftingpackers.com" />
                <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services | Gati Shifting Packers " />
                <meta name="twitter:description" content="Reliable relocation services by Gati Shifting Packers . Get clear pricing for household, office, and vehicle shifting across India." />
                <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
            </Helmet>

            {/* <ServicesSection ></ServicesSection> */}

            <h1 className="main-heading">Our Key Services</h1>

            <section id="services-section">
                {services.map((element)=>(
                    <div className="card">
                        <img src={element.Img} />
                        <span>{element.title}</span>
                    </div>
                ))}
            </section>
            <div className="image-box">
                {imagesForC.map((data, index) => (
                    <div
                        key={index}
                        className={`image-item ${activeIndex === index ? "active" : ""}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <h2>{data.heading}</h2>
                        <p>{data.text}</p>
                        <img src={data.img} alt={`img-${index}`} />
                    </div>
                ))}
            </div>
            <section id="table-section-services">
                <h1>Estimated Charges of Packing and Moving Services in India</h1>
                <p>Gati Shifting Packers offers reliable packing and moving services across India. Our team ensures the safe handling and transportation of your belongings. Get a clear price estimate tailored to your needs.</p>
                <div className="container">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#2563eb' }}>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Shifting Type</b></TableCell>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Packing Material</b></TableCell>
                                    <TableCell align="center" sx={{ color: '#fff' }}><b>Moving Charges</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {servicesData.map((row) => (
                                    <TableRow>
                                        <TableCell align="center">{row.shiftingType}</TableCell>
                                        <TableCell align="center">{row.packingMaterial}</TableCell>
                                        <TableCell align="center">{row.movingCharges}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>


            </section>
            <ContactForm successCondition={successCondition}></ContactForm>
            <BrandList />
        </>
    )
}

export default Services;