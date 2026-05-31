import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import ReviewVideo from "../components/ReviewVideos";
import TrustUsSection from "../components/TrustUsSection";
import { siteConfig } from "../config/Company";
import "./PrivacyPolicy.scss";

// ─── Section Data ────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: "info-collect",
    number: "01",
    title: "Information We Collect",
    body: `When you contact us directly, we may collect additional information such as your name, email address, phone number, message contents, and any other information you choose to provide.

When you register for an account, we may ask for your contact information including name, company name, address, email address, and telephone number. We may also share customer details with our verified vendors through our Android application. Before granting access, we verify vendors by mobile, email, office address, and government licences like GST.`,
  },
  {
    id: "info-use",
    number: "02",
    title: "How We Use Your Information",
    body: "We use the information we collect for various purposes, including:",
    list: [
      "Providing, operating, and maintaining our website and services",
      "Improving and personalising our website and services",
      "Understanding and analysing how you use our website and services",
      "Developing new products, services, features, and functionality",
      "Communicating with you for customer service, updates, and marketing purposes",
      "Sending you emails",
      "Finding and preventing fraud",
    ],
  },
  {
    id: "ccpa",
    number: "03",
    title: "CCPA Privacy Rights",
    subtitle: "Do Not Sell My Personal Information",
    body: "Under the California Consumer Privacy Act (CCPA), California residents have the right to request that a business disclose the categories and specific pieces of personal information collected about them. We do not sell personal information of our users.",
  },
  {
    id: "gdpr",
    number: "04",
    title: "GDPR Data Protection Rights",
    body: "If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). These include the right to access, rectify, erase, restrict processing, and object to processing of your personal data. If you wish to exercise any of these rights, please contact us.",
  },
  {
    id: "children",
    number: "05",
    title: "Children's Information",
    body: "Our website and services are not intended for children under the age of 13. We do not knowingly collect personal identifiable information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately and we will remove such information from our records.",
  },
  {
    id: "retention",
    number: "06",
    title: "Data Retention",
    body: "We retain personal information we collect for as long as necessary to provide our services and for other essential purposes, such as complying with our legal obligations, resolving disputes, and enforcing our agreements.",
  },
  {
    id: "security",
    number: "07",
    title: "Security",
    body: "We take reasonable measures to protect your personal information from unauthorised access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.",
  },
  {
    id: "changes",
    number: "08",
    title: "Changes to Privacy Policy",
    body: "We reserve the right to modify this Privacy Policy at any time. If we make material changes, we will notify you by email or by posting a notice on our website. Your continued use of our website or services after any modifications constitutes your acceptance of those changes.",
  },
  {
    id: "contact",
    number: "09",
    title: "Contact Us",
    body: "If you have any questions or concerns about our Privacy Policy, please reach out to us.",
    contact: siteConfig.email.info,
    footer: "Thank you for choosing Gati Shifting Packers for your transportation and packing needs.",
  },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────
const PrivacyPolicy = () => {
  return (
    <>
      <div id="privacy-policy-page">

        {/* ── Hero ────────────────────────────────────── */}
        <section id="pp-hero" aria-label="Privacy Policy header">
          <div className="pp-hero__bg" aria-hidden="true">
            <div className="pp-hero__grid" />
            <div className="pp-hero__glow" />
          </div>
          <div className="pp-hero__content">
            <span className="pp-eyebrow">Legal &amp; Privacy</span>
            <h1 className="pp-hero__title">Privacy Policy</h1>
            <p className="pp-hero__subtitle">
              At Gati Shifting Packers, we respect your privacy and are committed
              to protecting your personal information. This policy describes how
              we collect, use, and disclose your data when you use our website or
              avail of our packers and movers services.
            </p>
            <div className="pp-hero__meta">
              <span className="pp-meta-pill">
                <span className="pp-meta-dot" aria-hidden="true" />
                Effective: January 2024
              </span>
              <span className="pp-meta-pill">
                <span className="pp-meta-dot" aria-hidden="true" />
                9 Sections
              </span>
            </div>
          </div>
        </section>

        {/* ── Content Layout ──────────────────────────── */}
        <section id="pp-content" aria-label="Privacy Policy sections">
          <div className="pp-layout">

            {/* Sticky TOC sidebar */}
            <aside className="pp-toc" aria-label="Table of contents">
              <p className="pp-toc__label">Contents</p>
              <nav>
                <ol className="pp-toc__list">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="pp-toc__link">
                        <span className="pp-toc__num">{s.number}</span>
                        <span className="pp-toc__text">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Main cards */}
            <main className="pp-main">
              {SECTIONS.map((s) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="pp-card"
                  aria-labelledby={`${s.id}-heading`}
                >
                  <div className="pp-card__number" aria-hidden="true">{s.number}</div>
                  <div className="pp-card__body">
                    <h2 id={`${s.id}-heading`} className="pp-card__title">
                      {s.title}
                      {"subtitle" in s && s.subtitle && (
                        <span className="pp-card__subtitle">{s.subtitle}</span>
                      )}
                    </h2>
                    <p className="pp-card__text">{s.body}</p>
                    {"list" in s && s.list && (
                      <ul className="pp-card__list">
                        {s.list.map((item) => (
                          <li key={item}>
                            <span className="pp-list-dot" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {"contact" in s && s.contact && (
                      <div className="pp-card__contact-box">
                        <span className="pp-contact-label">Email us at</span>
                        <a href={`mailto:${s.contact}`} className="pp-contact-link">
                          {s.contact}
                        </a>
                      </div>
                    )}
                    {"footer" in s && s.footer && (
                      <p className="pp-card__footer-note">{s.footer}</p>
                    )}
                  </div>
                </article>
              ))}
            </main>

          </div>
        </section>

      </div>

      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />
    </>
  );
};

export default PrivacyPolicy;