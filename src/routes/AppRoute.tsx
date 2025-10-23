import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Review from "../pages/Review"
import FAQ from "../pages/FAQ"
import Services from "../pages/Services"
import Contact from "../pages/Contact"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Who_we_are from "../pages/Who_we_are"
import ScrollToTop from "../components/ScrollToTop";
import WhyGati from "../pages/WhyGati"
import OurTeam from "../pages/OurTeam"
import VisionandMision from "../pages/VisionandMission"
import TermsCondition from "../pages/TermsCondition"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import BillClaim from "../pages/BillClaim"
import MovingGuide from "../pages/MovingGuide"
import PhotoGallery from "../pages/PhotoGallery"
import CustomerSupport from "../pages/CustomerSupport"
import HomeShifting from "../pages/HomeShifting"
import PetRelocation from "../pages/PetRelocation"
import OfficeRelocation from "../pages/OfficeRelocation"
import CarBikeTransport from "../pages/CarBikeTransport"
import CommercialShifting from "../pages/CommercialShifting"
import InternationalMovers from "../pages/InternationalMovers"
import Warehouse from "../pages/Warehouse"
import HomeStorage from "../pages/HomeStorage"
import SafetyStandard from "../pages/SafetyStandard"
import VideoGallery from "../pages/VideoGallery"
import CityPage from "../pages/CityPage"
import { pagesData } from "../pages/city-wise-pages-data"

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
                    <Route path="/who-we-are" element={<Who_we_are></Who_we_are>}></Route>
                    <Route path="/why-gati" element={<WhyGati></WhyGati>}></Route>
                    <Route path="/our-team" element={<OurTeam></OurTeam>}></Route>
                    <Route path="/vission-mission" element={<VisionandMision></VisionandMision>}></Route>
                    <Route path="/terms-and-conditions" element={<TermsCondition></TermsCondition>}></Route>
                    <Route path="/privacy-and-policy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
                    <Route path="/bill-claim" element={<BillClaim></BillClaim>}></Route>
                    <Route path="/moving-guide" element={<MovingGuide></MovingGuide>}></Route>
                    <Route path="/photo-gallery" element={<PhotoGallery></PhotoGallery>}></Route>
                    <Route path="/customer-support" element={<CustomerSupport></CustomerSupport>}></Route>
                    <Route path="/home-shifting" element={<HomeShifting></HomeShifting>}></Route>
                    <Route path="/pet-relocation" element={<PetRelocation></PetRelocation>}></Route>
                    <Route path="/office-relocation" element={<OfficeRelocation></OfficeRelocation>}></Route>
                    <Route path="/car-bike-transport" element={<CarBikeTransport></CarBikeTransport>}></Route>
                    <Route path="/commercial-shifting" element={<CommercialShifting></CommercialShifting>}></Route>
                    <Route path="/international-moves" element={<InternationalMovers></InternationalMovers>}></Route>
                    <Route path="/warehouse" element={<Warehouse></Warehouse>}></Route>
                    <Route path="/home-storage" element={<HomeStorage></HomeStorage>}></Route>
                    <Route path="/safety-standard" element={<SafetyStandard></SafetyStandard>}></Route>
                    <Route path="/video-gallery" element={<VideoGallery></VideoGallery>}></Route>
                    {
                        pagesData.map((page) => (
                            <Route path={`/city/${page.slug}`} element={
                                <CityPage city={page.city}></CityPage>
                            }>

                            </Route>
                        ))
                    }
                </Routes>
            </ScrollToTop>
            <Footer />
        </section>
    )

}

export default AppRoutes