import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Review from "../pages/Review"
import FAQ from "../pages/FAQ"
import Services from "../pages/Services"
import Contact from "../pages/Contact"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
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


const AppRoutes = () => {
    const [open, setOpen] = useState(false);
    const [visibilityCondition, setVisibilityCondition] = useState<boolean>(false);
    return (
        <section style={{ overflowX: "hidden" }}>
            <Navbar successCondition={setVisibilityCondition} setOpen={setOpen} open={open} />
            <PopUp visibility={visibilityCondition} condition={setVisibilityCondition}></PopUp>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home successCondition={setVisibilityCondition}></Home>}></Route>
                    <Route path="/about" element={<About  successCondition={setVisibilityCondition}  setOpen={setOpen}></About>}></Route>
                    <Route path="/review" element={<Review  successCondition={setVisibilityCondition} ></Review>}></Route>
                    <Route path="/faqs" element={<FAQ></FAQ>}></Route>
                    <Route path="/services" element={<Services  successCondition={setVisibilityCondition} ></Services>}></Route>
                    <Route path="/contact-us" element={<Contact  successCondition={setVisibilityCondition}></Contact>}></Route>
                    <Route path="/who-we-are" element={<WhoWeAre></WhoWeAre>}></Route>
                    <Route path="/why-gati" element={<WhyGati  successCondition={setVisibilityCondition} ></WhyGati>}></Route>
                    <Route path="/our-team" element={<OurTeam></OurTeam>}></Route>
                    <Route path="/vission-mission" element={<VisionandMision></VisionandMision>}></Route>
                    <Route path="/terms-and-conditions" element={<TermsCondition></TermsCondition>}></Route>
                    <Route path="/privacy-and-policy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
                    <Route path="/bill-claim" element={<BillClaim></BillClaim>}></Route>
                    <Route path="/moving-guide" element={<MovingGuide></MovingGuide>}></Route>
                    <Route path="/photo-gallery" element={<PhotoGallery></PhotoGallery>}></Route>
                    <Route path="/customer-support" element={<CustomerSupport  successCondition={setVisibilityCondition} ></CustomerSupport>}></Route>
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
                    <Route path="/international-shifting" element={<InternationalShifting successCondition={setVisibilityCondition}></InternationalShifting>}></Route>
                    <Route path="/storage" element={<Storage></Storage>}></Route>
                    <Route path="/car-storage" element={<CarStorage></CarStorage>}></Route>
                    <Route path="/bike-storage" element={<BikeStorage></BikeStorage>}></Route>
                    <Route path="/document-upload" element={<BusinessPartner></BusinessPartner>}></Route>
                    
                    {
                        pagesData.map((page) => (
                            <Route path={`/city/${page.slug}`} element={
                                <CityPage city={page.city} img={page.img} metaData={page.metaDetails} offer={page.offer} pageData={page.pageData} address={page.address}></CityPage>
                            }>

                            </Route>
                        ))
                    }


                    {/* 404 Page */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ScrollToTop>
            <Footer />
        </section>
    )

}

export default AppRoutes