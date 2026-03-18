import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import chargesImg from "../assets/CityPages/packers-movers-charges.webp"
import "./CityPage.scss"
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";

interface MetaDataProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogDescription?: string;
  twitterDescription?: string;
}

interface Service {
  title: string;
  desc: string;
  link?: string;
  linkText?: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface NearbyCity {
  link?: string;
  linkText?: string;
  text?: string;
}

interface PageDataProps {
  mainHeading?: string;
  paragraph?: string[] | string;
  servicesHeading?: string;
  services?: Service[];

  whyChooseHeading?: string;
  whyChoose?: string[];

  processHeading?: string;
  process?: string[];

  nearbyCitiesHeading?: string;
  nearbyCitiesParagraph?: string;
  nearbyCities?: NearbyCity[];

  faqHeading?: string;
  faqs?: FAQ[];
}

interface PageProps {
  city: string;
  img?: string;
  metaData?: MetaDataProps;
  offer?: string;
  pageData?: PageDataProps;
  address?: string;
}

const CityPage: React.FC<PageProps> = ({
  city,
  img,
  metaData,
  offer,
  address,
  pageData
}) => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>{metaData?.title}</title>

        <meta name="description" content={metaData?.description} />
        <meta name="keywords" content={metaData?.keywords} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaData?.title} />
        <meta property="og:description" content={metaData?.ogDescription} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaData?.title} />
        <meta name="twitter:description" content={metaData?.twitterDescription} />

        <link
          rel="canonical"
          href={`https://gatishiftingpackers.com/packers-and-movers-in-${city}`}
        />
      </Helmet>



      {(city != "Agra" && city != "Ankleshwar" && city != "Bhiwandi" && city != "Calicut" && city != "Cuttack" && city != "Ahmedabad" && city != "Amrawati" && city != "Imphal" && city != "Bhadrak" && city != "Bargarh" && city != "Jeypore" && city != "Kendrapara" && city != "Rayagada" && city != "Whitefield" && city != "Electronic City" && city != "Koramangala" && city != "Indiranagar" && city != "Marathahalli" && city != "Yelahanka" && city != "Jayanagar" && city != "Rajajinagar" && city != "HSR Layout" && city != "BTM Layout" && city != "Solapur" && city != "Sangli" && city != "Jalgaon" && city != "Akola" && city != "Latur" && city != "gandhidham" && city != "guwahati" && city != "hyderabad" && city != "jamshedpur" && city != "kolhapur" && city != "lucknow" && city != "Bhopal" && city != "Chandigarh" && city != "Dehradun" && city != "Gandhidham" && city != "Guwahati" && city != "Hyderabad" && city != "Jamshedpur" && city != "Kolhapur" && city != "Lucknow" && city != "Ahmedabad" && city != "Aurangabad" && city != "Bhopal" && city != "Chandigarh" && city != "Dehradun" && city != "Ghaziabad" && city != "Gwalior" && city != "Indore" && city != "Jamnagar" && city != "Ludhiana" && city != "Kolkata" && city != "Allahabad" && city != "Alwar" && city != "Ambala" && city != "Vadodara" && city != "Dhule" && city != "Chandrapur" && city != "Parbhani" && city != "Nanded" && city != "Wardha" && city != "Satara" && city != "Ratnagiri" && city != "Palghar" && city != "Basavanagudi" && city != "Mysuru" && city != "Dharwad" && city != "Belagavi" && city != "Bellary" && city != "Kalaburagi" && city != "Gulbarga" && city != "Davanagere" && city != "Tumakuru" && city != "Shivamogga" && city != "Raichur") ? (

        <section id="city-page-sec">
          <div className="offer-headling"></div>

          <div className="container">
            <div className="content">
              <div className="box">
                <div className="text-area">

                  <h1>Gati Shifting Packers – Best Packers and Movers in</h1>

                  <div className="city-name">{city}</div>

                  <span className="address">
                     <LocationOnIcon />
                    {address}
                  </span>

                  <h3>🎉 Get 10% OFF on Your Next Move 🎉</h3>

                  <a className="redirect-link" href="/contact-us">
                    Get My Free Quote
                  </a>

                </div>

                <img src={img} alt={city} />
              </div>

              <p>
                Welcome to Gati Shifting Packers {city}! If you are planning to move your
                home, office, or vehicle within or outside {city}, we are here to make
                your relocation simple, safe, and affordable. As one of the most trusted
                packers and movers in {city}, Gati Shifting Packers offers complete
                packing, loading, transportation, and unpacking solutions under one
                roof. Our experienced and professional team ensures your goods are
                packed with care, transported securely, and delivered on time.
              </p>

              <h2>🌍 International Packers and Movers in {city}</h2>

              <p>
                We, at Gati Shifting Packers – International Packers and Movers in
                {city}, provide seamless international relocation services for
                individuals, families, and businesses. Whether you’re moving to a new
                country for work or returning to India, we manage everything from
                packing to customs clearance.
              </p>

              <h2>Our Packers and Movers Services in {city}</h2>

              <p>
                We offer a complete range of relocation services in {city}, designed to
                meet every need and budget:
              </p>

              <h3>Home Shifting Services in {city}</h3>
              <p>
                Our trained team provides safe and hassle-free home relocation services.
                We handle everything — packing, loading, transportation, and unpacking —
                using quality packing materials.
              </p>

              <h3>Office Shifting Services in {city}</h3>
              <p>
                We provide efficient office relocation services to ensure a smooth
                transition with minimal downtime.
              </p>

              <h3>Domestic Relocation Services</h3>
              <p>
                Moving to another city? Our domestic packers and movers in {city} offer
                door-to-door relocation anywhere in India with real-time tracking.
              </p>

              <h3>International Relocation Services</h3>
              <p>
                We take care of international packing, shipping, and customs
                documentation, ensuring a stress-free global moving experience.
              </p>

              <h3>Vehicle Transport in {city}</h3>
              <p>
                We provide safe and reliable car and bike transport services using
                covered carriers and protective packaging.
              </p>

              <h3>Warehouse and Storage Services</h3>
              <p>
                Need a safe place to store your belongings? Our secure and insured
                warehouses in {city} offer short-term and long-term storage with 24×7
                CCTV monitoring.
              </p>

              <h3>Packing and Unpacking Services</h3>
              <p>
                Our team uses premium-quality materials such as foam sheets, bubble
                wrap, and strong boxes to pack and unpack your goods safely.
              </p>

              <h3>Corporate Relocation Services</h3>
              <p>
                We manage large-scale corporate moves including factories, showrooms,
                and office setups with detailed planning and execution.
              </p>

              <h2>Why Choose Gati Shifting Packers {city}?</h2>

              <ul>
                <li>✅ Experienced & Verified Movers</li>
                <li>📦 High-Quality Packing Material</li>
                <li>🚛 GPS-Enabled Vehicles for Tracking</li>
                <li>💰 Affordable & Transparent Pricing</li>
                <li>🧰 Trained & Professional Staff</li>
                <li>🔒 Transit Insurance for Safety</li>
                <li>☎️ 24×7 Customer Support</li>
              </ul>

              <h2>How Gati Shifting Packers {city} Work</h2>

              <ol>
                <li>Share Your Requirement – Tell us where and when you need to move.</li>
                <li>Get an Instant Quote – We’ll provide a clear price estimate.</li>
                <li>Plan & Confirm Your Move – Choose your date and pay a token.</li>
                <li>Sit Back & Relax – Our expert team takes care of everything.</li>
              </ol>

              <h2>Packers and Movers Charges in {city}</h2>

              <div className="img-bx">
                <img
                  className="chargesImg"
                  src={chargesImg}
                  alt="Packers and movers charges"
                />
              </div>

              <h2>Factors Affecting Packers and Movers Cost in {city}</h2>

              <ol>
                <li>Distance – Longer distances increase transport cost.</li>
                <li>Number of Goods – More items require more labor and truck size.</li>
                <li>Floor & Lift Access – Upper floors without lift increase charges.</li>
                <li>Time & Season – Weekends and month-end are expensive.</li>
                <li>Type of Service – Full-service moves cost more.</li>
                <li>Packing Material – Fragile items need extra packaging.</li>
                <li>Vehicle Type – Bigger carriers cost more.</li>
                <li>Mode of Transport – Road is cheaper than air cargo.</li>
                <li>Labor Requirement – More manpower adds cost.</li>
                <li>Accessibility – Narrow streets or difficult entry affect cost.</li>
              </ol>

              <p>
                Note: Prices mentioned above are approximate and may vary based on
                distance, items, and additional services.
              </p>

            </div>
          </div>
        </section>

      ) : (

        <section id="city-page-sec">
          <div className="container">

            {/* HERO SECTION */}

            <div className="content">
              <div className="box">

                <div className="text-area">
  
                  <h1>{pageData?.mainHeading}</h1>

                  <div className="city-name">{city}</div>

                  <span className="address">
                    <LocationOnIcon />
                    {address}
                  </span>

                  <h3>🎉 Get {offer} OFF on Your Next Move 🎉</h3>

                  <Link className="redirect-link" to="/contact-us">
                    Get My Free Quote
                  </Link>

                </div>

                <img src={img} alt={city} />

              </div>


              {/* PARAGRAPHS */}

              {Array.isArray(pageData?.paragraph) &&
                pageData.paragraph.map((p, i) => (
                  <p key={i}>{p}</p>
                ))
              }


              {/* SERVICES */}

              <h2>{pageData?.servicesHeading}</h2>

              {pageData?.services?.map((service, i) => (
                <div key={i}>
                  <h3>{service.title}</h3>
                  <p style={{ whiteSpace: "pre-line" }}>{service.desc}</p>
                  <a href={service.link}>{service.linkText}</a>
                </div>
              ))}


              {/* WHY CHOOSE */}

              <h2>{pageData?.whyChooseHeading}</h2>

              <ul>
                {pageData?.whyChoose?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>


              {/* PROCESS */}

              <h2>{pageData?.processHeading || ""}</h2>

              <ol>
                {pageData?.process?.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>


              {/* NEARBY CITIES */}

              <h2>{pageData?.nearbyCitiesHeading}</h2>
              <p>{pageData?.nearbyCitiesParagraph}</p>
              <ul>
                {pageData?.nearbyCities?.map((item, i) => (
                  <li key={i}>
                    <a href={item.link} target="_blank">
                    {item.linkText}
                    </a> 
                    {item.text}</li>
                ))}
              </ul>

              {/* CHARGES IMAGE */}

              <h2>Packers and Movers Charges in {city}</h2>

              <div className="img-bx">
                <img className="chargesImg" src={chargesImg} alt="charges" />
              </div>


              {/* FAQ */}

              <section id="faq-section" style={{ background: "transparent" }}>
                <div className="faq-container">

                  <h2>{pageData?.faqHeading}</h2>

                  {pageData?.faqs?.map((item, index) => (
                    <div
                      key={index}
                      className={`faq-item ${openIndex === index ? "active" : ""}`}
                    >
                      <button
                        className="faq-question"
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                      >
                        {item.q}
                        <span className="icon">{openIndex === index ? "−" : "+"}</span>
                      </button>

                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* {pageData?.faqs?.map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))} */}

            </div>
          </div>
        </section>
      )}


      {/* EXTRA SECTIONS */}

      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />

      {/* OPTIONAL FAQ COMPONENT */}

      {/* <FAQList faqs={pageData?.faqs}/> */}

    </>
  )
}

export default CityPage;