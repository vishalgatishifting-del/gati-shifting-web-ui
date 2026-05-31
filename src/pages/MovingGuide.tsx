import { memo, lazy, Suspense, useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import pdf from "../assets/Gati_Shifting_Moving_Checklist.pdf";
import "./MovingGuide.scss";

// ── Lazy-load heavy below-fold components ─────────────────────────────────────
const ReviewVideo        = lazy(() => import("../components/ReviewVideos"));
const GetInTouch         = lazy(() => import("../components/GetInTouch"));
const AwardCertification = lazy(() => import("../components/AwardCertification"));
const TrustUsSection     = lazy(() => import("../components/TrustUsSection"));
const BrandList          = lazy(() => import("../components/BrandsList"));
const FAQList            = lazy(() => import("../components/FAQList"));

// ── Static data ───────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { href: "#beforemove",      label: "Before The Move" },
  { href: "#packing",         label: "Packing Tips" },
  { href: "#movingdayadvice", label: "Moving Day Advice" },
  { href: "#afterthemove",    label: "After The Move" },
  { href: "#7daysmoving",     label: "7-Day Checklist" },
  { href: "#tipstestimonials",label: "Tips & Testimonials" },
  { href: "#downloadpdf",     label: "Download PDF" },
] as const;

const BEFORE_MOVE_TIPS = [
  "Start packing non-essential items 2 weeks before moving day.",
  "Declutter your home to avoid carrying unnecessary items.",
  "Do not pack valuables like important documents or jewellery with regular goods.",
  "Label every box with room name, contents, and priority level.",
  "Notify utility services — electricity, water, gas — about your move date.",
] as const;

const PACKING_TIPS = [
  "Use bubble wrap and packing paper to protect fragile items.",
  "Pack electronics in original boxes if available — use foam otherwise.",
  "Do not overload boxes; keep them under 20 kg to prevent breakage.",
  "Seal boxes securely with quality packing tape on all edges.",
] as const;

const MOVING_DAY_TIPS = [
  "Keep an essentials bag with clothes, chargers, snacks, and medicines.",
  "Coordinate with your movers and confirm pickup schedules in advance.",
  "Do a final walk-through to ensure all items are packed and nothing left.",
] as const;

const AFTER_MOVE_TIPS = [
  "Unpack smartly — prioritise essentials like kitchen and bedroom first.",
  "Update your address on IDs, bank accounts, and delivery subscriptions.",
  "Inspect your new home's safety — check locks, water, and electricity.",
] as const;

const CHECKLIST_ROWS = [
  { days: "30 Days Before", task: "Book packers and movers, start decluttering your home." },
  { days: "15 Days Before", task: "Begin packing non-essential items, room by room." },
  { days: "7 Days Before",  task: "Confirm all bookings, prepare your essentials bag." },
  { days: "1 Day Before",   task: "Disconnect appliances, complete final-day packing." },
  { days: "Moving Day",     task: "Verify inventory with movers, oversee loading carefully." },
  { days: "1 Day After",    task: "Begin unpacking essentials — kitchen, bedding, toiletries." },
  { days: "7 Days After",   task: "Fully settle in, update address across all accounts." },
] as const;

const TESTIMONIALS = [
  { quote: "Labeling saved me so much hassle during unpacking!", author: "Rahul", city: "Delhi" },
  { quote: "Wrap electronics in soft blankets to avoid scratches — it works!", author: "Gati Shifting Expert", city: "" },
] as const;

// ── Active section tracker hook ───────────────────────────────────────────────
function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

// ── Sub-components ────────────────────────────────────────────────────────────

const SectionCard = memo(
  ({
    id, icon, title, children,
  }: {
    id: string; icon: string; title: string; children: React.ReactNode;
  }) => (
    <div id={id} className="mg-card">
      <div className="mg-card__header">
        <span className="mg-card__icon" aria-hidden="true">{icon}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  )
);
SectionCard.displayName = "SectionCard";

const TipList = memo(({ items }: { items: readonly string[] }) => (
  <ul className="mg-tip-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
));
TipList.displayName = "TipList";

// ── Page component ────────────────────────────────────────────────────────────
const SECTION_IDS = [
  "beforemove", "packing", "movingdayadvice",
  "afterthemove", "7daysmoving", "tipstestimonials", "downloadpdf",
] as const;

const MovingGuide = () => {
  const activeSection = useActiveSection(SECTION_IDS);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id  = href.replace("#", "");
      const el  = document.getElementById(id);
      if (!el) return;
      const offset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--navbar-h") || "96",
        10
      ) + 24;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <Helmet>
        <title>Moving Guide | Gati Shifting Packers</title>
        <meta
          name="description"
          content="Access step-by-step moving tips and guidance from Gati Shifting Packers. Learn how to pack, transport, and settle in safely for a smooth relocation experience."
        />
        <meta
          name="keywords"
          content="moving guide, packing tips, relocation checklist, shifting tips, home shifting, office moving, gati shifting packers"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Moving Guide | Gati Shifting Packers" />
        <meta
          property="og:description"
          content="Expert moving tips and a complete relocation checklist from Gati Shifting Packers. Make your move smooth, organised, and stress-free."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatishiftingpackers.com/moving-guide" />
        <meta property="og:site_name" content="Gati Shifting Packers" />
        <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />
        <meta property="og:image:alt" content="Moving Guide by Gati Shifting Packers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moving Guide | Gati Shifting Packers" />
        <meta
          name="twitter:description"
          content="Expert moving tips and a complete relocation checklist from Gati Shifting Packers."
        />
        <meta name="twitter:image" content="https://gatishiftingpackers.com/metaImg.png" />
        <meta httpEquiv="content-language" content="en" />
        <link rel="canonical" href="https://gatishiftingpackers.com/moving-guide" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="mg-hero" role="banner">
        <div className="mg-hero__overlay" aria-hidden="true" />
        <div className="mg-hero__content">
          <span className="mg-hero__eyebrow">Expert Relocation Guidance</span>
          <h1>Moving Guide</h1>
          <p>Everything you need for a smooth, stress-free move — from prep to unpacking.</p>
        </div>
      </div>

      {/* ── Main layout ───────────────────────────────────────────── */}
      <section id="movingguidesec" aria-label="Moving guide content">
        <div className="mg-layout">

          {/* Sticky sidebar nav */}
          <aside className="mg-sidebar" aria-label="Page navigation">
            <p className="mg-sidebar__heading">On This Page</p>
            <nav>
              {NAV_ITEMS.map(({ href, label }) => {
                const id = href.replace("#", "");
                return (
                  <a
                    key={href}
                    href={href}
                    className={activeSection === id ? "mg-nav-link mg-nav-link--active" : "mg-nav-link"}
                    onClick={(e) => handleNavClick(e, href)}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          </aside>

          {/* Content area */}
          <div className="mg-content">

            <SectionCard id="beforemove" icon="🏁" title="Before the Move: Preparation Tips">
              <TipList items={BEFORE_MOVE_TIPS} />
            </SectionCard>

            <SectionCard id="packing" icon="📦" title="Packing Tips — Do's & Don'ts">
              <TipList items={PACKING_TIPS} />
            </SectionCard>

            <SectionCard id="movingdayadvice" icon="🚚" title="Moving Day Advice">
              <TipList items={MOVING_DAY_TIPS} />
            </SectionCard>

            <SectionCard id="afterthemove" icon="🏡" title="After the Move">
              <TipList items={AFTER_MOVE_TIPS} />
            </SectionCard>

            <SectionCard id="7daysmoving" icon="📅" title="7-Day Moving Checklist">
              <div className="mg-table-wrap">
                <TableContainer component={Paper} elevation={0} className="mg-table">
                  <Table aria-label="7-day moving checklist">
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Timeline</strong></TableCell>
                        <TableCell><strong>Task</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {CHECKLIST_ROWS.map(({ days, task }) => (
                        <TableRow key={days}>
                          <TableCell className="mg-table__day">{days}</TableCell>
                          <TableCell>{task}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </SectionCard>

            <SectionCard id="tipstestimonials" icon="✍️" title="Tips & Testimonials">
              <div className="mg-testimonials">
                {TESTIMONIALS.map(({ quote, author, city }) => (
                  <blockquote key={author} className="mg-testimonial">
                    <p>"{quote}"</p>
                    <footer>
                      — <strong>{author}</strong>
                      {city && <span>, {city}</span>}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </SectionCard>

            <SectionCard id="downloadpdf" icon="⬇️" title="Download Our Free Moving Checklist">
              <p className="mg-pdf__desc">
                Get our comprehensive moving checklist as a printable PDF — plan every
                step of your move with confidence.
              </p>
              <a
                className="mg-pdf__btn"
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Gati Shifting moving checklist PDF"
              >
                <DownloadIcon />
                Download Free PDF
              </a>
            </SectionCard>

          </div>
        </div>
      </section>

      <Suspense fallback={<div className="mg-loading" aria-hidden="true" />}>
        <ReviewVideo />
        <GetInTouch />
        <AwardCertification />
        <TrustUsSection />
        <BrandList />
        <FAQList />
      </Suspense>
    </>
  );
};

export default memo(MovingGuide);