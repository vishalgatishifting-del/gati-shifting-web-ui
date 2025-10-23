import AwardCertification from "../components/AwardCertification";
import BrandList from "../components/BrandsList";
import FAQList from "../components/FAQList";
import GetInTouch from "../components/GetInTouch";
import TrustUsSection from "../components/TrustUsSection";
import "./VideoGallery.scss"

const VideoGallery = () => {
    const videoIds = [
        "kNzBhEgHX_0",
        "6kXCiKktxy0",
        "qZQQkGGlXdY",
        "LcMcs_lPp5g",
        "IouyH7162HE",
        "A3BIWSM420s",
        "Gq1Ho2NijUI",
        "6r94RYnPBW0",
        "sVn6lkuuPmg",
        "p92St_xXPok",
        "YB_fNh4Uvvw",
    ];
    return (
        <>
            <section id="video-gallery-sec">
                <div className="container">
                    <h1>Our Videos</h1>
                    <p>Real Stories. Real Relocations. Here’s what our happy customers have to say.</p>
                    <div className="videos">
                        {videoIds.map((id) => (
                            <iframe
                                key={id}
                                src={`https://www.youtube.com/embed/${id}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        ))}
                    </div>
                </div>
            </section>

            <GetInTouch></GetInTouch>
            <AwardCertification></AwardCertification>
            <TrustUsSection></TrustUsSection>
            <BrandList></BrandList>
            <FAQList></FAQList>
        </>
    )
}

export default VideoGallery;