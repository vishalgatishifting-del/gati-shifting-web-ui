import React, { useState, useCallback } from "react";
import "./ExpandableImageSlider.scss";

// ── Types ──────────────────────────────────────────────────────────────────
export interface PanelItem {
  img: string;
  heading: string;
  subheading?: string;
  text: string;
  tag?: string;
}

export interface ExpandableImagePanelProps {
  items: PanelItem[];
  height?: number;          // desktop height in px (default 420)
  mobileItemHeight?: number; // collapsed height on mobile (default 76)
  mobileActiveHeight?: number; // expanded height on mobile (default 260)
  defaultActive?: number;   // which panel is active by default (default 0)
  className?: string;
}

// ── Component ──────────────────────────────────────────────────────────────
const ExpandableImagePanel: React.FC<ExpandableImagePanelProps> = ({
  items,
  height = 420,
  mobileItemHeight = 76,
  mobileActiveHeight = 260,
  defaultActive = 0,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultActive);

  const handleActivate = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div
      className={`eip-wrapper ${className}`.trim()}
      style={
        {
          "--eip-height": `${height}px`,
          "--eip-mobile-h": `${mobileItemHeight}px`,
          "--eip-mobile-active-h": `${mobileActiveHeight}px`,
        } as React.CSSProperties
      }
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const num = String(index + 1).padStart(2, "0");

        return (
          <div
            key={index}
            className={`eip-item${isActive ? " eip-item--active" : ""}`}
            onMouseEnter={() => handleActivate(index)}
            onClick={() => handleActivate(index)}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleActivate(index);
              }
            }}
            aria-label={item.heading}
          >
            {/* Background image */}
            <img
              src={item.img}
              alt={item.heading}
              loading="lazy"
              decoding="async"
              draggable={false}
            />

            {/* Gradient overlay */}
            <div className="eip-item__overlay" aria-hidden="true" />

            {/* Left accent bar */}
            <div className="eip-item__bar" aria-hidden="true" />

            {/* Content */}
            <div className="eip-item__content">
              {/* Top row: number + optional tag */}
              <div className="eip-item__meta">
                <span className="eip-item__num">{num}</span>
                {item.tag && (
                  <span className="eip-item__tag">{item.tag}</span>
                )}
              </div>

              {/* Heading */}
              <h3 className="eip-item__heading">{item.heading}</h3>

              {/* Subheading */}
              {item.subheading && (
                <p className="eip-item__subheading">{item.subheading}</p>
              )}

              {/* Description */}
              <p className="eip-item__text">{item.text}</p>

              {/* CTA arrow */}
              <div className="eip-item__cta" aria-hidden="true">
                <span className="eip-item__cta-line" />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom progress indicator */}
            <div className="eip-item__progress" aria-hidden="true" />
          </div>
        );
      })}
    </div>
  );
};

export default ExpandableImagePanel;