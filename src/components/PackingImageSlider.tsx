import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./PackingImageSlider.scss"
import "swiper/css";

interface ProductSliderProps {
    images?: string[];
}

const ProductImageSlider: React.FC<ProductSliderProps> = ({ images = [] }) => {
    return (
        <div className="feature">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={0}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="image-box">
                            <img src={img} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductImageSlider;
