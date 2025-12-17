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

    autoplay: true,
    autoplaySpeed: 1000,

    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,

    // ❌ REMOVE FROM HERE
    // centerMode: true,
    // centerPadding: "0px",

    responsive: [
        {
            breakpoint: 9999, // Desktop only
            settings: {
                slidesToShow: 4,
                centerMode: true,
                centerPadding: "0px",
            },
        },
        {
            breakpoint: 1244,
            settings: {
                slidesToShow: 3,
                centerMode: false,
            },
        },
        {
            breakpoint: 954,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            },
        },
    ],
};



    return (
        <>

            <div className="feature">
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
