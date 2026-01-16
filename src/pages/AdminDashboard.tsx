import React, { useEffect, useState, useCallback } from "react";
import RequestRow from "../components/RequestRow";
import "./AdminDashboard.scss";
import axios from "axios";

export interface PartnershipRequest {
  id: string;
  name: string;
  phone: string;
  images: {
    aadhaar: string;
    gst: string;
    pan: string;
    shop: string;
    other: string;
  };
  status: "pending" | "approved" | "rejected";
}


const API_BASE = "https://api.gatishiftingpackers.com";

const AdminDashboard: React.FC = () => {
  const [requests, setRequests] = useState<PartnershipRequest[]>([]);
  const token = localStorage.getItem("adminToken");

  if (!token) {
    window.location.href = "/admin-login";
    return null;
  }

  // 🔹 FETCH DATA
  const fetchRequests = useCallback(async () => {
    try {
      const res = await axios.get(`${API_BASE}/admin-dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const formatted: PartnershipRequest[] = res.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        phone: item.phone,
        images: {
          aadhaar: API_BASE + (item.documents?.[0] || ""),
          gst: API_BASE + (item.documents?.[1] || ""),
          pan: API_BASE + (item.documents?.[2] || ""),
          shop: API_BASE + (item.documents?.[3] || ""),
          other: API_BASE + (item.documents?.[4] || ""),
        },
        status: item.status,
      }));

      setRequests(formatted);
    } catch (error) {
      console.error("Failed to fetch requests", error);
    }
  }, [token]);

  // 🔹 UPDATE STATUS
  const updateStatus = async (
    id: string,
    status: "approved" | "rejected"
  ) => {
    try {
      await axios.post(
        `${API_BASE}/update-status`,
        { id, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status } : req
        )
      );
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  return (
    <div className="admin-dashboard">
      <h1>Business Partnership Requests</h1>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Documents</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <RequestRow
                key={req.id}
                data={req}
                onAction={updateStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
