import React, { useEffect, useState, useCallback } from "react";
import RequestRow from "../../components/RequestRow";
import "./PartnersManagement.scss";
import privateAPI from "../../api/privateAxios";

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

const PartnersManagement: React.FC = () => {

  const [requests, setRequests] =
    useState<PartnershipRequest[]>([]);

  const fetchRequests = useCallback(async () => {
    try {
      const res = await privateAPI.get("/api/partners/fetch");

      const formatted: PartnershipRequest[] =
        res.data.map((item: any) => ({
          id: item._id,   
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
      console.error("Fetch failed", error);
    }
  }, []);

  const updateStatus = async (
    id: string,
    status: "approved" | "rejected"
  ) => {
    try {

      await privateAPI.post(
        "/api/partners/update-status",
        { id, status }
      );

      // instant UI update
      setRequests(prev =>
        prev.map(req =>
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
    <div className="partners-management">
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

export default PartnersManagement;