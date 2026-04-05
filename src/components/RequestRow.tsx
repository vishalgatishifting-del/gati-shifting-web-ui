import React from "react";
import type { PartnershipRequest } from "../pages/admin/PartnersManagement";

interface Props {
  data: PartnershipRequest;
  onAction: (id: string, status: "approved" | "rejected") => void;
}

const RequestRow: React.FC<Props> = ({ data, onAction }) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.phone}</td>

      <td className="images">
        <img src={data.images.aadhaar} alt="Aadhaar" loading="lazy"  />
        <img src={data.images.gst} alt="GST" loading="lazy"  />
        <img src={data.images.pan} alt="PAN" loading="lazy"  />
        <img src={data.images.shop} alt="Shop" loading="lazy"  />
        <img src={data.images.other} alt="Other" loading="lazy"  />
      </td>

      <td>
        <span className={`status ${data.status}`}>
          {data.status}
        </span>
      </td>

      <td>
        {data.status === "pending" && (
          <div className="actions">
            <button
              className="approve"
              onClick={() => onAction(data.id, "approved")}
            >
              Approve
            </button>
            <button
              className="reject"
              onClick={() => onAction(data.id, "rejected")}
            >
              Cancel
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default RequestRow;
