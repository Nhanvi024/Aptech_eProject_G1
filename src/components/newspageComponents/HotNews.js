import './HotNews.css'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function HotNews(props) {
    const { hotNews , handleSelectNews } = props

    return (
        <div className='newsPage-hotNews'>
            <h1 className='newsPage-hotNews-name'>HOT NEWS OF THE WEEK</h1>

            <div className='newsPage-hotNews-container'>
                <div className='newsPage-hotNews-row1'>
                <Swiper

                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1:{
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 5,
    
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
    
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                    {hotNews && hotNews.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <button onClick={(e) => handleSelectNews(e)} className='newsPage-hotNews-newscard1' name={item.id}>
                                        <img className='newsPage-hotNews-img1' src={item.mainImage} alt='news' />
                                        <p className='newsPage-hotNews-title1' >{item.title}</p>
                                    </button>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                <div className='newsPage-hotNews-row2'>
                    {hotNews && hotNews.map((item, index) => {
                        return (
                            index > 3 && index < 7 &&
                            <button key={index} onClick={(e) => handleSelectNews(e)} className='newsPage-hotNews-newscard2'  name={item.id}>
                                <img className='newsPage-hotNews-img2' src={item.mainImage} alt='news'/>
                                <p className='newsPage-hotNews-title2'>{item.title}</p>
                            </button>
                        )

                    })}
                </div>


            </div>

        </div>
    );
}

export default HotNews;