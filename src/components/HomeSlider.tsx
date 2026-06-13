import { useEffect, useRef, useState, useCallback } from "react";
import "./HomeSlider.scss";

import mainSlider from "../assets/sliderImg/mainSlider.webp";
import gatiSlider2 from "../assets/sliderImg/gatislider2.webp";
import gatiSlider3 from "../assets/sliderImg/gatislider3.webp";
import gatislider5 from "../assets/sliderImg/gatislider5.webp";
// import gatislider6 from "../assets/sliderImg/gatislider6.webp";
import gatiSlider7 from "../assets/sliderImg/gatiSlider7.webp";
import gatislider8 from "../assets/sliderImg/gatiSlider8.webp";
import gatislider9 from "../assets/sliderImg/gatiSlider9.webp"

const images = [
  mainSlider,
  gatislider9,
  gatiSlider2,
  gatislider8,
  gatiSlider7,
  gatislider5,
  gatiSlider3,
];

const DRAG_THRESHOLD = 50;

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(
    images.map((_, i) => i === 0)
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const preloadAround = useCallback((index: number) => {
    setLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      updated[(index + 1) % images.length] = true;
      updated[(index - 1 + images.length) % images.length] = true;
      return updated;
    });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const next = (index + images.length) % images.length;
      setIsAnimating(true);
      setCurrent(next);
      setDragOffset(0);
      preloadAround(next);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [preloadAround]
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % images.length;
        preloadAround(next);
        return next;
      });
    }, 5000);
  }, [preloadAround]);

  useEffect(() => {

    preloadAround(0);
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer, preloadAround]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        startTimer();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [startTimer]);

  const onDragStart = (clientX: number) => {
    if (isAnimating) return;
    isDragging.current = true;
    startX.current = clientX;
    if (timerRef.current) clearInterval(timerRef.current);
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };

  const onDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    setDragOffset(clientX - startX.current);
  };

  const onDragEnd = (clientX: number) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    const diff = clientX - startX.current;
    if (Math.abs(diff) > DRAG_THRESHOLD) {
      goTo(diff < 0 ? current + 1 : current - 1);
    } else {
      setIsAnimating(true);
      setDragOffset(0);
      setTimeout(() => setIsAnimating(false), 400);
    }
    startTimer();
  };

  const handleMouseDown = (e: React.MouseEvent) => onDragStart(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => onDragMove(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => onDragEnd(e.clientX);
  const handleMouseLeave = (e: React.MouseEvent) => { if (isDragging.current) onDragEnd(e.clientX); };
  const handleTouchStart = (e: React.TouchEvent) => onDragStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => onDragMove(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => onDragEnd(e.changedTouches[0].clientX);

  const getSlideStyle = (i: number): React.CSSProperties => {
    const total = images.length;
    let position = i - current;
    if (position > total / 2) position -= total;
    if (position < -total / 2) position += total;
    return {
      transform: `translateX(calc(${position * 100}% + ${dragOffset}px))`,
      transition: isAnimating || !isDragging.current
        ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "none",
    };
  };

  return (
    <div className="hs-wrapper">

      <img
        src={mainSlider}
        alt="slide-1"
        width="1920"
        height="720"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: current === 0 ? 1 : -1,  // slider active hone par hide
          opacity: current === 0 ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      <div
        ref={trackRef}
        className="hs-track"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, i) => {
          const total = images.length;
          let position = i - current;
          if (position > total / 2) position -= total;
          if (position < -total / 2) position += total;
          if (Math.abs(position) > 1) return null;

          return (
            <div
              key={i}
              className="hs-slide"
              style={getSlideStyle(i)}
              aria-hidden={i !== current}
            >

              {i !== 0 && loaded[i] && (
                <img
                  src={img}
                  alt={`slide-${i + 1}`}
                  loading="lazy"
                  fetchPriority="auto"
                  decoding="async"
                  draggable={false}
                />
              )}
              {/* Pehle slide ka placeholder hs-slide wali div */}
              <div className="hs-slide__overlay" />
            </div>
          );
        })}
      </div>

      {/* Arrows
      <button className="hs-arrow hs-arrow--prev"
        onClick={() => { goTo(current - 1); startTimer(); }}
        aria-label="Previous slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hs-arrow hs-arrow--next"
        onClick={() => { goTo(current + 1); startTimer(); }}
        aria-label="Next slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button> */}

      {/* Dots */}
      <div className="hs-dots" role="tablist">
        {images.map((_, i) => (
          <button key={i} role="tab"
            aria-selected={i === current}
            className={`hs-dot ${i === current ? "hs-dot--active" : ""}`}
            onClick={() => { goTo(i); startTimer(); }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}