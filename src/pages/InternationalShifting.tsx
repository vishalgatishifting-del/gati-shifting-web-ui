import InternationalBannerImg from "../assets/homePagePng/INTERNATIONAL.png"
import InternationalShiftingByShipImg from "../assets/homePagePng/international shifting by ship.png"
import InternationalShiftingByAir from "../assets/homePagePng/international shifting by air.png"
import InternationalCargoShipTruckImg from "../assets/homePagePng/international cargo ship truck.png"
import InternationalAirlineImg from "../assets/homePagePng/international airline.png"

import quotationPDF from "../assets/homePagePng/GATI SHIFTING PACKERS PVT LTD .pdf"
import "./InternationalShifting.scss"

const InternationalShifting = () => {
    return (
        <>
            <section id="banner-image">
                <img src={InternationalBannerImg} alt="International Banner Img" />
            </section>

            <div className="images-grid">
                <img src={InternationalCargoShipTruckImg} />
                <img src={InternationalAirlineImg} />
            </div>
            <section id="content">
                <div className="container">
                    <div className="box">
                        <div className="detail">
                            <h2>International Shifting by Ship</h2>
                            <p>International shifting by ship is a secure and cost-effective solution for relocating household goods, personal belongings, and vehicles to destinations worldwide. This method is ideal for large-volume relocations or when delivery timelines are flexible, making it the most economical option for overseas moves. The process starts with professional packing using durable, export-quality, and weather-resistant materials to protect your belongings during long sea transit. All items are carefully loaded into shipping containers, which are sealed and monitored throughout their ocean journey.</p>
                            <p><b>Gati Shifting Packers</b> specializes in international shifting by sea, offering complete end-to-end relocation services. Our solutions include expert packing, containerization, documentation support, customs clearance, and shipment coordination. Our experienced team handles complex international shipping regulations to ensure your goods comply with all import and export requirements, enabling a smooth and hassle-free relocation. We offer transparent pricing with flexible options such as full container load (FCL) and shared container load (LCL) to suit different budgets and shipment sizes.</p>
                            <p>Upon arrival at the destination port, our global network manages unloading, customs procedures, and final delivery to your home or office. Dedicated customer support is available at every stage—from initial planning to final delivery—ensuring a worry-free international move. With <b>Gati Shifting Packers</b>, your relocation by ship is handled with care, reliability, and attention to detail.</p>
                        </div>
                        <div className="img-bx">
                            <img src={InternationalShiftingByShipImg} />
                        </div>
                    </div>



                    <div className="box">
                        <div className="img-bx">
                            <img src={InternationalShiftingByAir} />
                        </div>
                        <div className="detail">
                            <h2>International Shifting by Air</h2>
                            <p>International shifting by air is the fastest and most efficient way to relocate household goods, personal items, and business shipments across the globe. This service is best suited for time-sensitive moves where speed and security are top priorities. <b>Gati Shifting Packers</b> offers reliable international air freight relocation services with expert handling, real-time tracking, and personalized customer support.</p>
                            <p>The process begins with professional packing using high-quality materials designed to protect valuables, electronics, documents, and fragile items during air transit. Our team manages the complete logistics process, including air freight booking, customs documentation, and coordination with international airline partners to ensure smooth clearance at airports and borders. Each shipment is tracked from pickup to final delivery, providing complete visibility and peace of mind.</p>
                            <p>We navigate complex international regulations to ensure full compliance with destination country requirements. Clients benefit from transparent pricing and flexible shipping options such as express, priority, or economy air freight, based on urgency and budget. Upon arrival, we coordinate unloading, customs clearance, and safe doorstep delivery.</p>
                            <p>With a strong focus on speed, security, and customer satisfaction, <b>Gati Shifting Packers</b> makes international shifting by air seamless and stress-free. Trust us to deliver your belongings safely and on time—wherever your journey takes you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="btn-bx">
                <a href={quotationPDF} target="_blank" >Get Quotation</a>
            </div> */}
        </>
    )
}

export default InternationalShifting;