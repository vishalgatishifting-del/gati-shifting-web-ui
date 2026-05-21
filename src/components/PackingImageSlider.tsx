import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./PackingImageSlider.scss"
import "swiper/css";
// Feature Slider Images

const ProductImageSlider = () => {
    const sliderImages = Array.from({ length: 27 }, (_, i) => 
        new URL(`../assets/homePagePng/feature${i + 1}.webp`, import.meta.url).href
    );

    return (
        <div className="feature">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                spaceBetween={0}
                breakpoints={{
                    0:    { slidesPerView: 2 },
                    600:  { slidesPerView: 2 },
                    900:  { slidesPerView: 3 },
                    1200: { slidesPerView: 5 },
                }}
            >
                {sliderImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="image-box">
                            <img
                                src={img}
                                alt={`packing-${index + 1}`}
                                loading="lazy"      // ✅ Browser sirf visible images load karega
                                decoding="async"    // ✅ Main thread block nahi hoga
                                width="300"         // ✅ CLS fix — dimensions do
                                height="200"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductImageSlider;
