import React, { useEffect, useState } from "react";
import "./AdminDashboard.scss";
import AdminOrdersList from "./AdminOrdersList"
import logo from "../../assets/logo/android-chrome-192x192-v2.png";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip as RechartsTooltip,
    CartesianGrid
} from "recharts";

import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import privateAPI from "../../api/privateAxios";

import Tooltip from "@mui/material/Tooltip";

import LeadsList from "./LeadsList"

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

// const graphData = [
//     { day: "Mon", leads: 12 },
//     { day: "Tue", leads: 18 },
//     { day: "Wed", leads: 9 },
//     { day: "Thu", leads: 15 },
//     { day: "Fri", leads: 22 },
//     { day: "Sat", leads: 17 },
//     { day: "Sun", leads: 11 }
// ];

const AdminDashboard: React.FC = () => {
    const [activePage, setActivePage] = useState("dashboard");
    const [totalOrders, setTotalOrders] = useState("0");
    const [totalLeads, setTotalLeads] = useState("0");
    const [leadsProgress, setLeadsProgress] = useState(0);
    const [todayOrders, setTodayOrders] = useState("0");
    const [todayLeads, setTodayLeads] = useState("0");

    const [graphData, setGraphData] = useState<
        { day: string; leads: number }[]
    >([]);

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


    const countOrders = async () => {
        try {

            const totalOrders = await privateAPI.get("/api/orders/countOrders");
            setTotalOrders(totalOrders.data.totalOrders)

        }
        catch (error) {

            console.error("Logout failed");

        }
    }


    const countLeads = async () => {
        try {

            const totalOrders = await privateAPI.get("/api/leads/countLeads");
            // setTotalOrders(totalOrders.data.totalOrders)
            setTotalLeads(totalOrders.data)
            setLeadsProgress((Number(totalOrders.data) / 1000) * 100)
            console.log(leadsProgress)
        }
        catch (error) {

            console.error("Logout failed");

        }
    }


    const countTodayOrders = async () => {
        try {

            const totalOrders = await privateAPI.get("/api/orders/today-count");
            // setTotalOrders(totalOrders.data.totalOrders)

            setTodayOrders(totalOrders.data.todayOrders)
        }
        catch (error) {

            console.error("Logout failed");

        }
    }

    const countTodayLeads = async () => {
        try {

            const totalLeads = await privateAPI.get("/api/leads/today-count");
            // setTotalOrders(totalOrders.data.totalOrders)

            setTodayLeads(totalLeads.data.todayOrders)
        }
        catch (error) {

            console.error("Logout failed");

        }
    }

    useEffect(() => {
        countOrders()
        countLeads()
        countTodayOrders()
        countTodayLeads()
    }, [])

    useEffect(() => {
        const fetchGraph = async () => {
            const res = await privateAPI.get("/api/leads/last-7-days");

            const formattedData = res.data.map((item: any) => {
                const date = new Date(item._id);
                const day = date.toLocaleDateString("en-US", { weekday: "short" });

                return {
                    day,
                    leads: item.leads
                };
            });
            console.log(res)

            setGraphData(formattedData);
        };

        fetchGraph();
    }, []);

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
                        className={`menu-item ${activePage === "leads" ? "active" : ""}`}
                        onClick={() => setActivePage("leads")}
                    >
                        📃
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
                        <Tooltip title="Logout">
                            <button className="logout-btn" onClick={handleLogout}>
                                <LogoutIcon />
                            </button>
                        </Tooltip>

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

                                    <RechartsTooltip />

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

                                <h2>Your today's activities</h2>

                                <div className="activity-cards">

                                    <div className="activity-card blue">

                                        <h3>Orders Created</h3>
                                        <p>{todayOrders} Orders</p>

                                    </div>


                                    <div className="activity-card pink">

                                        <h3>New Leads</h3>
                                        <p>{todayLeads} Leads</p>

                                    </div>

                                </div>


                                {/* STATS */}

                                <div className="stats">

                                    <div className="stat-card">

                                        <h4>Total Orders</h4>
                                        <p>{totalOrders}</p>

                                    </div>

                                    <div className="stat-card yellow">

                                        <h4>Total Leads</h4>
                                        <p>{totalLeads}</p>

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

                                        <div className="progress-bar" style={{ width: leadsProgress }} />

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
                {activePage === "leads" && (
                    <LeadsList />
                )}

            </div>

        </div>

    );

};

export default AdminDashboard
