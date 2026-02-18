import React, { useState } from "react";
import "./AdminOrders.scss";

const AdminCreateOrder: React.FC = () => {

    const token = localStorage.getItem("adminToken");

    if (!token) {
        window.location.href = "/admin-login";
        return null;
    }

    const [form, setForm] = useState({

        customerName: "",
        phone: "",
        fromLocation: "",
        toLocation: ""

    });

    const [trackingId, setTrackingId] = useState("");

    const API =
        "https://api.gatishiftingpackers.com/api/orders/create";


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    };


    const createOrder = async () => {

        const res = await fetch(API, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(form)

        });

        const data = await res.json();

        setTrackingId(data.trackingId);

    };


    return (

        <div className="admin-page">

            <div className="admin-box">

                <h1>Create Order</h1>

                <input
                    name="customerName"
                    placeholder="Customer Name"
                    onChange={handleChange}
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                />

                <input
                    name="fromLocation"
                    placeholder="From"
                    onChange={handleChange}
                />

                <input
                    name="toLocation"
                    placeholder="To"
                    onChange={handleChange}
                />

                <button onClick={createOrder}>
                    Create Order
                </button>

                {trackingId && (

                    <div className="message">

                        Tracking ID generated:

                        <strong>
                            {trackingId}
                        </strong>

                    </div>

                )}

            </div>

        </div>

    );

};

export default AdminCreateOrder;
