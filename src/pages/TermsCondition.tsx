import { lazy, Suspense, memo } from "react";
import { Helmet } from "react-helmet-async";
import "./TermsCondition.scss";

// ─── Lazy-loaded sections ─────────────────────────────────────────────────────
const ReviewVideo        = lazy(() => import("../components/ReviewVideos"));
const GetInTouch         = lazy(() => import("../components/GetInTouch"));
const AwardCertification = lazy(() => import("../components/AwardCertification"));
const TrustUsSection     = lazy(() => import("../components/TrustUsSection"));
const BrandList          = lazy(() => import("../components/BrandsList"));
const FAQList            = lazy(() => import("../components/FAQList"));

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────
const IconPin     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>;
const IconUser    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconShield  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IconBrain   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>;
const IconScale   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l4 8H8l4-8z"/><path d="M6 21l-2-5h4l-2 5z"/><path d="M18 21l-2-5h4l-2 5z"/><line x1="3" y1="16" x2="21" y2="16"/><line x1="12" y1="3" x2="12" y2="16"/></svg>;
const IconCard    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>;
const IconX       = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>;
const IconLock    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>;
const IconRefresh = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>;
const IconAlert   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  number: string;
  icon: React.ReactElement;
  title: string;
  variant?: "default" | "warning";
  content: React.ReactElement;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  {
    id: "service-availability",
    number: "01",
    icon: <IconPin />,
    title: "Service Availability",
    content: (
      <p>
        We provide goods transport, packing, and moving services across India as well as
        international relocation services. However, we reserve the right to refuse service
        to anyone for any reason at any time.
      </p>
    ),
  },
  {
    id: "customer-responsibility",
    number: "02",
    icon: <IconUser />,
    title: "Customer Responsibility",
    content: (
      <p>
        It is the customer's responsibility to ensure that all goods are properly packed,
        labelled, and ready for shipment. For international relocation, customers must provide
        accurate documentation and ensure that all necessary permits, licences, or customs
        clearances are in place. Prohibited or restricted items must not be included in the shipment.
      </p>
    ),
  },
  {
    id: "liability",
    number: "03",
    icon: <IconShield />,
    title: "Liability",
    content: (
      <p>
        We take utmost care in handling goods during packing, moving, and transportation.
        However, we are not liable for any damage, delay, or loss that may occur. Our liability
        is limited to the terms mentioned in the service contract. Customers are strongly advised
        to purchase insurance coverage for their goods, particularly for international shipments.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    number: "04",
    icon: <IconBrain />,
    title: "Intellectual Property",
    content: (
      <p>
        All content on our website, including text, graphics, logos, images, and software, is the
        property of Gati Shifting Packers and is protected by Indian and international copyright laws.
      </p>
    ),
  },
  {
    id: "governing-law",
    number: "05",
    icon: <IconScale />,
    title: "Governing Law",
    content: (
      <p>
        These terms and conditions are governed by the laws of India. Any disputes arising out of
        or in connection with these terms shall be subject to the exclusive jurisdiction of the courts
        in India. For international services, customers must also comply with the laws and regulations
        of the destination country.
      </p>
    ),
  },
  {
    id: "booking-payment",
    number: "06",
    icon: <IconCard />,
    title: "Booking & Payment",
    content: (
      <>
        <p>
          An advance payment of ₹1,000 to ₹5,000 is mandatory at the time of booking. If a
          separate vehicle is booked, the customer must pay 90% in advance, and the remaining
          10% at the delivery point once the vehicle reaches its destination. In the case of
          sharing/part-load services, full payment in advance is required.
        </p>
        <ul>
          <li>Taxes, tolls, parking, and demurrage charged separately</li>
          <li>Customs/clearance charges are the customer's responsibility</li>
          <li>Any other applicable fees shall be charged separately</li>
        </ul>
      </>
    ),
  },
  {
    id: "cancellation-refund",
    number: "07",
    icon: <IconX />,
    title: "Cancellation & Refund Policy",
    variant: "warning",
    content: (
      <>
        <p>
          All advance payments made at the time of booking are <strong>non-refundable</strong>{" "}
          in case of cancellation by the customer. Once the booking is confirmed and advance
          payment is received, the amount will not be returned under any circumstances.
        </p>
        <div className="tc-alert">
          <span className="tc-alert__icon"><IconAlert /></span>
          <p>Advance payments are strictly non-refundable regardless of the reason for cancellation.</p>
        </div>
      </>
    ),
  },
  {
    id: "prohibited-items",
    number: "08",
    icon: <IconX />,
    title: "Prohibited & Restricted Items",
    variant: "warning",
    content: (
      <>
        <p>Customers are strictly advised not to include the following items in their consignment:</p>
        <ul>
          <li>Explosives, fireworks, and inflammable items</li>
          <li>Hazardous or toxic chemicals, gases, and radioactive materials</li>
          <li>Perishable goods such as food, plants, or liquids (unless prior arrangements made)</li>
          <li>Illegal goods, drugs, weapons, or items prohibited by law</li>
          <li>Currency, precious metals, jewellery, or valuable documents (unless declared and insured)</li>
        </ul>
        <div className="tc-alert">
          <span className="tc-alert__icon"><IconAlert /></span>
          <p>
            If any prohibited or restricted items are found in the shipment, Gati Shifting Packers
            will not be liable for loss, damage, or legal consequences arising from the same.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "insurance",
    number: "09",
    icon: <IconLock />,
    title: "Insurance & Liability",
    content: (
      <>
        <p>
          Customers are strongly recommended to purchase transit insurance for their goods.
          Gati Shifting Packers can assist in providing suitable insurance options upon request.
          The company's liability shall be limited to the declared value of goods or as specified
          in the service contract.
        </p>
        <p className="tc-sub-heading">Claims Process</p>
        <ul>
          <li>Visible damage — must be reported in writing within 7 days of delivery</li>
          <li>Concealed damage — must be reported within 30 days of unpacking</li>
        </ul>
        <p className="tc-sub-heading">Required Documents for Claim</p>
        <ul>
          <li>Photographs of the damage</li>
          <li>Copy of delivery receipt (with remarks, if any)</li>
          <li>Supporting documents (invoice, insurance papers, etc.)</li>
        </ul>
        <div className="tc-alert">
          <span className="tc-alert__icon"><IconAlert /></span>
          <p>Claims submitted without complete documentation or beyond the specified timelines may not be accepted.</p>
        </div>
      </>
    ),
  },
  {
    id: "changes",
    number: "10",
    icon: <IconRefresh />,
    title: "Changes to Terms & Conditions",
    content: (
      <p>
        We reserve the right to modify these terms and conditions at any time. Customers are
        encouraged to review them periodically. Continued use of our website and services after
        any updates will be considered acceptance of the revised terms. For questions, contact us
        at{" "}
        <a href="mailto:infogatishiftingpackers@gmail.com" className="tc-link">
          infogatishiftingpackers@gmail.com
        </a>.
      </p>
    ),
  },
];

// ─── TermsCard ────────────────────────────────────────────────────────────────

const TermsCard = memo(({ section, index }: { section: Section; index: number }) => (
  <article
    id={section.id}
    className={`tc-card${section.variant === "warning" ? " tc-card--warning" : ""}`}
    style={{ animationDelay: `${index * 0.06}s` }}
  >
    <div className="tc-card__head">
      <span className="tc-card__icon" aria-hidden="true">{section.icon}</span>
      <div className="tc-card__head-text">
        <span className="tc-card__number">Section {section.number}</span>
        <h2 className="tc-card__title">{section.title}</h2>
      </div>
    </div>
    <div className="tc-card__body">{section.content}</div>
  </article>
));
TermsCard.displayName = "TermsCard";

// ─── Main Component ───────────────────────────────────────────────────────────

const TermsAndConditions = () => (
  <>
    <Helmet>
      <title>Terms and Conditions | Gati Shifting Packers</title>
      <meta
        name="description"
        content="Read the terms and conditions for using Gati Shifting Packers' relocation, packing, and moving services across India and internationally."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://gatishiftingpackers.com/terms-and-conditions" />
    </Helmet>

    <section id="terms-section" aria-labelledby="tc-page-title">

      {/* ── Hero Banner ── */}
      <div className="tc-hero">
        <div className="tc-hero__bg" aria-hidden="true" />
        <div className="tc-hero__content">
          <span className="tc-eyebrow">Legal Document</span>
          <h1 className="tc-page-title" id="tc-page-title">Terms &amp; Conditions</h1>
          <p className="tc-page-subtitle">Gati Shifting Packers · Effective June 2025</p>
          <div className="tc-intro">
            <span className="tc-intro__icon"><IconShield /></span>
            <p>
              Welcome to Gati Shifting Packers! By accessing and using our website
              (gatishiftingpackers.com) and services, you agree to the following terms and
              conditions. Please read them carefully before using our services.
            </p>
          </div>
        </div>
      </div>

      {/* ── Body: Sidebar + Cards ── */}
      <div className="tc-body">
        <div className="tc-layout">

          {/* Sticky Side Nav */}
          <nav className="tc-sidenav" aria-label="Jump to section">
            <p className="tc-sidenav__label">Contents</p>
            <ul>
              {SECTIONS.map(({ id, number, title }) => (
                <li key={id}>
                  <a href={`#${id}`} className="tc-sidenav__link">
                    <span className="tc-sidenav__num">{number}</span>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cards */}
          <div className="tc-cards">
            {SECTIONS.map((section, i) => (
              <TermsCard key={section.id} section={section} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>

    {/* Suspense with null fallback — avoids loading text flash */}
    <Suspense fallback={null}>
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />
    </Suspense>
  </>
);

export default TermsAndConditions;