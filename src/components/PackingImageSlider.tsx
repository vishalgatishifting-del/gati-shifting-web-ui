import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PackingImageSlider.scss"

interface ProductSliderProps {
    images?: string[]; // optional banaya to avoid undefined error
}

const ProductImageSlider: React.FC<ProductSliderProps> = ({ images = [] }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,

        slidesToShow: 4,
        slidesToScroll: 1,

        autoplay: true,        // ✅ ADD
        autoplaySpeed: 1000,   // ✅ ADD (2.5 sec)

        pauseOnHover: true,
        swipeToSlide: true,
        draggable: true,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1244,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 954,
                settings: {
                    slidesToShow: 2, // Mobile me 2 images
                },
            },
        ],
    };

    return (
        <>

            <div className="w-full px-4 feature">
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index} className="px-3">
                            {/* FIXED HEIGHT WRAPPER */}
                            <div className="rounded-xl overflow-hidden shadow-md h-48">
                                <img
                                    src={img}
                                    alt={`product-${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </>
    );
};

export default ProductImageSlider;

/*
USAGE:

import ProductImageSlider from "./ProductImageSlider";

const images = [
  "/img/p1.jpg",
  "/img/p2.jpg",
  "/img/p3.jpg",
  "/img/p4.jpg",
  "/img/p5.jpg",
];

<ProductImageSlider images={images} />

INSTALL:

npm install react-slick slick-carousel
*/
