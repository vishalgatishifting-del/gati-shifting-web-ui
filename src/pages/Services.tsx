import BrandList from "../components/BrandsList";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
import "./Services.scss";

import AV_icon_png from "../assets/servicesPageImg/ac.webp";
import House_icon_png from "../assets/servicesPageImg/household.webp";
import Bike_icon_png from "../assets/servicesPageImg/bike.webp";
import Car_icon_png from "../assets/servicesPageImg/car.webp";
import Pet_icon_png from "../assets/servicesPageImg/pets.webp";
import Office_icon_png from "../assets/servicesPageImg/office.webp";
import Commercial_icon_png from "../assets/servicesPageImg/commercial.webp";
import Luggage_icon_png from "../assets/servicesPageImg/luggage.webp";
import Domestic_icon_png from "../assets/servicesPageImg/domestic.webp";
import International_icon_png from "../assets/servicesPageImg/international.webp";
import Temp_icon_png from "../assets/servicesPageImg/tempo.webp";
import Warehouse_icon_png from "../assets/servicesPageImg/warehouse.webp";
import Storage_icon_png from "../assets/servicesPageImg/storage.webp";
import Cold_icon_png from "../assets/servicesPageImg/cold.webp";

interface Props {
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ServiceItem {
  id: number;
  title: string;
  img: string;
}

interface PricingRow {
  type: string;
  packing: string;
  moving: string;
  popular?: boolean;
}

const services: ServiceItem[] = [
  { id: 1,  title: "House Shifting",     img: House_icon_png },
  { id: 2,  title: "AC Shifting",        img: AV_icon_png },
  { id: 3,  title: "Bike Transport",     img: Bike_icon_png },
  { id: 4,  title: "Car Transport",      img: Car_icon_png },
  { id: 5,  title: "Pet Relocation",     img: Pet_icon_png },
  { id: 6,  title: "Office Shifting",    img: Office_icon_png },
  { id: 7,  title: "Commercial Shift",   img: Commercial_icon_png },
  { id: 8,  title: "Luggage Transport",  img: Luggage_icon_png },
  { id: 9,  title: "Domestic Moving",    img: Domestic_icon_png },
  { id: 10, title: "International Move", img: International_icon_png },
  { id: 11, title: "Tempo Shifting",     img: Temp_icon_png },
  { id: 12, title: "Warehouse",          img: Warehouse_icon_png },
  { id: 13, title: "Storage Facility",   img: Storage_icon_png },
  { id: 14, title: "Cold Storage",       img: Cold_icon_png },
];

const pricingData: PricingRow[] = [
  { type: "1 BHK Moving",   packing: "₹500 – 1,000",   moving: "₹2,500 – 3,000", popular: true },
  { type: "2 BHK Moving",   packing: "₹800 – 1,200",   moving: "₹3,000 – 3,500" },
  { type: "3/4 BHK Moving", packing: "₹1,200 – 1,500", moving: "₹3,500 – 3,800" },
  { type: "Few Items Only", packing: "₹600 – 1,000",   moving: "₹2,000 – 2,800" },
];

const Services = ({ successCondition }: Props) => {
  return (
    <>
      <Helmet>
        <title>Gati Packers and Movers Services | Gati Shifting Packers</title>
        <meta name="description" content="Explore Gati Packers and Movers services including home shifting, office relocation, vehicle transport, and customized packing solutions across India. Get estimated charges for your move." />
        <meta name="keywords" content="Gati services, packers and movers charges, relocation services India, house shifting cost, office moving, vehicle transport" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Services | Gati Shifting Packers" />
        <meta property="og:description" content="Check estimated packing and moving charges in India. From 1 BHK to 4 BHK, office relocation, and vehicle shifting – Gati Shifting Packers provides reliable services nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatishiftingpackers.com" />
        <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Gati Shifting Packers" />
        <meta name="twitter:description" content="Reliable relocation services by Gati Shifting Packers. Get clear pricing for household, office, and vehicle shifting across India." />
        
                <link rel="canonical" href="https://gatishiftingpackers.com/services" />
      </Helmet>

      <div className="services-page">

        {/* ── Services Grid ── */}
        {/* <p className="section-eyebrow">What we offer</p> */}
        <h1 className="section-title">Our Key Services</h1>
        <p className="section-sub">
          From local house shifts to international cargo — we handle every move
          with care, speed, and complete transparency.
        </p>

        <section id="services-section">
          {services.map((s) => (
            <div className="svc-card" key={s.id}>
              <div className="svc-icon">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <span className="svc-name">{s.title}</span>
            </div>
          ))}
        </section>

        {/* ── Pricing ── */}
        <section id="table-section-services">
          <div className="pricing-inner">
            <p className="section-eyebrow" style={{ textAlign: "left", margin: "0 0 6px" }}>
              Transparent pricing
            </p>
            <h2 className="section-title" style={{ textAlign: "left", fontSize: "22px", margin: 0 }}>
              Estimated Packing & Moving Charges
            </h2>
            <p className="section-sub" style={{ textAlign: "left", margin: "8px 0 0", maxWidth: "600px" }}>
              Gati Shifting Packers offers reliable packing and moving services across India.
              Final cost depends on distance, floor access, and any additional services required.
            </p>

            <div className="pricing-grid">
              {pricingData.map((row) => (
                <div className="price-card" key={row.type}>
                  <div className="shift-type">
                    {row.type}
                    {row.popular && <span className="badge">Popular</span>}
                  </div>
                  <div className="price-row">
                    <span className="label">Packing material</span>
                    <span className="value">{row.packing}</span>
                  </div>
                  <div className="price-row">
                    <span className="label">Moving charges</span>
                    <span className="value">{row.moving}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm successCondition={successCondition} />
        <BrandList />
      </div>
    </>
  );
};

export default Services;