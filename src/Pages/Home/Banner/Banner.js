import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

const Banner = () => {
    const images = [
        {
            id: 1,
            img: "https://i.ibb.co/ySttHyT/Home-Season-426e966b-0252-443c-b88f-532d7cd2ba04.webp"
        },
        // {
        //     id: 2,
        //     img: "https://i.ibb.co/rHm1D17/Home-Main-update2-880573a0-e874-4a70-9645-3872269f5c45.webp"
        // },
        {
            id: 2,
            img: "https://i.ibb.co/WGWrdjd/two.webp"
        }
    ]
    return (
        <div>
            <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        {
            images.map(image => <SwiperSlide key={image.id}>
                <img src={image.img} alt="" />
            </SwiperSlide>)
        }
        
      </Swiper>
    </>
        </div>
    );
};

export default Banner;