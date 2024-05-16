import './NewsReadLot.css'

import React, { useEffect, useState } from 'react';
import EllipsisText from "react-ellipsis-text";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function NewsReadLot(props) {
    const { newsReadLot, handleSelectNews } = props

    return (

        <div className='newsPage-newsReadLot1'>
            <h1 className='newsPage-newsReadLot-name'>NEWS READ A LOT</h1>
            <div className='newsPage-newsReadLot-container'>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        1:{
                            slidesPerView: 1,
                            // spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,

                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 40,

                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {newsReadLot && newsReadLot.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <div key={index} className='newsPage-newsReadLot-newscard'>
                                    <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsReadLot-nav' name={item.id}>
                                        <img className='newsPage-newsReadLot-img' src={item.mainImage} alt='news' />
                                        <p className='newsPage-newsReadLot-title' >{item.title}</p>
                                    </button>
                                    <p className='newsPage-newsReadLot-posted'>Posted on {item.datePost} by {item.author}</p>
                                    <p className='newsPage-newsReadLot-content'><EllipsisText text={item.description} length={200} /></p>
                                </div>
                            </SwiperSlide>
                        )

                    })}
                </Swiper>

            </div>
        </div>
    );
}

export default NewsReadLot;