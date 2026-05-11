import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Review from "../pages/Review"
// import FAQ from "../pages/FAQ"
import Services from "../pages/Services"
import Contact from "../pages/Contact"
// import WhoWeAre from "../pages/WhoWeAre"
import ScrollToTop from "../components/ScrollToTop";
// import WhyGati from "../pages/WhyGati"
// import OurTeam from "../pages/OurTeam"
// import VisionandMision from "../pages/VisionandMission"
// import TermsCondition from "../pages/TermsCondition"
// import PrivacyPolicy from "../pages/PrivacyPolicy"
// import BillClaim from "../pages/BillClaim"
// import MovingGuide from "../pages/MovingGuide"
// import PhotoGallery from "../pages/PhotoGallery"
// import CustomerSupport from "../pages/CustomerSupport"
// import HomeShifting from "../pages/HomeShifting"
// import PetRelocation from "../pages/PetRelocation"
// import OfficeRelocation from "../pages/OfficeRelocation"
// import CarBikeTransport from "../pages/CarBikeTransport"
// import CommercialShifting from "../pages/CommercialShifting"
// import InternationalMovers from "../pages/InternationalMovers"
// import Warehouse from "../pages/Warehouse"
// import HomeStorage from "../pages/HomeStorage"
// import SafetyStandard from "../pages/SafetyStandard"
// import VideoGallery from "../pages/VideoGallery"
// import CityPage from "../pages/CityPage"
// import InternationalShifting from "../pages/InternationalShifting"
import { pagesData } from "../pages/city-wise-pages-data"
import { useState } from 'react';
// import NotFound from "../pages/NotFound";
import PopUp from "../components/PopUpDisplay.tsx"
// import Storage from "../pages/Storage.tsx"
// import CarStorage from "../pages/CarStorage.tsx"
// import BikeStorage from "../pages/BikeStorage.tsx"
// import BusinessPartner from "../pages/BusinessPartner.tsx"
// import Layout from "../pages/Laoytout.tsx"
import TrackOrder from "../pages/TrackOrder.tsx"
// // Admin
// import AdminDashboard from "../pages/admin/AdminDashboard.tsx"
// import AdminLogin from "../pages/admin/AdminLogin.tsx"
import ProtectedRoute from "../pages/admin/ProtectedRoute.tsx"
// import ItemSelection from "../pages/ItemSelection.tsx"

// const Home = React.lazy(() => import("../pages/Home"));
// const About = React.lazy(() => import("../pages/About"));
// const Review = React.lazy(() => import("../pages/Review"));
const FAQ = React.lazy(() => import("../pages/FAQ"));
// const Services = React.lazy(() => import("../pages/Services"));
// const Contact = React.lazy(() => import("../pages/Contact"));
const WhoWeAre = React.lazy(() => import("../pages/WhoWeAre"));
const WhyGati = React.lazy(() => import("../pages/WhyGati"));
const OurTeam = React.lazy(() => import("../pages/OurTeam"));
const VisionandMision = React.lazy(() => import("../pages/VisionandMission"));
const TermsCondition = React.lazy(() => import("../pages/TermsCondition"));
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy"));
const BillClaim = React.lazy(() => import("../pages/BillClaim"));
const MovingGuide = React.lazy(() => import("../pages/MovingGuide"));
const PhotoGallery = React.lazy(() => import("../pages/PhotoGallery"));
const CustomerSupport = React.lazy(() => import("../pages/CustomerSupport"));
const HomeShifting = React.lazy(() => import("../pages/HomeShifting"));
const PetRelocation = React.lazy(() => import("../pages/PetRelocation"));
const OfficeRelocation = React.lazy(() => import("../pages/OfficeRelocation"));
const CarBikeTransport = React.lazy(() => import("../pages/CarBikeTransport"));
const CommercialShifting = React.lazy(() => import("../pages/CommercialShifting"));
const InternationalMovers = React.lazy(() => import("../pages/InternationalMovers"));
const Warehouse = React.lazy(() => import("../pages/Warehouse"));
const HomeStorage = React.lazy(() => import("../pages/HomeStorage"));
const SafetyStandard = React.lazy(() => import("../pages/SafetyStandard"));
const VideoGallery = React.lazy(() => import("../pages/VideoGallery"));
const CityPage = React.lazy(() => import("../pages/CityPage"));
const InternationalShifting = React.lazy(() => import("../pages/InternationalShifting"));
const Storage = React.lazy(() => import("../pages/Storage.tsx"));
const CarStorage = React.lazy(() => import("../pages/CarStorage.tsx"));
const BikeStorage = React.lazy(() => import("../pages/BikeStorage.tsx"));
const BusinessPartner = React.lazy(() => import("../pages/BusinessPartner.tsx"));
const Layout = React.lazy(() => import("../pages/Laoytout.tsx"));
// const TrackOrder = React.lazy(() => import("../pages/TrackOrder.tsx"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const AdminDashboard = React.lazy(() => import("../pages/admin/AdminDashboard.tsx"));
const AdminLogin = React.lazy(() => import("../pages/admin/AdminLogin.tsx"));
const ItemSelection = React.lazy(() => import("../pages/ItemSelection.tsx"));





const AppRoutes = () => {

    const testing = () => {
        console.log("fire")
    }
    const [open, setOpen] = useState(false);
    const [visibilityCondition, setVisibilityCondition] = useState<boolean>(false);
    return (
        <section style={{ overflowX: "hidden" }}>
            {/* <Navbar successCondition={setVisibilityCondition} setOpen={setOpen} open={open} /> */}
            <PopUp visibility={visibilityCondition} condition={setVisibilityCondition}></PopUp>
            <ScrollToTop>
                <Suspense fallback={<div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>}>
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

                        <Route path="/track-order/:id" element={<Layout><TrackOrder></TrackOrder></Layout>}></Route>
                        <Route path="/track-order" element={<Layout><TrackOrder /></Layout>} />
                        <Route path="/item-selection" element={<ItemSelection successCondition={setVisibilityCondition} setOpen={setOpen} open={open} />} />


                        {
                            pagesData.map((page) => (
                                <Route path={`/${page.slug.toLowerCase()}`} element={<Layout>
                                    <CityPage city={page.city} img={page.img} metaData={page.metaDetails} offer={page.offer} pageData={page.pageData} address={page.address} allData={page}></CityPage>
                                </Layout>}>

                                </Route>
                            ))
                        }


                        {/* 404 Page */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </ScrollToTop>
        </section>
    )

}

export default AppRoutes