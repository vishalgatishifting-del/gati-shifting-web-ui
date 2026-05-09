import { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import privateAPI from "../../api/privateAxios";
import "./LeadList.scss";

interface Lead {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  status: "new" | "car_followup" | "bike_followup" | "closed";
  goods?: string;
  fromLocation?: string;
  toLocation?: string;
  leadSource?: string;
  createdAt: string;
}

type FilterType = "all" | "today" | "week" | "new" | "car" | "bike" | "closed";

const STATUS_OPTIONS = [
  { value: "luggage_followup", label: "Luggage Folloe-up" },
  { value: "loose_items_followup", label: "Loose Items Folloe-up" },
  { value: "household_followup", label: "Household Folloe-up" },
  { value: "household_followup", label: "Household Folloe-up" },
  { value: "bike_followup", label: "Bike Follow-up" },
  { value: "scooty_followup", label: "Scooty Follow-up" },
  { value: "car_followup", label: "Car Follow-up" },
  { value: "office_followup", label: "Office Follow-up" },
  { value: "not_connected", label: "Not Connected" },
  { value: "not_interested", label: "Not interested" },
  { value: "not_connected_in_long_time", label: "Not Connected In Long Time" },
  { value: "switched_off", label: "Switched Off" },
  { value: "customer_check_price", label: "Customer Check Price" },
  { value: "price_issue", label: "Price Issue" },
  { value: "confirmed_lead", label: "Confirmed Lead" },
  { value: "vendor", label: "Vendor" },
  { value: "business_related", label: "Business Related" },
  { value: "visit_lead", label: "Visit Lead" },
  { value: "storage_followup", label: "Storage Follow Up" },
  { value: "toy_transport", label: "Toy Transport" },
  { value: "commercial_vehicle_requirement", label: "Commercial Vehicle Requirement" },
  { value: "commercial_goods", label: "Commercial Goods" },
  { value: "local_shifting", label: "Local Shifting" },
  { value: "duplicate", label: "Duplicate" },
  { value: "others", label: "Others" },
  { value: "international_shifting", label: "International Shifting" },
  { value: "cycle_followup", label: "Cycle Follow-up" },
  { value: "wrong_number", label: "Wrong Number" },
  { value: "pet_transport", label: "Pet Transport" },
  { value: "new", label: "New" },
  { value: "closed", label: "Closed" },
];

const LeadsList = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await privateAPI.get("/api/leads/fetch");
      setLeads(res.data);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await privateAPI.put(`/api/leads/status/${id}`, { status });
      setLeads((prev) =>
        prev.map((lead) => (lead._id === id ? { ...lead, status: status as Lead["status"] } : lead))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this lead?")) return;
    try {
      await privateAPI.delete(`/api/leads/${id}`);
      setLeads((prev) => prev.filter((l) => l._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Stats
  const stats = {
    total: leads.length,
    today: leads.filter(
      (l) => new Date(l.createdAt).toDateString() === new Date().toDateString()
    ).length,
    newLeads: leads.filter((l) => l.status === "new").length,
    closed: leads.filter((l) => l.status === "closed").length,
  };

  // Filter + Search
  const filteredLeads = leads.filter((lead) => {
    const d = new Date(lead.createdAt);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weekAgo = new Date(today.getTime() - 6 * 86400000);

    if (activeFilter === "today" && d < today) return false;
    if (activeFilter === "week" && d < weekAgo) return false;
    if (activeFilter === "new" && lead.status !== "new") return false;
    if (activeFilter === "car" && lead.status !== "car_followup") return false;
    if (activeFilter === "bike" && lead.status !== "bike_followup") return false;
    if (activeFilter === "closed" && lead.status !== "closed") return false;
    if (dateFrom && new Date(lead.createdAt) < new Date(dateFrom)) return false;
    if (dateTo && new Date(lead.createdAt) > new Date(dateTo + "T23:59:59")) return false;

    const q = search.toLowerCase();
    if (q && !lead.name.toLowerCase().includes(q) && !lead.phone.includes(q)) return false;

    return true;
  });

  const FILTERS: { key: FilterType; label: string }[] = [
    { key: "all", label: "All leads" },
    { key: "today", label: "Today" },
    { key: "week", label: "This week" },
    { key: "new", label: "New" },
    { key: "car", label: "Car follow-up" },
    { key: "bike", label: "Bike follow-up" },
    { key: "closed", label: "Closed" },
  ];

  return (
    <div className="leads-page">
      {/* STATS */}
      <div className="leads-stats">
        <div className="stat-card">
          <span className="stat-label">Total leads</span>
          <span className="stat-value blue">{stats.total}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Today</span>
          <span className="stat-value">{stats.today}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">New</span>
          <span className="stat-value green">{stats.newLeads}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Closed</span>
          <span className="stat-value amber">{stats.closed}</span>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}

        <div className="filter-sep" />

        <input
          type="date"
          className="filter-input"
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <input
          type="date"
          className="filter-input"
          onChange={(e) => setDateTo(e.target.value)}
        />

        <div className="search-wrap">
          <input
            type="text"
            className="filter-input search-input"
            placeholder="Search name / phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="leads-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Source</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={6} className="empty-row">
                  No leads found
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr key={lead._id}>
                  <td className="name-cell" title={lead.name}>
                    {lead.name}
                  </td>
                  <td className="phone-cell">{lead.email}</td>
                  <td>
                    <select
                      className={`status-select status-${lead.status}`}
                      value={lead.status}
                      onChange={(e) => updateStatus(lead._id, e.target.value)}
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{lead.leadSource || "—"}</td>
                  <td className="date-cell">
                    {new Date(lead.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td>
                    <div className="actions">
                      <a
                        href={`https://wa.me/${lead.phone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="act-btn act-wa"
                        title="WhatsApp"
                      >
                        <WhatsAppIcon sx={{ fontSize: 16 }} />
                      </a>
                      <button
                        className="act-btn act-edit"
                        title="View / Edit"
                        onClick={() => setSelectedLead(lead)}
                      >
                        <EditIcon sx={{ fontSize: 15 }} />
                      </button>
                      <button
                        className="act-btn act-delete"
                        title="Delete"
                        onClick={() => handleDelete(lead._id)}
                      >
                        <DeleteIcon sx={{ fontSize: 15 }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {selectedLead && (
        <div className="modal-overlay" onClick={() => setSelectedLead(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Lead details</h3>
              <button className="modal-close" onClick={() => setSelectedLead(null)}>
                <CloseIcon sx={{ fontSize: 18 }} />
              </button>
            </div>
            <div className="modal-body">
              {[
                { label: "Name", value: selectedLead.name },
                { label: "Phone", value: selectedLead.phone },
                { label: "Email", value: selectedLead.email },
                { label: "Goods", value: selectedLead.goods },
                { label: "From", value: selectedLead.fromLocation },
                { label: "To", value: selectedLead.toLocation },
                { label: "Source", value: selectedLead.leadSource },
                {
                  label: "Status",
                  value: STATUS_OPTIONS.find((o) => o.value === selectedLead.status)?.label,
                },
              ].map((row) => (
                <div className="modal-row" key={row.label}>
                  <span className="modal-key">{row.label}</span>
                  <span className="modal-val">{row.value || "—"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsList;
