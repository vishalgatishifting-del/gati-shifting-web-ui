import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import chargesImg from "../assets/CityPages/packers & movers charges.webp"
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
                <p>{service.desc}</p>
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
                  {/* <Link to={item.link} target="_blank"> */}
                  {item.linkText}
                  {/* </Link>  */}
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