import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Review from "../pages/Review"
import FAQ from "../pages/FAQ"
import Services from "../pages/Services"
import Contact from "../pages/Contact"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
    return (

        <section style={{ overflowX: "hidden" }}>
            <Navbar />
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/review" element={<Review></Review>}></Route>
                    <Route path="/faqs" element={<FAQ></FAQ>}></Route>
                    <Route path="/services" element={<Services></Services>}></Route>
                    <Route path="/contact-us" element={<Contact></Contact>}></Route>
                </Routes>
            </ScrollToTop>
            <Footer />
        </section>
    )

}

export default AppRoutes