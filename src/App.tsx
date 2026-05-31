import { useEffect } from "react";
import './App.css'
import AppRoutes from './routes/AppRoute'

function App() {

  useEffect(() => {
    const preHero = document.getElementById("pre-hero");
    if (preHero) {
      document.getElementById("pre-hero")?.classList.add("hidden");
    }
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App;