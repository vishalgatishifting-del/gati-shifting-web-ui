import React, { useState } from "react";
import "./AdminOrders.scss";

interface Order {
    trackingId: string;
    customerName: string;
    phone: string;
    fromLocation: string;
    toLocation: string;
    currentLocation: string;
    status: string;
}

const AdminOrders: React.FC = () => {

    const token = localStorage.getItem("adminToken");

    if (!token) {
        window.location.href = "/admin-login";
        return null;
    }

    const [trackingId, setTrackingId] = useState("");
    const [order, setOrder] = useState<Order | null>(null);

    const [status, setStatus] = useState("");
    const [location, setLocation] = useState("");

    const [message, setMessage] = useState("");

    const API = "https://api.gatishiftingpackers.com/api/orders";


    // Search order
    const searchOrder = async () => {

        try {

            const res = await fetch(`${API}/track/${trackingId}`);

            if (!res.ok)
                throw new Error("Order not found");

            const data = await res.json();
            setOrder(data);
            setStatus(data.status);
            setLocation(data.currentLocation);
            setMessage("");

        }
        catch (err: any) {

            setMessage(err.message);
            setOrder(null);

        }

    };


    // Update order
    const updateOrder = async () => {

        try {

            const res = await fetch(
                `${API}/update/${trackingId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        status,
                        currentLocation: location
                    })
                }
            );

            if (!res.ok)
                throw new Error("Update failed");

            setMessage("Order updated successfully");

        }
        catch {

            setMessage("Error updating order");

        }

    };


    return (

        <div className="admin-page">

            <div className="admin-box">

                <h1>Admin Order Management</h1>

                {/* Search */}

                <div className="search">

                    <input
                        placeholder="Enter Tracking ID"
                        value={trackingId}
                        onChange={(e) =>
                            setTrackingId(e.target.value.toUpperCase())
                        }
                    />

                    <button onClick={searchOrder}>
                        Search
                    </button>

                </div>


                {order && (

                    <div className="order-form">

                        <p>
                            <strong>Customer:</strong>
                            {order.customerName}
                        </p>
                        <p>
                            <strong>Phone:</strong>
                            {order.phone}
                        </p>

                        <p>
                            <strong>From:</strong>
                            {order.fromLocation}
                        </p>

                        <p>
                            <strong>To:</strong>
                            {order.toLocation}
                        </p>


                        {/* Status */}

                        <label>Status</label>

                        <select
                            value={status}
                            onChange={(e) =>
                                setStatus(e.target.value)
                            }
                        >

                            <option>Order Placed</option>
                            <option>Packed</option>
                            <option>In Transit</option>
                            <option>Out for Delivery</option>
                            <option>Delivered</option>

                        </select>


                        {/* Location */}

                        <label>Current Location</label>

                        <input
                            value={location}
                            onChange={(e) =>
                                setLocation(e.target.value)
                            }
                        />


                        <button
                            className="update-btn"
                            onClick={updateOrder}
                        >
                            Update Order
                        </button>

                    </div>

                )}

                {message && (
                    <div className="message">
                        {message}
                    </div>
                )}

            </div>

        </div>

    );

};

export default AdminOrders;
