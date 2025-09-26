import { useState } from "react";
import type { FC } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";

// --- MUI Icons ---
import HomeIcon from "@mui/icons-material/Home";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PetsIcon from "@mui/icons-material/Pets";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LuggageIcon from "@mui/icons-material/Luggage";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import InventoryIcon from "@mui/icons-material/Inventory";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";

import "./Services.scss"

type Service = {
  id: number;
  tt: string;
  title: string;
  description: string;
  Icon: typeof HomeIcon;
};

const services: Service[] = [
  { id: 1, tt: "House", title: "House Shifting", description: "Smooth and reliable house shifting with professional packing, loading, transport, and setup at your new home.", Icon: HomeIcon },
  { id: 2, tt: "AC", title: "AC Shifting", description: "Expert AC dismantling, secure packaging, and reinstallation at your destination by skilled technicians.", Icon: AcUnitIcon },
  { id: 3, tt: "Bike", title: "Bike Transport", description: "Bike relocation with protective wrapping, proper anchoring, and doorstep pickup and delivery.", Icon: TwoWheelerIcon },
  { id: 4, tt: "Car", title: "Car Transport", description: "Car shifting through open or enclosed carriers with tracking, insurance, and timely delivery.", Icon: DirectionsCarIcon },
  { id: 5, tt: "Pet", title: "Pet Relocation", description: "Stress-free pet transportation with temperature-controlled spaces and necessary travel documentation.", Icon: PetsIcon },
  { id: 6, tt: "Office", title: "Office Shifting", description: "Efficient office relocation ensuring minimal downtime, safe equipment handling, and IT setup support.", Icon: BusinessCenterIcon },
  { id: 7, tt: "Commercial", title: "Commercial Shifting", description: "End-to-end commercial shifting designed for factories, shops, and warehouses with heavy-duty transport.", Icon: ApartmentIcon },
  { id: 8, tt: "Luggage", title: "Luggage Transport", description: "Affordable and secure luggage transport with pickup, packaging, and on-time delivery options.", Icon: LuggageIcon },
  { id: 9, tt: "Domestic", title: "Domestic Moving", description: "Full-service domestic relocation with packing, loading, transport, and unpacking support across India.", Icon: LocationOnIcon },
  { id: 10, tt: "International", title: "International Moving", description: "International moving with customs documentation, freight handling, and global door-to-door service.", Icon: PublicIcon },
  { id: 11, tt: "Tempo", title: "Tempo for Shifting", description: "On-demand tempo services for short-distance or same-day local moves, perfect for quick shifting.", Icon: LocalShippingIcon },
  { id: 12, tt: "Warehouse", title: "Warehouse Services", description: "Safe and monitored warehouse services for short or long durations, with 24/7 security and organized storage.", Icon: WarehouseIcon },
  { id: 13, tt: "Storage", title: "Storage Facility", description: "Flexible personal or business storage options with clean, secure units and easy access.", Icon: InventoryIcon },
  { id: 14, tt: "Cold", title: "Cold Storage", description: "Temperature-controlled storage for sensitive items like electronics, pharmaceuticals, and perishables.", Icon: AcUnitOutlinedIcon },
];

const ServicesSection: FC = () => {
  const [active, setActive] = useState<Service>(services[0]);

  return (
    <section id="services-area">
      <Box sx={{ py: 12, px: 10 }}>
        <h1>Our Key Services</h1>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: 4,
            mt: 4,
          }}
        >
          {/* Left side icons */}
          <Box
            className="grid-container"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "20px",
              flex: { xs: "unset", md: 1 },
            }}
          >
            {services.map((service) => (
              <Paper
                key={service.id}
                onClick={() => setActive(service)}
                elevation={active.id === service.id ? 4 : 1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 100,
                  height: 100,
                  borderRadius: "50px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  bgcolor: active.id === service.id ? "#2563eb" : "background.paper",
                  color: active.id === service.id ? "#fff" : "text.primary",
                }}
              >
                <IconButton>
                  <service.Icon fontSize="large" />
                </IconButton>
                <Typography variant="caption">{service.tt}</Typography>
              </Paper>
            ))}
          </Box>

          {/* Right side info box */}
          <Box
            sx={{
              flex: { xs: "unset", md: 1 },
              minWidth: 250
            }}
          >
            <Paper sx={{ p: 3, minHeight: 200, borderRadius: "20px" }} elevation={4}>
              <Typography variant="h6" gutterBottom>
                {active.title}
              </Typography>
              <Typography>{active.description}</Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ServicesSection;
