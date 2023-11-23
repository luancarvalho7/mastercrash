import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './bannerSection.css'

// import required modules
import { Autoplay } from 'swiper/modules';

export function BannerSection({checkout, communityLink}) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="bannerSwiper"
            >
                <SwiperSlide><img src="https://i.postimg.cc/85kTWfhG/2k.webp" alt="" onClick={() => { }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.postimg.cc/4dm3v0X5/demo-ban02.png" alt="" style={{ cursor: "pointer" }}
                    onClick={() => { window.open(communityLink) }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.postimg.cc/zGggV6jN/vip.webp" alt="" style={{ cursor: "pointer" }}
                    onClick={() => { window.open(checkout, "_blank")
                    }} /></SwiperSlide>
            </Swiper>
        </>
    );
}