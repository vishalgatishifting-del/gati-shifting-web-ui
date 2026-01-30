// import { useState } from 'react'
import { useState, useEffect } from "react";
import './App.css'
import AppRoutes from './routes/AppRoute'
import CircularProgress from '@mui/material/CircularProgress';
import ChaportWidget from "./components/ChatPort.tsx";

function App() {
  useEffect(() => {
  document.getElementById("pre-hero")?.remove();
}, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hideLoader = () => setLoading(false);

    // Agar document already load ho chuka hai
    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
      return () => window.removeEventListener("load", hideLoader);
    }
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
        <AppRoutes></AppRoutes>
        <ChaportWidget />
    </>
  )
}

export default App
