import { useEffect, useRef, useState } from "react";
import "./ReviewVideos.scss";

const videos = [
  { id: "YnYJ5izaQAU" },
  { id: "6Xpc17JD92w" },
  { id: "6bK7VyZSmf4" },
  { id: "95_4BbQC8iY" },
  { id: "KafXJZeP0mE" },
  { id: "crpkuDgv_oA" },
  { id: "-l-_tRAUn2w" },
];

const ReviewVideo = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const animRef = useRef<Animation | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate cards for seamless loop
    const cards = Array.from(track.children) as HTMLElement[];

    cards.forEach((card) => {
      const clone = card.cloneNode(true) as HTMLElement;
      clone.setAttribute("data-clone", "true");
      track.appendChild(clone);
    });

    const totalWidth = track.scrollWidth / 2;

    animRef.current = track.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(-${totalWidth}px)` },
      ],
      {
        duration: 77000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => {
      animRef.current?.cancel();
    };
  }, []);

  const handleMouseEnter = () => {
    animRef.current?.pause();
  };

  const handleMouseLeave = () => {
    if (activeIndex === null) {
      animRef.current?.play();
    }
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
    animRef.current?.pause();
  };

  const handleClose = () => {
    setActiveIndex(null);
    animRef.current?.play();
  };

  return (
    <section id="customer-review">
      <div className="header">
        <h2>What Our Customers Say</h2>
        <p>
          Real experiences from real customers who trusted our relocation
          services.
        </p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {videos.map((v, i) => (
            <div
              className={`yt-card ${activeIndex === i ? "active" : ""}`}
              key={i}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(i)}
            >
              {activeIndex === i ? (
                <>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={`Review Video ${i + 1}`}
                  />
                  <button
                    className="close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClose();
                    }}
                  >
                    ✕
                  </button>
                </>
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    loading="lazy"
                    alt="Review video thumbnail"
                  />
                  <div className="play-btn">▶</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewVideo;