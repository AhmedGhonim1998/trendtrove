import React from 'react'
import { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
const sponsorList = [
    {
        imgUrl: "/images/sponsor/01.png",
    },
    {
        imgUrl: "/images/sponsor/02.png",
    },
    {
        imgUrl: "/images/sponsor/03.png",
    },
    {
        imgUrl: "/images/sponsor/04.png",
    },
    {
        imgUrl: "/images/sponsor/05.png",
    },
    {
        imgUrl: "/images/sponsor/06.png",
    },
];
const Sponsor = () => {
    return (
        <div className='sponsor-section section-bg'>
            <Container>
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            autoplay={
                                {
                                    delay:2000,
                                    disableOnInteraction:false
                                }
                            }
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {
                                sponsorList.map((val,i)=>(<SwiperSlide key={i}>
                                    <div className="sponsor-item">
                                        <div className="sponsor-thumb">
                                            <img src={val.imgUrl} alt="img" />
                                        </div>
                                    </div>
                                </SwiperSlide>))
                            }
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Sponsor