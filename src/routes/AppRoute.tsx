import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AppRoutes = () => {
    return (

        <section style={{ overflowX: "hidden" }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
            <Footer />
        </section>
    )

}

export default AppRoutes