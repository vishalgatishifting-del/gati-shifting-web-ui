import { memo, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper,
} from "@mui/material";
import AccountTreeIcon       from "@mui/icons-material/AccountTree";
import ArticleIcon           from "@mui/icons-material/Article";
import DocumentScannerIcon   from "@mui/icons-material/DocumentScanner";
import ReceiptIcon           from "@mui/icons-material/Receipt";
import deliveryChallan from "../assets/billClaimbPage/deliveryChallan.png";
import paymentReceipt  from "../assets/billClaimbPage/paymentReceipt.png";
import taxInvoice      from "../assets/billClaimbPage/taxInvoice.png";
import "./BillClaim.scss";
import { siteConfig } from "../config/Company";

// ── Lazy-load heavy below-fold components ─────────────────────────────────────
const ReviewVideo        = lazy(() => import("../components/ReviewVideos"));
const GetInTouch         = lazy(() => import("../components/GetInTouch"));
const AwardCertification = lazy(() => import("../components/AwardCertification"));
const TrustUsSection     = lazy(() => import("../components/TrustUsSection"));
const BrandList          = lazy(() => import("../components/BrandsList"));
const FAQList            = lazy(() => import("../components/FAQList"));

// ── Static data ───────────────────────────────────────────────────────────────

const SAMPLE_DOCS = [
  { src: deliveryChallan, alt: "Sample delivery challan document", label: "Delivery Challan" },
  { src: paymentReceipt,  alt: "Sample payment receipt document",  label: "Payment Receipt" },
  { src: taxInvoice,      alt: "Sample GST tax invoice document",  label: "Tax Invoice" },
] as const;

const CLAIM_STEPS = [
  { step: "01", text: "Document damages or losses with clear photos immediately." },
  { step: "02", text: "Contact our support team within 48 hours of delivery." },
  { step: "03", text: "Submit the claim form with all required details." },
  { step: "04", text: "Attach invoices, receipts, and supporting photographs." },
  { step: "05", text: "Our team verifies and investigates the reported issue." },
  { step: "06", text: "Approved claims are settled fairly and promptly." },
] as const;

const GST_ITEMS = [
  { rate: "0%",  desc: "Transport-only (direct GST customer)" },
  { rate: "5%",  desc: "Basic transport services" },
  { rate: "12%", desc: "Transport with additional services" },
  { rate: "18%", desc: "Full service — packing, moving & insurance" },
  { rate: "28%", desc: "Luxury goods transport (non-household)" },
] as const;

const REQUIRED_DOCS = [
  "Original Bill",
  "Payment Receipts",
  "Quotation & GST Bill",
  "Itemized List of Goods",
  "Insurance Papers",
  "ID & Address Proof",
] as const;

const GST_CHECKS = [
  "Verify GSTIN on the official GST portal",
  "Check invoice format compliance",
  "Cross-check applicable tax percentage",
  "Ensure valid digital signature is present",
  "Confirm unique, non-duplicate invoice number",
] as const;

// ── Sub-components ────────────────────────────────────────────────────────────

const InfoCard = memo(
  ({
    icon, title, children, accent,
  }: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    accent?: string;
  }) => (
    <div
      className="bc-card"
      style={{ "--card-accent": accent || "#2563eb" } as React.CSSProperties}
    >
      <div className="bc-card__header">
        <span className="bc-card__icon" aria-hidden="true">{icon}</span>
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  )
);
InfoCard.displayName = "InfoCard";

const SampleDoc = memo(({ doc }: { doc: (typeof SAMPLE_DOCS)[number] }) => (
  <figure className="bc-sample-doc">
    <div className="bc-sample-doc__img-wrap">
      <img src={doc.src} alt={doc.alt} loading="lazy" />
      <div className="bc-sample-doc__watermark" aria-hidden="true">SAMPLE COPY</div>
    </div>
    <figcaption>{doc.label}</figcaption>
  </figure>
));
SampleDoc.displayName = "SampleDoc";

// ── Page component ────────────────────────────────────────────────────────────
const BillClaim = () => (
  <>
    <Helmet>
      <title>Bill Claim | Gati Shifting Packers</title>
      <meta
        name="description"
        content="Easily claim your shifting bill online with Gati Shifting Packers. Submit your details and get your verified relocation bill for reimbursement quickly and securely."
      />
      <meta
        name="keywords"
        content="Gati Shifting Packers bill claim, shifting bill claim, relocation bill for reimbursement, packers movers bill claim, transport bill claim, claim shifting invoice"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Abhishek" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bill Claim | Gati Shifting Packers" />
      <meta
        property="og:description"
        content="Submit your bill claim with Gati Shifting Packers and receive your verified relocation invoice for reimbursement in a few easy steps."
      />
      <meta property="og:url" content="https://gatishiftingpackers.com/bill-claim" />
      <meta property="og:site_name" content="Gati Shifting Packers" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Bill Claim | Gati Shifting Packers" />
      <meta
        name="twitter:description"
        content="Get your verified relocation bill for reimbursement with Gati Shifting Packers. Quick, transparent, and reliable."
      />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="canonical" href="https://gatishiftingpackers.com/bill-claim" />
    </Helmet>

    {/* ── Hero ──────────────────────────────────────────────────────────── */}
    <div className="bc-hero" role="banner">
      <div className="bc-hero__overlay" aria-hidden="true" />
      <div className="bc-hero__content">
        <span className="bc-hero__eyebrow">Transparent · Secure · Fast</span>
        <h1>Bill Claim</h1>
        <p>Submit your relocation bill claim online and get verified invoices for reimbursement in a few easy steps.</p>
      </div>
    </div>

    {/* ── Main section ─────────────────────────────────────────────────── */}
    <section id="billclaimsec" aria-label="Bill claim information">
      <div className="bc-container">

        {/* ── About + policy intro ─────────────────────────────────────── */}
        <div className="bc-intro">
          <div className="bc-intro__image">
            <img
              src="https://magenta-wildcat-322052.hostingersite.com/images/serviceboy2.png"
              alt="Gati Shifting team member loading goods"
              loading="lazy"
              width={460}
              height={380}
            />
          </div>
          <div className="bc-intro__text">
            <span className="bc-label">Our Services</span>
            <h2>About Our Relocation Services</h2>
            <p>
              We specialise in both residential and commercial moves, offering
              customised solutions tailored to every client's unique requirements.
              High-quality packing and careful handling ensure your belongings
              arrive safely and on time.
            </p>

            <div className="bc-intro__divider" aria-hidden="true" />

            <span className="bc-label">Bill Policy</span>
            <h2>Bill for Claim Policy</h2>
            <p>
              Our billing-for-claim policy ensures full transparency in the event
              of damages or losses during a move. Customers can request a bill for
              claim through our 24/7 support team at any stage of the process.
            </p>
    
            <a
              className="bc-intro__cta"
              href={`tel:${siteConfig.phone}`}
              aria-label="Call us to start your bill claim"
            >
              📞 Call Us to File a Claim
            </a>
          </div>
        </div>

        {/* ── Sample documents ─────────────────────────────────────────── */}
        <div className="bc-samples">
          <span className="bc-label bc-label--center">Sample Documents</span>
          <h2 className="bc-samples__heading">What Your Documents Look Like</h2>
          <p className="bc-samples__sub">
            Reference copies of documents you'll receive after your move.
          </p>
          <div className="bc-samples__grid">
            {SAMPLE_DOCS.map((doc) => (
              <SampleDoc key={doc.label} doc={doc} />
            ))}
          </div>
        </div>

        {/* ── Info cards: 2-column grid ─────────────────────────────────── */}
        <div className="bc-grid">

          {/* Steps to file */}
          <InfoCard
            icon={<AccountTreeIcon />}
            title="Steps to File a Claim"
            accent="#2563eb"
          >
            <ol className="bc-steps">
              {CLAIM_STEPS.map(({ step, text }) => (
                <li key={step}>
                  <span className="bc-steps__num" aria-hidden="true">{step}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </InfoCard>

          {/* Required documents */}
          <InfoCard
            icon={<DocumentScannerIcon />}
            title="Required Documents"
            accent="#7c3aed"
          >
            <ul className="bc-checklist">
              {REQUIRED_DOCS.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
          </InfoCard>

          {/* GST invoice check */}
          <InfoCard
            icon={<ArticleIcon />}
            title="How to Identify Forged GST Invoices"
            accent="#d97706"
          >
            <ul className="bc-checklist">
              {GST_CHECKS.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </InfoCard>

          {/* GST structure */}
          <InfoCard
            icon={<ReceiptIcon />}
            title="GST Bill Structure"
            accent="#16a34a"
          >
            <div className="bc-gst-list">
              {GST_ITEMS.map(({ rate, desc }) => (
                <div key={rate} className="bc-gst-row">
                  <span className="bc-gst-row__rate">{rate} GST</span>
                  <span className="bc-gst-row__desc">{desc}</span>
                </div>
              ))}
            </div>
            <p className="bc-gst-note">
              ℹ️ Please read all policy terms carefully before submitting a claim.
            </p>
          </InfoCard>

        </div>

        {/* ── Branch contact table ──────────────────────────────────────── */}
        <div className="bc-table-section">
          <span className="bc-label">Contact</span>
          <h2>Branch Contact Details</h2>
          <div className="bc-table-wrap">
            <TableContainer component={Paper} elevation={0} className="bc-table">
              <Table aria-label="Branch contact details">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Branch</strong></TableCell>
                    <TableCell><strong>Mobile No.</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>India (Head Office)</TableCell>
                    <TableCell>
                      <a className="bc-phone-link" href={`tel:${siteConfig.phone}`}>
                        {siteConfig.phone}
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

      </div>
    </section>

    <Suspense fallback={<div className="bc-loading" aria-hidden="true" />}>
      <ReviewVideo />
      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />
    </Suspense>
  </>
);

export default memo(BillClaim);