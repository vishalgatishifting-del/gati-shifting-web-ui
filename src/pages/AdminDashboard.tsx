import React, { useState } from "react";
import RequestRow from "../components/RequestRow";
import "./AdminDashboard.scss";

export interface PartnershipRequest {
  id: number;
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

const AdminDashboard: React.FC = () => {
  const [requests, setRequests] = useState<PartnershipRequest[]>([
    {
      id: 1,
      name: "Rahul Traders",
      phone: "9354122998",
      images: {
        aadhaar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0i0kczJVMxJfYaiw7IC__9TYFVIbwhCKM2w&s",
        gst: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBdR5SBH_G0WENS_S16LQ3nwccr4uPKt6Mg&s",
        pan: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBdR5SBH_G0WENS_S16LQ3nwccr4uPKt6Mg&s",
        shop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnDwB2rR7DTLCUSAMx_FmmrPXuzkkIh8TjcnpP_RzkUwCH3U4r2Xf-RZZ2EHieQgGV0Y&usqp=CAU",
        other: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJcmUBu58Rvk9-MEGY1H1Jscyqsi4NtbrqTxChrOHFZqCI_whW_7F2rOsC2G-yKSNBug&usqp=CAU",
      },
      status: "pending",
    },
    {
      id: 2,
      name: "Rohan Traders",
      phone: "9354122998",
      images: {
        aadhaar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0i0kczJVMxJfYaiw7IC__9TYFVIbwhCKM2w&s",
        gst: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBdR5SBH_G0WENS_S16LQ3nwccr4uPKt6Mg&s",
        pan: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBdR5SBH_G0WENS_S16LQ3nwccr4uPKt6Mg&s",
        shop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnDwB2rR7DTLCUSAMx_FmmrPXuzkkIh8TjcnpP_RzkUwCH3U4r2Xf-RZZ2EHieQgGV0Y&usqp=CAU",
        other: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJcmUBu58Rvk9-MEGY1H1Jscyqsi4NtbrqTxChrOHFZqCI_whW_7F2rOsC2G-yKSNBug&usqp=CAU",
      },
      status: "pending",
    },
  ]);

  const updateStatus = (id: number, status: "approved" | "rejected") => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status } : req
      )
    );
  };

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
