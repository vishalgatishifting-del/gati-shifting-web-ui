import { useEffect } from "react";
import './App.css'
import AppRoutes from './routes/AppRoute'

function App() {

  useEffect(() => {
    const preHero = document.getElementById("pre-hero");
    if (preHero) {
      preHero.remove();
    }
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App;