import './AboutPage.css';

import React from 'react';
import { motion } from "framer-motion"
function AboutPage(props) {
    return (
        <>
            <motion.div initial={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <img className='imageBanner'
                    src='https://i0.wp.com/currentpr.com/wp-content/uploads/2018/02/banner-meet-team.jpg?resize=1200%2C338&ssl=1' alt='banner'></img>
                <div className='aboutPage-container'>
                    <div className='aboutPage-company'>
                        <h1 className='aboutPage-company-title'>Ryana Calendar</h1>
                        <div className='aboutPage-company-content'>
                            <img className='aboutPage-company-image' src='/assets/image/aboutus/storeImage.jpg' alt='storeImage' />
                            <p className='aboutPage-company-introduce'>Ryana Calendars is selling Calendar and Diary products.
                                The company advertises by distributing leaflets, printing in newspapers, v.v.
                                However, due to the rapid development of the internet sector in this day and age,
                                almost everyone is focused on technology. And so we decided to set up a website where people
                                will get all the information about different products easily, quickly and appropriately.

                                We who make these calendars and diaries strive to develop and bring the best sense
                                of product selection and reference to users. Our calendars and diaries are printed with different messages and
                                colors with the hope that people can better understand personality, people, the earth, even animals… so that
                                everyone can stay optimistic, live happily every day. With Ryana Calendars, you'll be able to find the calendar
                                or diary that suits your needs, with dozens of different options to help you choose the best product.</p>
                        </div>

                    </div>
                    <div className='aboutPage-team'>
                        <h1 className='aboutPage-team-title'>Our Team</h1>

                    </div>
                </div>
            </motion.div>
        </>

    );
}

export default AboutPage;
