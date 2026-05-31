import { useEffect, useRef, useState, useCallback } from "react";
import "./PackingImageSlider.scss";

// Lazy URL generation — array tab banta hai jab component mount ho
const TOTAL = 27;

const getImageUrl = (i: number) =>
  new URL(`../assets/homePagePng/feature${i + 1}.webp`, import.meta.url).href;



export default function PackingImageSlider() {
  const trackRef    = useRef<HTMLDivElement>(null);
  const animRef     = useRef<Animation | null>(null);
  const wrapperRef  = useRef<HTMLDivElement>(null);

  // Only generate URLs once
  const images = useRef<string[]>(
    Array.from({ length: TOTAL }, (_, i) => getImageUrl(i))
  );

  // IntersectionObserver — animation sirf tab chale jab visible ho
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Web Animations API — GPU composited translateX, no CSS keyframes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (visible) {
      if (!animRef.current) {
        animRef.current = track.animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(-50%)" },
          ],
          {
            duration: 60000,
            iterations: Infinity,
            easing: "linear",
          }
        );
      } else {
        animRef.current.play();
      }
    } else {
      animRef.current?.pause();
    }
  }, [visible]);

  // Pause on hover / tab hidden
  const pause  = useCallback(() => animRef.current?.pause(), []);
  const resume = useCallback(() => {
    if (visible) animRef.current?.play();
  }, [visible]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, [pause, resume]);

  useEffect(() => {
    const onVisibility = () => (document.hidden ? pause() : resume());
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [pause, resume]);

  // Duplicate array for seamless infinite loop
  const allImages = [...images.current, ...images.current];

  return (
    <div className="pis-wrapper" ref={wrapperRef}>
      {/* fade edges */}
      <div className="pis-fade pis-fade--left"  aria-hidden />
      <div className="pis-fade pis-fade--right" aria-hidden />

      <div className="pis-track" ref={trackRef}>
        {allImages.map((src, i) => (
          <div className="pis-slide" key={i}>
            <img
              src={src}
              alt={`packing-${(i % TOTAL) + 1}`}
              loading="lazy"
              decoding="async"
              width="300"
              height="200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}