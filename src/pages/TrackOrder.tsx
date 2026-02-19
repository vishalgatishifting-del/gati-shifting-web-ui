import React, { useState } from "react";
import "./TrackOrder.scss";

interface Order {
  trackingId: string;
  status: string;
  fromLocation: string;
  toLocation: string;
  currentLocation: string;
  createdAt: string;
}

const TrackOrder: React.FC = () => {

  const [trackingId, setTrackingId] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async () => {

    if (!trackingId) {
      setError("Please enter tracking ID");
      return;
    }

    try {

      setLoading(true);
      setError("");
      setOrder(null);

      const res = await fetch(
        `https://api.gatishiftingpackers.com/api/orders/track/${trackingId}`
      );

      if (!res.ok) {
        throw new Error("Tracking ID not found");
      }

      const data = await res.json();

      setOrder(data);

    } catch (err: any) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  };


  const getStepClass = (step: string) => {

    if (!order) return "";

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

      <div className="track-container">

        <h1>Track Your Order</h1>

        <div className="track-box">

          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) =>
              setTrackingId(e.target.value.toUpperCase())
            }
          />

          <button onClick={handleTrack}>
            {loading ? "Tracking..." : "Track Order"}
          </button>

        </div>

        {error && (
          <div className="error">{error}</div>
        )}

        {order && (

          <div className="order-result">

            <h2>Order Details</h2>

            <div className="details">

              <p>
                <strong>Tracking ID:</strong> {order.trackingId}
              </p>

              <p>
                <strong>Status:</strong>
                <span className="status">
                  {order.status}
                </span>
              </p>

              <p>
                <strong>From:</strong>
                {order.fromLocation}
              </p>

              <p>
                <strong>To:</strong>
                {order.toLocation}
              </p>

              <p>
                <strong>Current Location:</strong>
                {order.currentLocation}
              </p>

              <p>
                <strong>Date:</strong>
                {new Date(order.createdAt)
                  .toLocaleDateString()}
              </p>

            </div>


            {/* Timeline */}

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
