import React, { useState } from "react";
import "./AdminDashboard.scss";
import AdminOrdersList from "./AdminOrdersList"
import logo from "../../assets/logo/android-chrome-192x192-v2.png";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import privateAPI from "../../api/privateAxios";

const leadData: Record<number, number> = {
    9: 5,
    12: 8,
    16: 15,
    17: 18,
    28: 4,
    29: 7,
    30: 10,
    31: 6
};

const getIntensity = (count: number) => {

    if (count > 15) return "very-high";
    if (count > 10) return "high";
    if (count > 5) return "medium";
    if (count > 0) return "low";

    return "";

};

const graphData = [
    { day: "Mon", leads: 12 },
    { day: "Tue", leads: 18 },
    { day: "Wed", leads: 9 },
    { day: "Thu", leads: 15 },
    { day: "Fri", leads: 22 },
    { day: "Sat", leads: 17 },
    { day: "Sun", leads: 11 }
];

const AdminDashboard: React.FC = () => {
    const [activePage, setActivePage] = useState("dashboard");

    const days = Array.from({ length: 31 }, (_, i) => i + 1);



    const navigate = useNavigate();

    const handleLogout = async () => {

        try {

            await privateAPI.post("/api/auth/logout");

            navigate("/admin-login");

        }
        catch (error) {

            console.error("Logout failed");

        }

    };

    return (

        <div className="dashboard-layout">

            {/* SIDEBAR */}

            <div className="sidebar">

                <div className="logo-box">
                    <img src={logo} width={40} />
                </div>

                <div className="menu">

                    <div
                        className={`menu-item ${activePage === "dashboard" ? "active" : ""}`}
                        onClick={() => setActivePage("dashboard")}
                    >
                        🏠
                    </div>

                    <div
                        className={`menu-item ${activePage === "orders" ? "active" : ""}`}
                        onClick={() => setActivePage("orders")}
                    >
                        📦
                    </div>

                    <div
                        className={`menu-item ${activePage === "partners" ? "active" : ""}`}
                        onClick={() => setActivePage("partners")}
                    >
                        👥
                    </div>

                    <div
                        className={`menu-item ${activePage === "reports" ? "active" : ""}`}
                        onClick={() => setActivePage("reports")}
                    >
                        📊
                    </div>

                </div>


            </div>


            {/* MAIN */}

            <div className="main">

                {/* HEADER */}

                <div className="header">

                    <h1>
                        Welcome back, Gati
                    </h1>

                    <div className="header-right">

                        <button className="logout-btn" onClick={handleLogout}>
                            <LogoutIcon />
                        </button>

                    </div>

                </div>
                {/* GRAPH */}

                {activePage === "dashboard" && (
                    <>
                        <div className="graph-card">

                            <div className="graph-header">

                                <h3>Daily Leads</h3>

                                <span className="badge">
                                    This Week
                                </span>

                            </div>

                            <ResponsiveContainer width="100%" height={250}>

                                <AreaChart data={graphData}>

                                    <defs>

                                        <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">

                                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />

                                        </linearGradient>

                                    </defs>

                                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />

                                    <XAxis dataKey="day" />

                                    <YAxis />

                                    <Tooltip />

                                    <Area
                                        type="monotone"
                                        dataKey="leads"
                                        stroke="#2563eb"
                                        fillOpacity={1}
                                        fill="url(#colorLeads)"
                                        strokeWidth={3}
                                    />

                                </AreaChart>

                            </ResponsiveContainer>

                        </div>



                        <div className="content">

                            {/* LEFT */}

                            <div className="left">

                                <h2>Your activities today</h2>

                                <div className="activity-cards">

                                    <div className="activity-card blue">

                                        <h3>Orders Created</h3>
                                        <p>12 Orders</p>

                                    </div>


                                    <div className="activity-card pink">

                                        <h3>New Leads</h3>
                                        <p>8 Leads</p>

                                    </div>

                                </div>


                                {/* STATS */}

                                <div className="stats">

                                    <div className="stat-card">

                                        <h4>Total Orders</h4>
                                        <p>128</p>

                                    </div>

                                    <div className="stat-card yellow">

                                        <h4>Total Leads</h4>
                                        <p>312</p>

                                    </div>

                                    <div className="stat-card purple">

                                        <h4>Active Partners</h4>
                                        <p>11</p>

                                    </div>

                                </div>


                                {/* PROGRESS */}

                                <div className="big-card">

                                    <h3>Order Completion</h3>

                                    <div className="progress">

                                        <div className="progress-bar" />

                                    </div>

                                </div>

                            </div>


                            {/* RIGHT */}

                            <div className="right">

                                <h2>Lead Calendar</h2>

                                <div className="calendar">

                                    {days.map(day => {

                                        const leads =
                                            leadData[day] || 0;

                                        return (

                                            <div
                                                key={day}
                                                className={`day ${getIntensity(leads)}`}
                                            >

                                                {day}

                                            </div>

                                        );

                                    })}

                                </div>

                            </div>

                        </div>
                    </>
                )}

                {activePage === "orders" && (
                    <AdminOrdersList />
                )}

            </div>

        </div>

    );

};

export default AdminDashboard
