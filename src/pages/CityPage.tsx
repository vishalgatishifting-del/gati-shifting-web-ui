import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import chargesImg from "../assets/packers-movers-charges.webp";
import "./CityPage.scss";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { memo } from "react";
import CitySchema from "../components/schema/CitySchema";
import FAQList from "../components/FAQList";
import WhatWeCaterTo from "../components/WhatWeCare";

// ── Types ──

interface MetaDataProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogDescription?: string;
  twitterDescription?: string;
  canonical?: string;
}

interface Service {
  title?: string;
  desc?: string;
  link?: string;
  linkText?: string;
}

interface FAQ {
  q?: string;
  a?: string;
}

interface NearbyCity {
  link?: string;
  linkText?: string;
  text?: string;
}

interface FactorItem {
  heading?: string;
  paragraph?: string;
}

interface AreaItem {
  title?: string;
  paragraph?: string[];
}

interface PageDataProps {
  mainHeading?: string;

  serviceSecondHeading?: string;

  paragraph?: string[] | string;

  internationalHeading?: string;
  internationalParagraph?: string[];

  servicesHeading?: string;
  services?: Service[];

  whyChooseHeading?: string;
  whyChooseParagraph?: string;
  whyChooseNote?: string;

  areasHeading?: string;
  areas?: AreaItem[];

  processHeading?: string;
  processParagraph?: string;

  costHeading?: string;

  factorsHeading?: string;
  factors?: FactorItem[];

  nearbyCitiesHeading?: string;
  nearbyCitiesParagraph?: string;
  nearbyCities?: NearbyCity[];

  faqHeading?: string;
  faqs?: FAQ[];
}

interface PageProps {
  slug: string;
  city: string;
  img?: string;
  metaData?: MetaDataProps;
  offer?: string;
  pageData?: PageDataProps;
  address?: string;
  allData?: any;
}

// ── Cities with custom pageData ──

const CUSTOM_CITIES = new Set([
  "Agra",
  "Ankleshwar",
  "Bhiwandi",
  "Calicut",
  "Cuttack",
  "Ahmedabad",
  "Amrawati",
  "Imphal",
  "Bhadrak",
  "Bargarh",
  "Jeypore",
  "Kendrapara",
  "Rayagada",
  "Whitefield",
  "Electronic City",
  "Koramangala",
  "Indiranagar",
  "Marathahalli",
  "Yelahanka",
  "Jayanagar",
  "Rajajinagar",
  "HSR Layout",
  "BTM Layout",
  "Solapur",
  "Sangli",
  "Jalgaon",
  "Akola",
  "Latur",
  "gandhidham",
  "guwahati",
  "hyderabad",
  "jamshedpur",
  "kolhapur",
  "lucknow",
  "Bhopal",
  "Chandigarh",
  "Dehradun",
  "Gandhidham",
  "Guwahati",
  "Hyderabad",
  "Jamshedpur",
  "Kolhapur",
  "Lucknow",
  "Aurangabad",
  "Ghaziabad",
  "Gwalior",
  "Indore",
  "Jamnagar",
  "Ludhiana",
  "Kolkata",
  "Allahabad",
  "Alwar",
  "Ambala",
  "Vadodara",
  "Dhule",
  "Chandrapur",
  "Parbhani",
  "Nanded",
  "Wardha",
  "Satara",
  "Ratnagiri",
  "Palghar",
  "Basavanagudi",
  "Mysuru",
  "Dharwad",
  "Belagavi",
  "Bellary",
  "Kalaburagi",
  "Gulbarga",
  "Davanagere",
  "Tumakuru",
  "Shivamogga",
  "Raichur",
  "Kochi (Cochin)",
  "Delhi",
  "Dwarka",
  "Faridabad",
  "Goa",
  "Greater Noida",
  "Gurgaon",
  "Hubli",
  "Jammu",
  "Kanpur",
  "Vijayapura",
  "Bidar",
  "Hassan",
  "Chitradurga",
  "Kolar",
  "Udupi",
  "Karwar",
  "Bagalkot",
  "Varanasi",
  "Thoubal",
  "Churachandpur",
  "Bishnupur",
  "Ukhrul",
  "Senapati",
  "Kakching",
  "Tamenglong",
  "Jiribam",
  "Moreh",
  "Shimla",
  "Manali",
  "Kullu",
  "Mandi",
  "Solan",
  "Dharamshala",
  "Kangra",
  "Hamirpur",
  "Chamba",
  "Kinnaur",
  "Keylong",
  "Srinagar",
  "Anantnag",
  "Baramulla",
  "Udhampur",
  "Kathua",
  "Sopore",
  "Kupwara",
  "Pulwama",
  "Rajouri",
  "Poonch",
  "Bandipora",
  "Ganderbal",
  "Kulgam",
  "Doda",
  "Kishtwar",
  "Samba",
  "Shopian",
  "Champhai",
  "Serchhip",
  "Kolasib",
  "Mamit",
  "Lawngtlai",
  "Saiha",
  "Khawzawl",
  "Saitual",
  "Hnahthial",
  "Gangtok",
  "Namchi",
  "Gyalshing",
  "Mangan",
  "Singtam",
  "Rangpo",
  "Jorethang",
  "Soreng",
  "Chungthang",
  "Pakyong",
  "Ravangla",
  "Lakhisarai",
  "Buxar",
  "Vijayawada",
  "Guntur",
  "Nellore",
  "Tirupati",
  "Kurnool",
  "Kadapa",
  "Rajahmundry",
  "Jaisalmer",
  "Eluru",
  "Ongole",
  "Srikakulam",
  "Vizianagaram",
  "Chittoor",
  "Proddatur",
  "Hindupur",
  "Tenali",
  "Nandyal",
  "Adoni",
  "Vasco da Gama",
  "Tiruchirappalli (Trichy)",
  "Madurai",
  "Salem",
  "Tirunelveli",
  "Erode",
  "Vellore",
  "Thanjavur",
  "Thoothukudi (Tuticorin)",
  "Dindigul",
  "Nepal",
  "Kollam",
  "Alappuzha",
  "Idukki",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
  "Pathanamthitta",
  "Warangal",
  "Nizamabad",
  "Khammam",
  "Karimnagar",
  "Mahbubnagar",
  "Adilabad",
  "Nagarkurnool",
  "Medak",
  "Vikarabad",
  "Suryapet",
  "Wanaparthy",
  "Howrah",
  "Nainital",
  "Almora",
  "Mussoorie",
  "Bareilly",
  "Aligarh",
  "Moradabad",
  "Saharanpur",
  "Jhansi",
  "Mathura",
  "Firozabad",
  "Mysore",
  "Bangalore",
  "Jabalpur",
  "Ujjain",
  "Sagar",
  "Satna",
  "Kohima",
  "Amritsar",
  "Jalandhar",
  "Patiala",
  "Bathinda",
  "Bokaro Steel City",
  "Hazaribagh",
  "Dhanbad",
  "Karnal",
  "Yamunanagar",
  "Rohtak",
  "Panipat",
  "Hisar",
  "Nadiad",
  "Bhavnagar",
  "Jodhpur",
  "Kota",
  "Ajmer",
  "Udaipur",
  "Agartala",
  "Port Blair",
  "Katni",
  "Rewa",
  "Korba",
  "Raigarh",
  "Chhattisgarh",
  "Manipal",
  "Ranchi",
  "Ayodhya",
  "Muzaffarnagar",
  "Rajasthan",
  "Kakinada",
  "Dibrugarh",
  "Silchar",
  "Bhilai",
  "Durg",
  "Bilaspur",
  "Junagadh"
]);

// ── STATIC WHY CHOOSE DATA ──

const WHY_CHOOSE_ITEMS = [
  " Experienced & Verified Movers",
  "📦 High-Quality Packing Material",
  "🚛 GPS-Enabled Vehicles for Tracking",
  "💰 Affordable & Transparent Pricing",
  "🧰 Trained & Professional Staff",
  "🔒 Transit Insurance for Safety",
  "☎️ 24×7 Customer Support",
];

// ── STATIC PROCESS DATA ──

const PROCESS_STEPS = [
  "Share Your Requirement – Tell us where and when you need to move.",
  "Get an Instant Quote – We’ll provide a clear price estimate.",
  "Plan & Confirm Your Move – Choose your date and pay a token.",
  "Sit Back & Relax – Our expert team takes care of everything.",
];

// ── Icon SVGs ──

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ── FAQ Item ──

const FaqItem = memo(
  ({
    item,
    index,
    openIndex,
    onToggle,
  }: {
    item: FAQ;
    index: number;
    openIndex: number | null;
    onToggle: (i: number) => void;
  }) => {
    const isOpen = openIndex === index;

    return (
      <div className={`cp-faq__item ${isOpen ? "cp-faq__item--open" : ""}`}>
        <button
          className="cp-faq__question"
          onClick={() => onToggle(index)}
          aria-expanded={isOpen}
        >
          <span>{item.q}</span>
          <span className="cp-faq__icon">{isOpen ? "−" : "+"}</span>
        </button>

        <div className="cp-faq__answer">
          <p>{item.a}</p>
        </div>
      </div>
    );
  }
);

FaqItem.displayName = "FaqItem";

// ── Default Content ──

const DefaultContent = memo(({ city }: { city: string }) => {
  const defaultFaqData = [
    {
      q: `What are the charges of packers and movers in ${city}?`,
      a: `Packers and movers charges in ${city} depend on the distance, volume of goods, packing requirements, and type of relocation. Contact us for a free quotation based on your moving needs.`,
    },
    {
      q: `Do you provide household shifting services in ${city}?`,
      a: `Yes, we provide complete household shifting services in ${city}, including packing, loading, transportation, unloading, and unpacking.`,
    },
    {
      q: `Can you transport my car or bike from ${city}?`,
      a: `Yes, we offer safe and reliable car and bike transportation services from ${city} to major cities across India using specialized carriers.`,
    },
    {
      q: `Do you provide packing materials for relocation?`,
      a: `Yes, our team uses high-quality packing materials such as bubble wrap, cartons, stretch film, and protective covers to ensure the safety of your belongings.`,
    },
    {
      q: `How early should I book packers and movers in ${city}?`,
      a: `We recommend booking your relocation service at least 3–7 days in advance to ensure vehicle availability and smooth move planning.`,
    },
    {
      q: `Do you offer office relocation services in ${city}?`,
      a: `Yes, we provide professional office and commercial relocation services in ${city} with minimal disruption to business operations.`,
    },
    {
      q: `Are my goods insured during transportation?`,
      a: `We can assist with transit insurance options to provide additional protection for valuable and fragile items during transportation.`,
    },
    {
      q: `Why choose Gati Shifting Packers in ${city}?`,
      a: `We are trusted for our experienced staff, affordable pricing, professional packing methods, timely delivery, and dedicated customer support throughout the relocation process.`,
    },
  ];
  return (
    <>
      <p>
        Welcome to <strong>Gati Shifting Packers {city}</strong>! If you are
        planning to move your home, office, or vehicle within or outside {city},
        we are here to make your relocation simple, safe, and affordable.
      </p>

      <p>
        Our experienced team offers professional packing, loading, unloading,
        transportation, and unpacking services. Whether you are moving locally
        within {city} or relocating to another city, we ensure a hassle-free
        shifting experience.
      </p>

      <h2>International Packers and Movers in {city}</h2>

      <p>
        We provide seamless international relocation services for individuals,
        families, and businesses. Our experts handle customs documentation,
        overseas packing standards, and secure shipping solutions.
      </p>

      <div className="cp-services-grid">
        <div className="cp-service-block">
          <h3>Household Shifting Services in {city}</h3>
          <p>
            Safe and secure home relocation with premium packing materials and
            trained professionals.
          </p>
          <a href="https://gatishiftingpackers.com/home-shifting" className="cp-inline-link">Home Shifting Services</a>
        </div>

        <div className="cp-service-block">
          <h3>Office Relocation in {city}</h3>
          <p>
            Fast and organized office shifting services with minimum business
            interruption.
          </p>

          <a href="https://gatishiftingpackers.com/office-relocation" className="cp-inline-link">Office Relocation Services</a>
        </div>

        <div className="cp-service-block">
          <h3>Car Transportation Services</h3>
          <p>
            Reliable car transportation services across India with proper safety
            measures and timely delivery.
          </p>

          <a href="https://gatishiftingpackers.com/car-bike-transport" className="cp-inline-link">Car & Bike Transport Services</a>
        </div>



        <div className="cp-service-block">
          <h3>Storage and Warehouse Services</h3>
          <p>
            Secure warehouse and home storage solutions for temporary and long-term storage of household and industrial goods.
          </p>

          <a href="https://gatishiftingpackers.com/warehouse" className="cp-inline-link">Warehouse Services</a>
        </div>


        <div className="cp-service-block">
          <h3>Industrial and Commercial Shifting</h3>
          <p>
            Professional industrial and commercial relocation services for factories, warehouses, and heavy equipment.
          </p>

          <a href="https://gatishiftingpackers.com/commercial-shifting" className="cp-inline-link">Commercial Shifting Services</a>
        </div>


        <div className="cp-service-block">
          <h3>Packing and Unpacking Services</h3>
          <p>
            Professional packing and unpacking solutions using high-quality
            packing materials.
          </p>
        </div>
      </div>

      <h2>Why Choose Gati Shifting Packers {city}?</h2>

      <p>
        We are known for our transparent pricing, experienced staff, safe
        transportation, and customer-focused relocation services.
      </p>

      <ul className="cp-why-list">
        {WHY_CHOOSE_ITEMS.map((item, i) => (
          <li key={i}>
            <span className="cp-why-list__icon">
              <IconCheck />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <h2>How Gati Shifting Packers {city} Work</h2>

      <p>
        Our relocation process is simple and transparent from booking to final
        delivery.
      </p>

      <ol className="cp-steps-list">
        {PROCESS_STEPS.map((step, i) => (
          <li key={i}>
            <span className="cp-steps-list__num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <h2>Packers and Movers Charges in {city}</h2>

      <div className="cp-charges">
        <img
          src={chargesImg}
          alt={`Packers and movers charges ${city}`}
          loading="lazy"
        />
      </div>

      <h2>Factors Affecting Packers and Movers Charges in {city}</h2>

      <div className="cp-process-grid">
        <div className="cp-service-block">
          <h3>Distance</h3>
          <p>
            Longer distances generally increase transportation and fuel costs.
          </p>
        </div>

        <div className="cp-service-block">
          <h3>Volume of Goods</h3>
          <p>
            The number of items being shifted affects manpower and vehicle
            requirements.
          </p>
        </div>

        <div className="cp-service-block">
          <h3>Packing Requirements</h3>
          <p>
            Fragile and premium items may require additional packing materials.
          </p>
        </div>
      </div>
      <h2>Cities We Also Serve</h2>
      <ul className="cp-nearby-list">
        <li key="">
          <a href="https://gatishiftingpackers.com/packers-and-movers-in-surat" className="cp-nearby-list__chip">
            <span className="cp-nearby-list__pin">
              <IconPin />
            </span>
            <span>
              <div className="cp-nearby-list__label">Packers and Movers in Surat</div>
            </span>
          </a>
        </li>


        <li key="">
          <a href="https://gatishiftingpackers.com/packers-and-movers-in-vadodara" className="cp-nearby-list__chip">
            <span className="cp-nearby-list__pin">
              <IconPin />
            </span>
            <span>
              <div className="cp-nearby-list__label">Packers and Movers in Vadodara</div>
            </span>
          </a>
        </li>


        <li key="">
          <a href="https://gatishiftingpackers.com/packers-and-movers-in-ahmedabad" className="cp-nearby-list__chip">
            <span className="cp-nearby-list__pin">
              <IconPin />
            </span>
            <span>
              <div className="cp-nearby-list__label">Packers and Movers in Ahmedabad</div>
            </span>
          </a>
        </li>

        <li key="">
          <a href="https://gatishiftingpackers.com/packers-and-movers-in-mumbai" className="cp-nearby-list__chip">
            <span className="cp-nearby-list__pin">
              <IconPin />
            </span>
            <span>
              <div className="cp-nearby-list__label">Packers and Movers in Mumbai</div>
            </span>
          </a>
        </li>


        <li key="">
          <a href="https://gatishiftingpackers.com/packers-and-movers-in-pune" className="cp-nearby-list__chip">
            <span className="cp-nearby-list__pin">
              <IconPin />
            </span>
            <span>
              <div className="cp-nearby-list__label">Packers and Movers in Pune</div>
            </span>
          </a>
        </li>
      </ul>

      <WhatWeCaterTo />
      <FAQList
        faqData={defaultFaqData}
      />
    </>
  )
});

DefaultContent.displayName = "DefaultContent";

DefaultContent.displayName = "DefaultContent";

// ── Main Component ──

const CityPage: React.FC<PageProps> = ({
  slug,
  city,
  img,
  metaData,
  offer,
  address,
  pageData,
  allData,
}) => {

  const isCustom = CUSTOM_CITIES.has(city);


  return (
    <>
      <Helmet>
        <title>{metaData?.title}</title>

        <meta name="description" content={metaData?.description} />

        <meta name="keywords" content={metaData?.keywords} />

        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content={metaData?.title} />

        <meta
          property="og:description"
          content={metaData?.ogDescription}
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={metaData?.title} />

        <meta
          name="twitter:description"
          content={metaData?.twitterDescription}
        />

        <link
          rel="canonical"
          href={`https://gatishiftingpackers.com/${slug}`}
        />
      </Helmet>

      <CitySchema cityMeta={allData} />


      <main className="cp-root">

        {/* HERO */}

        <section className="cp-hero">
          <div className="cp-hero__bg" aria-hidden />

          <div className="cp-hero__inner">

            <div className="cp-hero__text">

              <p className="cp-hero__eyebrow">
                Trusted Relocation Partner
              </p>

              <h1 className="cp-hero__title">
                {isCustom
                  ? pageData?.mainHeading
                  : "Gati Shifting Packers – Best Packers and Movers in"}
              </h1>

              <div className="cp-hero__city">{city}</div>

              {address && (
                <span className="cp-hero__address">
                  <IconPin />
                  {address}
                </span>
              )}

              <div className="cp-hero__offer">
                🎉 Get <strong>{offer || "10%"}</strong> OFF on Your Next Move
              </div>

              {isCustom ? (
                <Link className="cp-hero__cta" to="/contact-us">
                  Get My Free Quote →
                </Link>
              ) : (
                <a className="cp-hero__cta" href="/contact-us">
                  Get My Free Quote →
                </a>
              )}
            </div>

            {img && (
              <div className="cp-hero__img-wrap">
                <img
                  src={img}
                  alt={`Packers and Movers in ${city}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </div>
        </section>

        {/* BODY */}

        <div className="cp-body">
          <div className="cp-body__inner">

            {isCustom ? (
              <>

                {/* Paragraph */}

                {Array.isArray(pageData?.paragraph) &&
                  pageData.paragraph.length > 0 &&
                  pageData?.paragraph?.map((p, i) =>
                    p?.trim() ? <p key={i}>{p}</p> : null
                  )}

                {/* Service Second Heading */}

                {/* {pageData?.serviceSecondHeading && (
                  <h2>{pageData.serviceSecondHeading}</h2>
                )} */}

                {/* International */}

                {pageData?.internationalHeading &&
                  pageData?.internationalParagraph?.length ? (
                  <>
                    <h2>{pageData.internationalHeading}</h2>

                    {pageData?.internationalParagraph?.map((p, i) =>
                      p?.trim() ? <p key={i}>{p}</p> : null
                    )}
                  </>
                ) : null}

                {/* Services */}

                {pageData?.servicesHeading &&
                  pageData?.services?.length ? (
                  <>
                    {/* <h2>{pageData.servicesHeading}</h2> */}

                    <div className="cp-services-grid">
                      {pageData?.services?.map((s, i) => (
                        <div key={i} className="cp-service-block">
                          {s?.title && <h3>{s.title}</h3>}
                          {s?.desc && <p style={{ whiteSpace: "pre-line" }}>{s.desc}</p>}
                          {s?.link && s?.linkText && s.title != "Packing and Unpacking Services" && s.title != `Intercity Packers and Movers from ${city
                            .replace(/\s*\(.*?\)/g, "") 
                            .replace(/-/g, " ")         
                            .trim()}` 
                            && s.title != `Packing and Unpacking Services ${city
                            .replace(/\s*\(.*?\)/g, "") 
                            .replace(/-/g, " ")        
                            .trim()}` && 
                            s.title != `Local Movers ${city
                            .replace(/\s*\(.*?\)/g, "") // (Cochin) hata dega
                            .replace(/-/g, " ")         
                            .trim()}`
                             && (
                              <a href={s.link} className="cp-inline-link">{s.linkText}</a>
                            )}
                        </div>
                      ))}
                    </div>
                    {/* {pageData?.services?.map((s, i) =>
                      s?.title || s?.desc ? (
                        <div key={i} className="cp-service-block">

                          {s?.title && <h3>{s.title}</h3>}

                          {s?.desc && (
                            <p style={{ whiteSpace: "pre-line" }}>
                              {s.desc}
                            </p>
                          )}

                          {s?.link && s?.linkText && (
                            <a
                              href={s.link}
                              className="cp-inline-link"
                            >
                              {s.linkText}
                            </a>
                          )}

                        </div>
                      ) : null
                    )} */}
                  </>
                ) : null}

                {/* WHY CHOOSE */}

                <h2>
                  {pageData?.whyChooseHeading ||
                    `Why Choose Gati Shifting Packers ${city}?`}
                </h2>

                {pageData?.whyChooseParagraph && (
                  <p>{pageData.whyChooseParagraph}</p>
                )}

                <ul className="cp-why-list">
                  {WHY_CHOOSE_ITEMS.map((item, i) => (
                    <li key={i}>
                      <span className="cp-why-list__icon">
                        <IconCheck />
                      </span>

                      {item}
                    </li>
                  ))}
                </ul>

                {pageData?.whyChooseNote && (
                  <p className="cp-note">
                    {pageData.whyChooseNote}
                  </p>
                )}

                {/* Areas */}

                {pageData?.areasHeading &&
                  pageData?.areas?.length ? (
                  <>
                    <h2>{pageData.areasHeading}</h2>

                    {pageData?.areas?.map((area, i) =>
                      area?.title ||
                        area?.paragraph?.length ? (
                        <div
                          key={i}
                          className="cp-service-block"
                        >

                          {area?.title && (
                            <h3>{area.title}</h3>
                          )}

                          {Array.isArray(area?.paragraph) &&
                            area?.paragraph?.map((p, idx) =>
                              p?.trim() ? (
                                <p key={idx}>{p}</p>
                              ) : null
                            )}

                        </div>
                      ) : null
                    )}
                  </>
                ) : null}

                {/* PROCESS */}

                <h2>
                  {pageData?.processHeading ||
                    `How Gati Shifting Packers ${city} Work`}
                </h2>

                {pageData?.processParagraph && (
                  <p>{pageData.processParagraph}</p>
                )}

                <ol className="cp-steps-list">
                  {PROCESS_STEPS.map((step, i) => (
                    <li key={i}>
                      <span className="cp-steps-list__num">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span>{step}</span>
                    </li>
                  ))}
                </ol>


                <h2>Packers and Movers Charges in {city}</h2>
                <div className="cp-charges">
                  <img
                    src={chargesImg}
                    alt={`Packers and movers charges ${city}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Factors */}

                {pageData?.factorsHeading &&
                  pageData?.factors?.length ? (
                  <>
                    <h2>{pageData.factorsHeading}</h2>

                    <div className="cp-process-grid">

                      {pageData?.factors?.map((factor, i) =>
                        factor?.heading ||
                          factor?.paragraph ? (
                          <div
                            key={i}
                            className="cp-service-block"
                          >

                            {factor?.heading && (
                              <h3>{factor.heading}</h3>
                            )}

                            {factor?.paragraph && (
                              <p>{factor.paragraph}</p>
                            )}

                          </div>
                        ) : null
                      )}

                    </div>
                  </>
                ) : null}

                {/* Nearby Cities */}

                {pageData?.nearbyCitiesHeading &&
                  pageData?.nearbyCities?.length ? (
                  <>
                    <h2>{pageData.nearbyCitiesHeading}</h2>

                    {pageData?.nearbyCitiesParagraph && (
                      <p>{pageData.nearbyCitiesParagraph}</p>
                    )}

                    <ul className="cp-nearby-list">
                      {pageData?.nearbyCities?.map((item, i) => (
                        <li key={i}>
                          <a href={item.link || '#'} className="cp-nearby-list__chip">
                            <span className="cp-nearby-list__pin">
                              <IconPin />
                            </span>
                            <span>
                              <div className="cp-nearby-list__label">{item.linkText || item.text}</div>
                              {item.linkText && item.text && (
                                <div className="cp-nearby-list__sub">{item.text}</div>
                              )}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <WhatWeCaterTo />
                {/* FAQ */}
                {pageData?.faqHeading &&
                  pageData?.faqs?.length ? (

                  <FAQList
                    faqData={pageData?.faqs}
                  />
                ) : null}

              </>
            ) : (
              <DefaultContent city={city} />
            )}

          </div>
        </div>
      </main>
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
    </>
  );
};

export default CityPage;