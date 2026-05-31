import { useState, useRef, useEffect, memo } from "react";
import { Helmet } from "react-helmet-async";
import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import TrustUsSection from "../components/TrustUsSection";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./VideoGallery.scss";

// ─── Types ────────────────────────────────────────────────────────────────────

interface VideoThumbnailProps {
  id: string;
  index: number;
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const VIDEO_IDS: string[] = [
  "kNzBhEgHX_0",
  "6kXCiKktxy0",
  "qZQQkGGlXdY",
  "LcMcs_lPp5g",
  "IouyH7162HE",
  "A3BIWSM420s",
  "Gq1Ho2NijUI",
  "6r94RYnPBW0",
  "sVn6lkuuPmg",
  "p92St_xXPok",
  "YB_fNh4Uvvw",
];

// ─── useInView Hook ───────────────────────────────────────────────────────────

function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null!);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// ─── VideoThumbnail — Lazy iframe loader ──────────────────────────────────────
// Renders a clickable thumbnail instead of an iframe until the user clicks.
// This dramatically improves page load performance (no 11 YouTube iframes on mount).

const VideoThumbnail = memo(({ id, index }: VideoThumbnailProps) => {
  const [active, setActive] = useState(false);
  const [ref, inView] = useInView(0.05);

  const thumbUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

  return (
    <div
      ref={ref}
      className={`video-item ${inView ? "visible" : ""}`}
      style={{ animationDelay: `${(index % 3) * 0.1}s` }}
    >
      {active ? (
        <iframe
          src={embedUrl}
          title={`Customer testimonial video ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          className="video-thumb"
          onClick={() => setActive(true)}
          aria-label={`Play video ${index + 1}`}
        >
          <img
            src={thumbUrl}
            alt={`Customer testimonial ${index + 1}`}
            loading={index < 3 ? "eager" : "lazy"}
          />
          <span className="play-btn" aria-hidden="true">
            <PlayArrowIcon />
          </span>
          <span className="video-overlay" aria-hidden="true" />
        </button>
      )}
    </div>
  );
});

// ─── Main Component ───────────────────────────────────────────────────────────

const VideoGallery = () => {
  return (
    <>
      <Helmet>
        <title>Video Gallery | Safe Shifting Packers</title>
        <meta
          name="description"
          content="Watch real customer testimonials and relocation stories from Safe Shifting Packers. See why thousands of families trust us for their move."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://safeshiftingpackers.com/video-gallery" />
      </Helmet>

      {/* ── Page Banner ── */}
      <div className="vg-banner">
        <div className="vg-banner__bg" aria-hidden="true">
          <span className="vg-banner__dot" />
          <span className="vg-banner__dot" />
          <span className="vg-banner__dot" />
        </div>
        <div className="vg-banner__content">
          <span className="vg-tag">Customer Stories</span>
          <h1>Our Videos</h1>
          <p>Real Stories. Real Relocations. Here's what our happy customers have to say.</p>
        </div>
      </div>

      {/* ── Video Grid ── */}
      <section className="vg-section">
        <div className="vg-container">
          <div className="vg-grid">
            {VIDEO_IDS.map((id, i) => (
              <VideoThumbnail key={id} id={id} index={i} />
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
      <AwardCertification />
      <TrustUsSection />
      <BrandList />
      <FAQList />
    </>
  );
};

export default VideoGallery;