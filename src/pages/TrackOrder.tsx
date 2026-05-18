import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./TrackOrder.scss";
import trackingImg from "../assets/TrackPage/trackingImg.png";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

interface Order {
  trackingId: string;
  status: string;
  fromLocation: string;
  toLocation: string;
  currentLocation: string;
  createdAt: string;
  expectedDelivery: string;
  note: string;
  pincode?: string;
}

const STEPS = [
  {
    key: "Order Placed",
    label: "Order Placed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    desc: "Your order has been received",
  },
  {
    key: "Packed",
    label: "Packed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    desc: "Items securely packed",
  },
  {
    key: "In Transit",
    label: "In Transit",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    desc: "On the way to destination",
  },
  {
    key: "Out for Delivery",
    label: "Out for Delivery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    desc: "With delivery agent",
  },
  {
    key: "Delivered",
    label: "Delivered",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    desc: "Successfully delivered",
  },
];

const TrackOrder: React.FC = () => {

  const { id } = useParams<{ id?: string }>();
  const [trackingId, setTrackingId] = useState<string>("");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [position, setPosition] = useState<[number, number]>([22.7196, 75.8577]);

  const handleTrack = async (customId?: string) => {
    const finalTrackingId = (customId || trackingId).trim().toUpperCase();
    if (!finalTrackingId) {
      setError("Please enter a tracking ID");
      return;
    }
    try {
      setLoading(true);
      setError("");
      setOrder(null);
      const res = await fetch(
        // `https://api.gatishiftingpackers.com/api/orders/track/${finalTrackingId}`
        `http://localhost:5000/api/orders/track/${finalTrackingId}`
      );
      if (!res.ok) throw new Error("Tracking ID not found. Please check and try again.");
      const data: Order = await res.json();
      console.log(data)
      setOrder(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      const upperId = id.toUpperCase();
      setTrackingId(upperId);
      handleTrack(upperId);
    }
  }, [id]);

  useEffect(() => {
    const getCoordinates = async () => {
      if (!order?.toLocation) return;
      try {
        const fullAddress = order.toLocation;
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            fullAddress
          )}&format=json&limit=1`
        );
        const data = await res.json();
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          setPosition([lat, lon]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCoordinates();
  }, [order]);

  const getStepStatus = (stepKey: string) => {
    if (!order) return "pending";
    const currentIndex = STEPS.findIndex((s) => s.key === order.status);
    const stepIndex = STEPS.findIndex((s) => s.key === stepKey);
    if (stepIndex < currentIndex) return "done";
    if (stepIndex === currentIndex) return "active";
    return "pending";
  };

  const currentStepIndex = order
    ? STEPS.findIndex((s) => s.key === order.status)
    : -1;

  const progressPercent =
    currentStepIndex >= 0 ? (currentStepIndex / (STEPS.length - 1)) * 100 : 0;

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const formatDateTime = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="tp-root">
      {/* Hero Section */}
      <section className="tp-hero">
        <div className="tp-hero__bg">
          <div className="tp-hero__blob tp-hero__blob--1" />
          <div className="tp-hero__blob tp-hero__blob--2" />
          <div className="tp-hero__grid" />
        </div>
        <div className="tp-hero__content">
          <div className="tp-hero__badge">
            <span className="tp-hero__badge-dot" />
            Live Tracking
          </div>
          <h1 className="tp-hero__title">
            Track Your <span className="tp-hero__title-accent">Shipment</span>
          </h1>
          <p className="tp-hero__sub">
            Real-time updates on your package's journey — from pickup to doorstep.
          </p>

          {/* Search */}
          <div className={`tp-search${focused ? " tp-search--focused" : ""}${loading ? " tp-search--loading" : ""}`}>
            <div className="tp-search__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              ref={inputRef}
              className="tp-search__input"
              type="text"
              placeholder="Enter Tracking ID  e.g. GTI1234"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
            />
            <button
              className="tp-search__btn"
              onClick={() => handleTrack()}
              disabled={loading}
            >
              {loading ? (
                <span className="tp-search__spinner" />
              ) : (
                <>
                  <span>Track</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="tp-error">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </div>
          )}

          {/* Stats Strip */}
          <div className="tp-stats">
            <div className="tp-stats__item">
              <span className="tp-stats__num">50K+</span>
              <span className="tp-stats__label">Deliveries</span>
            </div>
            <div className="tp-stats__divider" />
            <div className="tp-stats__item">
              <span className="tp-stats__num">98%</span>
              <span className="tp-stats__label">On-Time Rate</span>
            </div>
            <div className="tp-stats__divider" />
            <div className="tp-stats__item">
              <span className="tp-stats__num">Pan India</span>
              <span className="tp-stats__label">Coverage</span>
            </div>
          </div>
        </div>

        <div className="tp-hero__visual">
          <img src={trackingImg} alt="Tracking illustration" className="tp-hero__img" />
        </div>
      </section>

      {/* Result Section */}
      {order && (
        <section className="tp-result">
          {/* Top Status Card */}
          <div className="tp-status-card">
            <div className="tp-status-card__left">
              <div className="tp-status-card__id">
                <span className="tp-status-card__id-label">Tracking ID</span>
                <span className="tp-status-card__id-value">{order.trackingId}</span>
              </div>
              <div
                className={`tp-status-card__badge tp-status-card__badge--${(order.status || "")
                    .replace(/\s+/g, "-")
                    .toLowerCase()
                  }`}
              >
                <span className="tp-status-card__badge-pulse" />
                {order.status}
              </div>
            </div>
            <div className="tp-status-card__right">
              <div className="tp-status-card__eta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <span className="tp-status-card__eta-label">Expected Delivery</span>
                  <span className="tp-status-card__eta-date">{formatDate(order.expectedDelivery)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-grid">
            {/* Timeline */}
            <div className="tp-timeline-card">
              <h3 className="tp-card-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Shipment Progress
              </h3>
              <div className="tp-timeline">
                <div className="tp-timeline__track">
                  <div
                    className="tp-timeline__fill"
                    style={{ height: `${progressPercent}%` }}
                  />
                </div>
                <div className="tp-timeline__steps">
                  {STEPS.map((step, i) => {
                    const status = getStepStatus(step.key);
                    return (
                      <div
                        key={step.key}
                        className={`tp-timeline__step tp-timeline__step--${status}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="tp-timeline__dot">
                          <div className="tp-timeline__icon">{step.icon}</div>
                          {status === "active" && (
                            <span className="tp-timeline__pulse" />
                          )}
                        </div>
                        <div className="tp-timeline__info">
                          <span className="tp-timeline__label">{step.label}</span>
                          <span className="tp-timeline__desc">{step.desc}</span>
                        </div>
                        {status === "active" && (
                          <div className="tp-timeline__current-badge">Current</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="tp-details-col">
              {/* Journey Card */}
              <div className="tp-journey-card">
                <h3 className="tp-card-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Journey Route
                </h3>
                <div className="tp-journey">
                  <div className="tp-journey__point tp-journey__point--from">
                    <div className="tp-journey__dot tp-journey__dot--from" />
                    <div>
                      <span className="tp-journey__pt-label">Origin</span>
                      <span className="tp-journey__pt-city">{order.fromLocation}</span>
                    </div>
                  </div>
                  <div className="tp-journey__line">
                    <div className="tp-journey__truck">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="3" width="15" height="13" />
                        <path d="M16 8h4l3 5v3h-7V8z" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="tp-journey__point tp-journey__point--to">
                    <div className="tp-journey__dot tp-journey__dot--to" />
                    <div>
                      <span className="tp-journey__pt-label">Destination</span>
                      <span className="tp-journey__pt-city">{order.toLocation}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="tp-info-card">
                <h3 className="tp-card-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  Shipment Details
                </h3>
                <div className="tp-info-list">
                  <div className="tp-info-item">
                    <div className="tp-info-item__icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="tp-info-item__content">
                      <span className="tp-info-item__label">Current Location</span>
                      <span className="tp-info-item__value">{order.currentLocation}</span>
                    </div>
                  </div>
                  <div className="tp-info-item">
                    <div className="tp-info-item__icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div className="tp-info-item__content">
                      <span className="tp-info-item__label">Order Placed On</span>
                      <span className="tp-info-item__value">{formatDateTime(order.createdAt)}</span>
                    </div>
                  </div>
                  <div className="tp-info-item">
                    <div className="tp-info-item__icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="tp-info-item__content">
                      <span className="tp-info-item__label">Expected Delivery</span>
                      <span className="tp-info-item__value tp-info-item__value--accent">{formatDate(order.expectedDelivery)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note Card */}
              {order.note && order.note.trim() !== "" && (
                <div className="tp-note-card">
                  <div className="tp-note-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <span className="tp-note-card__label">Note from Handler</span>
                    <p className="tp-note-card__text">{order.note}</p>
                  </div>
                </div>
              )}

              {/* Map Card — details column ke andar */}
              {position && (
                <div className="tp-map-card">
                  <h3 className="tp-card-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Destination Map
                  </h3>
                  <MapContainer
                    key={`${position[0]}-${position[1]}`}
                    center={position}
                    zoom={13}
                    style={{
                      height: "260px",
                      width: "100%",
                      borderRadius: "12px",
                    }}
                  >
                    <TileLayer
                      attribution="&copy; OpenStreetMap contributors"
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                      <Popup>{order?.toLocation}</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              )}
            </div>
            {/* End Details Column */}
          </div>
        </section>
      )}
    </div>
  );
};

export default TrackOrder;