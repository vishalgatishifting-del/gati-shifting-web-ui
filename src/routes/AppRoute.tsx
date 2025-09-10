import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"

const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </>
    )

}

export default AppRoutes