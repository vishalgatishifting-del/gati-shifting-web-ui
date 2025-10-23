import { useState, Suspense, lazy } from "react";
import "./PhotoGallery.scss";
import { Helmet } from "react-helmet-async";

// Components Lazy Load (for coverage optimization)
const GetInTouch = lazy(() => import("../components/GetInTouch"));
const AwardCertification = lazy(() => import("../components/AwardCertification"));
const TrustUsSection = lazy(() => import("../components/TrustUsSection"));
const BrandList = lazy(() => import("../components/BrandsList"));
const FAQList = lazy(() => import("../components/FAQList"));


// Helper component to load images lazily
const LazyImage = ({ src, alt }: { src: string; alt?: string }) => (
    <img
        loading="lazy"
        src={src}
        alt={alt || "Gallery Image"}
        style={{ width: "100%", height: "100%", borderRadius: "8px", objectFit: "cover" }}
    />
);

const PhotoGallery = () => {
    const [category, setCategory] = useState("all");

    // Instead of importing all images statically, store filenames & load dynamically
    const images: Record<string, string[]> = {
        bike: [
            "b 54.webp", "b 55.webp", "b 56.webp", "b 57.webp", "b 58.webp", "b 59.webp",
            "bike 50.webp", "bike 52.webp", "bike1.webp", "bike11.webp", "bike12.webp",
            "bike13.webp", "bike14.webp", "bike15.webp", "bike16.webp", "bike17.webp",
            "bike18.webp", "bike19.webp", "bike2.webp", "bike20.webp", "bike21.webp",
            "bike22.webp", "bike4.webp", "bike40.webp", "bike41.webp", "bike5.webp",
            "bike6.webp", "bike8.webp", "bke 51.webp", "IMG-20250815-WA0005.webp",
            "IMG-20250815-WA0006.webp", "IMG-20250815-WA0008.webp"
        ],
        household: [
            "ahou1.webp", "House1.webp", "House10.webp", "House11.webp", "House12.webp", "House13.webp",
            "House14.webp", "House16.webp", "House17.webp", "House18.webp", "House19.webp", "House2.webp",
            "House20.webp", "House21.webp", "House22.webp", "House23.webp", "House24.webp", "House25.webp",
            "House26.webp", "House27.webp", "house29.webp", "House3.webp", "house30.webp", "house31.webp",
            "house32.webp", "house34.webp", "House4.webp", "House5.webp", "House6.webp", "House7.webp",
            "House8.webp", "House9.webp", "other1.webp", "other2.webp", "other3.webp", "other4.webp"
        ],
        wooden: [
            "wood1.webp", "wood3.webp", "wood4.webp", "wood5.webp", "wooden 23.webp",
            "wooden1.webp", "wooden10.webp", "wooden11.webp", "wooden12.webp", "wooden13.webp",
            "wooden14.webp", "wooden15.webp", "wooden16.webp", "wooden17.webp", "wooden2.webp",
            "wooden20.webp", "wooden21.webp", "wooden24.webp", "wooden25.webp", "wooden3.webp",
            "wooden4.webp", "wooden5.webp", "wooden6.webp", "wooden7.webp", "wooden8.webp", "wooden9.webp"
        ],
        storage: [
            "stor1.webp", "stor2.webp", "stor4.webp", "stor5.webp", "stor6.webp", "stor8.webp",
            "stor9.webp", "store1.webp", "store2.webp", "store3.webp", "store4.webp", "store5.webp"
        ],
        car: [
            "10.webp", "2.webp", "c 3.webp", "c 4.webp", "c 6.webp", "c7.webp",
            "c8.webp", "c9.webp", "c9_1.webp", "car 1.webp"
        ]
    };

    const visibleCategories =
        category === "all" ? Object.keys(images) : [category];

    return (
        <>
            <Helmet>

                <title>Photo Gallery | Gati Shifting Packers</title>

                <meta name="description" content="Explore the Photo Gallery of Gati Shifting Packers showcasing our professional packing, moving, and relocation services. See our team in action and client success stories." />
                <meta name="keywords" content="Gati Shifting Packers photo gallery, packing and moving photos, relocation services images, professional movers photos, client success stories" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="rohan" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Photo Gallery | Gati Shifting Packers" />
                <meta property="og:description" content="Browse the Photo Gallery of Gati Shifting Packers to see our expert packing and moving services in action." />
                <meta property="og:url" content="https://gatishiftingpackers.com/photo-gallery" />
                <meta property="og:site_name" content="Gati Shifting Packers" />
                <meta property="og:image" content="https://gatishiftingpackers.com/metaImg.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Photo Gallery | Gati Shifting Packers" />
                <meta name="twitter:description" content="Check out our Photo Gallery showcasing professional packing, moving, and relocation services." />
                <meta name="twitter:image" content="https://gatishiftingpackers.com/metaImg.png" />
                <meta name="twitter:site" content="@gati_shifting" />


                <meta http-equiv="Content-Language" content="en" />

                <link rel="canonical" href="https://gatishiftingpackers.com/photo-gallery"></link>
            </Helmet>
            <section id="photogallerysec">
                <div className="container">
                    <div className="btns">
                        {["all", "bike", "household", "storage", "car", "wooden"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={category === cat ? "active" : ""}
                            >
                                {cat === "all"
                                    ? "All"
                                    : cat === "bike"
                                        ? "Bike Shifting"
                                        : cat === "household"
                                            ? "House Shifting"
                                            : cat === "storage"
                                                ? "Storage"
                                                : cat === "car"
                                                    ? "Car"
                                                    : "Wooden Packing"}
                            </button>
                        ))}
                    </div>

                    {visibleCategories.map((cat) => (
                        <div key={cat} className={`content ${cat}-category`}>
                            {images[cat].map((img, index) => (
                                <div key={index} className="img-bx">
                                    <LazyImage
                                        src={new URL(`../assets/photoGallery/${img}`, import.meta.url).href}
                                        alt={img}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Lazy load components for better performance */}
            <Suspense fallback={<div>Loading sections...</div>}>
                <GetInTouch />
                <AwardCertification />
                <TrustUsSection />
                <BrandList />
                <FAQList />
            </Suspense>
        </>
    );
};

export default PhotoGallery;
