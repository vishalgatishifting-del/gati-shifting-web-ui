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

import AV_icon_png from "../assets/servicesPageImg/ac.png"
import House_icon_png from "../assets/servicesPageImg/household.png"
import Bike_icon_png from "../assets/servicesPageImg/bike.png"
import Car_icon_png from "../assets/servicesPageImg/car.png"
import Pet_icon_png from "../assets/servicesPageImg/pets.png"
import Office_icon_png from "../assets/servicesPageImg/office.png"
import Commercial_icon_png from "../assets/servicesPageImg/commercial.png"
import Luggage_icon_png from "../assets/servicesPageImg/luggage.png"
import Domestic_icon_png from "../assets/servicesPageImg/domestic.png"
import International_icon_png from "../assets/servicesPageImg/international.png"
import Temp_icon_png from "../assets/servicesPageImg/tempo.png"
import Warehouse_icon_png from "../assets/servicesPageImg/warehouse.png"
import Storage_icon_png from "../assets/servicesPageImg/storage.png"
import Cold_icon_png from "../assets/servicesPageImg/cold.png"

import "./Services.scss"

type Service = {
  id: number;
  tt: string;
  title: string;
  description: string;
  Icon: typeof HomeIcon;
  Img?: string;
};

const services: Service[] = [
  { id: 1, tt: "House", title: "House Shifting", description: "Smooth and reliable house shifting with professional packing, loading, transport, and setup at your new home.", Icon: HomeIcon, Img: House_icon_png },
  { id: 2, tt: "AC", title: "AC Shifting", description: "Expert AC dismantling, secure packaging, and reinstallation at your destination by skilled technicians.", Icon: AcUnitIcon, Img: AV_icon_png },
  { id: 3, tt: "Bike", title: "Bike Transport", description: "Bike relocation with protective wrapping, proper anchoring, and doorstep pickup and delivery.", Icon: TwoWheelerIcon, Img: Bike_icon_png },
  { id: 4, tt: "Car", title: "Car Transport", description: "Car shifting through open or enclosed carriers with tracking, insurance, and timely delivery.", Icon: DirectionsCarIcon, Img: Car_icon_png },
  { id: 5, tt: "Pet", title: "Pet Relocation", description: "Stress-free pet transportation with temperature-controlled spaces and necessary travel documentation.", Icon: PetsIcon, Img: Pet_icon_png },
  { id: 6, tt: "Office", title: "Office Shifting", description: "Efficient office relocation ensuring minimal downtime, safe equipment handling, and IT setup support.", Icon: BusinessCenterIcon, Img: Office_icon_png },
  { id: 7, tt: "Commercial", title: "Commercial Shifting", description: "End-to-end commercial shifting designed for factories, shops, and warehouses with heavy-duty transport.", Icon: ApartmentIcon, Img: Commercial_icon_png },
  { id: 8, tt: "Luggage", title: "Luggage Transport", description: "Affordable and secure luggage transport with pickup, packaging, and on-time delivery options.", Icon: LuggageIcon, Img: Luggage_icon_png },
  { id: 9, tt: "Domestic", title: "Domestic Moving", description: "Full-service domestic relocation with packing, loading, transport, and unpacking support across India.", Icon: LocationOnIcon, Img: Domestic_icon_png },
  { id: 10, tt: "International", title: "International Moving", description: "International moving with customs documentation, freight handling, and global door-to-door service.", Icon: PublicIcon, Img: International_icon_png },
  { id: 11, tt: "Tempo", title: "Tempo for Shifting", description: "On-demand tempo services for short-distance or same-day local moves, perfect for quick shifting.", Icon: LocalShippingIcon, Img: Temp_icon_png },
  { id: 12, tt: "Warehouse", title: "Warehouse Services", description: "Safe and monitored warehouse services for short or long durations, with 24/7 security and organized storage.", Icon: WarehouseIcon, Img: Warehouse_icon_png },
  { id: 13, tt: "Storage", title: "Storage Facility", description: "Flexible personal or business storage options with clean, secure units and easy access.", Icon: InventoryIcon, Img: Storage_icon_png },
  { id: 14, tt: "Cold", title: "Cold Storage", description: "Temperature-controlled storage for sensitive items like electronics, pharmaceuticals, and perishables.", Icon: AcUnitOutlinedIcon, Img: Cold_icon_png },
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
                  {/* <service.Icon fontSize="large" /> */}
                  <img className="icon" src={service.Img} />
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
