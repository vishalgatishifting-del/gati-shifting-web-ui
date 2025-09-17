import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AppRoutes = () => {
    return (

        <section style={{ overflowX: "hidden" }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
            <Footer />
        </section>
    )

}

export default AppRoutes