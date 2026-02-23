import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TrackOrder.scss";
import trackingImg from "../assets/TrackPage/trackingImg.png";

interface Order {
  trackingId: string;
  status: string;
  fromLocation: string;
  toLocation: string;
  currentLocation: string;
  createdAt: string;
  expectedDelivery: string; // better as string (comes from API)
  note: string;
}

const TrackOrder: React.FC = () => {

  const { id } = useParams<{ id?: string }>();

  const [trackingId, setTrackingId] = useState<string>("");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // 🔥 Track Function
  const handleTrack = async (customId?: string) => {

    const finalTrackingId = (customId || trackingId).trim().toUpperCase();

    if (!finalTrackingId) {
      setError("Please enter tracking ID");
      return;
    }

    try {

      setLoading(true);
      setError("");
      setOrder(null);

      const res = await fetch(
        `https://api.gatishiftingpackers.com/api/orders/track/${finalTrackingId}`
      );

      if (!res.ok) {
        throw new Error("Tracking ID not found");
      }

      const data: Order = await res.json();

      setOrder(data);

    } catch (err: any) {

      setError(err.message || "Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  // 🔥 Auto Track if URL contains ID
  useEffect(() => {
    if (id) {
      const upperId = id.toUpperCase();
      setTrackingId(upperId);
      handleTrack(upperId);
    }
  }, [id]);

  // 🔥 Timeline Step Logic
  const getStepClass = (step: string) => {

    if (!order) return "step";

    const steps = [
      "Order Placed",
      "Packed",
      "In Transit",
      "Out for Delivery",
      "Delivered"
    ];

    const currentIndex = steps.indexOf(order.status);
    const stepIndex = steps.indexOf(step);

    return stepIndex <= currentIndex ? "step active" : "step";
  };

  return (

    <div className="track-page">

      <img className="track-img" src={trackingImg} alt="Tracking" />

      <div className="track-container">

        {/* 🔹 Search Box */}
        <div className="track-box">

          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) =>
              setTrackingId(e.target.value.toUpperCase())
            }
          />

          <button onClick={() => handleTrack()}>
            {loading ? "Tracking..." : "Track Order"}
          </button>

        </div>

        {/* 🔹 Error */}
        {error && (
          <div className="error">{error}</div>
        )}

        {/* 🔹 Order Result */}
        {order && (

          <div className="order-result">

            <h2>Order Details</h2>

            <div className="details">

              <p>
                <strong>Tracking ID:</strong> {order.trackingId}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className="status">
                  {order.status}
                </span>
              </p>

              <p>
                <strong>From:</strong> {order.fromLocation}
              </p>

              <p>
                <strong>To:</strong> {order.toLocation}
              </p>

              <p>
                <strong>Current Location:</strong> {order.currentLocation}
              </p>

              <p>
                <strong>Expected Delivery:</strong>{" "}
                {new Date(order.expectedDelivery).toLocaleDateString()}
              </p>

              {order.note && order.note.trim() !== "" && (
                <p>
                  <strong>*Note:</strong> {order.note}
                </p>
              )}

            </div>

            {/* 🔹 Timeline */}
            <div className="timeline">

              <div className={getStepClass("Order Placed")}>
                Order Placed
              </div>

              <div className={getStepClass("Packed")}>
                Packed
              </div>

              <div className={getStepClass("In Transit")}>
                In Transit
              </div>

              <div className={getStepClass("Out for Delivery")}>
                Out for Delivery
              </div>

              <div className={getStepClass("Delivered")}>
                Delivered
              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  );

};

export default TrackOrder;