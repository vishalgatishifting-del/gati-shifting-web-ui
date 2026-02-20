import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Review from "../pages/Review"
import FAQ from "../pages/FAQ"
import Services from "../pages/Services"
import Contact from "../pages/Contact"
import WhoWeAre from "../pages/WhoWeAre"
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
import InternationalShifting from "../pages/InternationalShifting"
import { pagesData } from "../pages/city-wise-pages-data"
import { useState } from 'react';
import NotFound from "../pages/NotFound";
import PopUp from "../components/PopUpDisplay.tsx"
import Storage from "../pages/Storage.tsx"
import CarStorage from "../pages/CarStorage.tsx"
import BikeStorage from "../pages/BikeStorage.tsx"
import BusinessPartner from "../pages/BusinessPartner.tsx"
import Layout from "../pages/Laoytout.tsx"

// import AdminDashboard from "../pages/AdminDashboard.tsx"
// import AdminLogin from "../pages/AdminLogin.tsx"
import TrackOrder from "../pages/TrackOrder.tsx"



// Admin
import AdminDashboard from "../pages/admin/AdminDashboard.tsx"
import AdminLogin from "../pages/admin/AdminLogin.tsx"
import ProtectedRoute from "../pages/admin/ProtectedRoute.tsx"





const AppRoutes = () => {

    const testing = ()=>{
        console.log("fire")
    }
    const [, setOpen] = useState(false);
    const [visibilityCondition, setVisibilityCondition] = useState<boolean>(false);
    return (
        <section style={{ overflowX: "hidden" }}>
            {/* <Navbar successCondition={setVisibilityCondition} setOpen={setOpen} open={open} /> */}
            <PopUp visibility={visibilityCondition} condition={setVisibilityCondition}></PopUp>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Layout><Home successCondition={setVisibilityCondition}></Home></Layout>}></Route>
                    <Route path="/about" element={<Layout><About successCondition={setVisibilityCondition} setOpen={setOpen}></About></Layout>}></Route>
                    <Route path="/review" element={<Layout><Review successCondition={setVisibilityCondition} ></Review></Layout>}></Route>
                    <Route path="/faqs" element={<Layout><FAQ></FAQ></Layout>}></Route>
                    <Route path="/services" element={<Layout><Services successCondition={setVisibilityCondition} ></Services></Layout>}></Route>
                    <Route path="/contact-us" element={<Layout><Contact successCondition={setVisibilityCondition}></Contact></Layout>}></Route>
                    <Route path="/who-we-are" element={<Layout><WhoWeAre></WhoWeAre></Layout>}></Route>
                    <Route path="/why-gati" element={<Layout><WhyGati successCondition={setVisibilityCondition} ></WhyGati></Layout>}></Route>
                    <Route path="/our-team" element={<Layout><OurTeam></OurTeam></Layout>}></Route>
                    <Route path="/vission-mission" element={<Layout><VisionandMision></VisionandMision></Layout>}></Route>
                    <Route path="/terms-and-conditions" element={<Layout><TermsCondition></TermsCondition></Layout>}></Route>
                    <Route path="/privacy-and-policy" element={<Layout><PrivacyPolicy></PrivacyPolicy></Layout>}></Route>
                    <Route path="/bill-claim" element={<Layout><BillClaim></BillClaim></Layout>}></Route>
                    <Route path="/moving-guide" element={<Layout><MovingGuide></MovingGuide></Layout>}></Route>
                    <Route path="/photo-gallery" element={<Layout><PhotoGallery></PhotoGallery></Layout>}></Route>
                    <Route path="/customer-support" element={<Layout><CustomerSupport successCondition={setVisibilityCondition} ></CustomerSupport></Layout>}></Route>
                    <Route path="/home-shifting" element={<Layout><HomeShifting></HomeShifting></Layout>}></Route>
                    <Route path="/pet-relocation" element={<Layout><PetRelocation></PetRelocation></Layout>}></Route>
                    <Route path="/office-relocation" element={<Layout><OfficeRelocation></OfficeRelocation></Layout>}></Route>
                    <Route path="/car-bike-transport" element={<Layout><CarBikeTransport></CarBikeTransport></Layout>}></Route>
                    <Route path="/commercial-shifting" element={<Layout><CommercialShifting></CommercialShifting></Layout>}></Route>
                    <Route path="/international-moves" element={<Layout><InternationalMovers></InternationalMovers></Layout>}></Route>
                    <Route path="/warehouse" element={<Layout><Warehouse></Warehouse></Layout>}></Route>
                    <Route path="/home-storage" element={<Layout><HomeStorage></HomeStorage></Layout>}></Route>
                    <Route path="/safety-standard" element={<Layout><SafetyStandard></SafetyStandard></Layout>}></Route>
                    <Route path="/video-gallery" element={<Layout><VideoGallery></VideoGallery></Layout>}></Route>
                    <Route path="/international-shifting" element={<Layout><InternationalShifting successCondition={setVisibilityCondition}></InternationalShifting></Layout>}></Route>
                    <Route path="/storage" element={<Layout><Storage></Storage></Layout>}></Route>
                    <Route path="/car-storage" element={<Layout><CarStorage></CarStorage></Layout>}></Route>
                    <Route path="/bike-storage" element={<Layout><BikeStorage></BikeStorage></Layout>}></Route>
                    <Route path="/document-upload" element={<BusinessPartner></BusinessPartner>}></Route>


                    <Route path="/admin-login" element={<AdminLogin onLoginSuccess={testing}></AdminLogin>}></Route>
                    <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard></AdminDashboard></ProtectedRoute>}></Route>

                    <Route path="/track-order" element={<Layout><TrackOrder></TrackOrder></Layout>}></Route>


                    {
                        pagesData.map((page) => (
                            <Route path={`/city/${page.slug}`} element={<Layout>
                                <CityPage city={page.city} img={page.img} metaData={page.metaDetails} offer={page.offer} pageData={page.pageData} address={page.address}></CityPage>
                            </Layout>}>

                            </Route>
                        ))
                    }


                    {/* 404 Page */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ScrollToTop>
        </section>
    )

}

export default AppRoutes