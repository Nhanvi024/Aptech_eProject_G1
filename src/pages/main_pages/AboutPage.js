import './AboutPage.css';

import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import userIcon from '../../assets/image/aboutus/user-solid.svg'
import faceIcon from '../../assets/image/footer/icon/facebook.svg'
import tweetterIcon from '../../assets/image/footer/icon/tweetter.svg'
import instaIcon from '../../assets/image/footer/icon/instagram.svg'
import { DataContext } from '../../context/DataContext';
function AboutPage(props) {
	let { members, setMembers } = useContext(DataContext)

	useEffect(() => {
		console.log('testing')
	}, [members])
	return (
		<>
			<motion.div className='motionDivContainer'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 1 } }}
				exit={{ opacity: 0, transition: { duration: 0 } }}>
				<img
					className="imageBanner"
					src="https://i0.wp.com/currentpr.com/wp-content/uploads/2018/02/banner-meet-team.jpg?resize=1200%2C338&ssl=1"
					alt="banner"></img>

				<div className="aboutPage-container ">
					<h1 className="aboutPage-company-title">About Us</h1>
					<h3 className='aboutPage-company-introTitle'>Welcome to our world at Ryana Calendars, where every day is a canvas for creativity and organization.
						As a premier calendar and notebook company, we are dedicated to bringing innovation and inspiration into the daily lives of our customers. </h3>
					<div className="aboutPage-company">
						<div className='aboutPage-company-imgBox col-xl-6 col-md-12 col-sm-12'>
							<img className="aboutPage-company-image" src="/assets/image/aboutus/storeImage.jpg" alt="storeImage" />
						</div>
						<div className="aboutPage-company-content col-xl-6 col-md-12 col-sm-12">
							<h1 className='aboutPage-company-contentTitle'>Our Story</h1>
							<p className="aboutPage-company-introduce">
								At Ryana Calendars, we understand the importance of seamlessly blending functionality with aesthetic appeal. Our calendars and notebooks aren't just tools for keeping track of dates or jotting down notes; they're companions on life's journey, designed to inspire productivity and creativity in equal measure.
							</p>
						</div>
					</div>
					<div className="aboutPage-company">
						<div className="aboutPage-company-content col-xl-6 col-md-12 col-sm-12">
							<h1 className='aboutPage-company-contentTitle'>Our Work</h1>
							<p className="aboutPage-company-introduce ">

								Our calendars and diaries are printed with different messages and colors with the hope that people can better understand
								personality, people, the earth, even animals… so that everyone can stay optimistic, live happily every day. With
								Ryana Calendars, you'll be able to find the calendar or diary that suits your needs, with dozens of different
								options to help you choose the best product.
							</p>
						</div>
						<div className='aboutPage-company-imgBox col-xl-6 col-md-12 col-sm-12'>
							<img className="aboutPage-company-image" src="/assets/image/aboutus/about us 2.jpg" alt="about us 2" />
						</div>
					</div>
					<div className="aboutPage-team">
						<h1 className="aboutPage-team-title">Our Team</h1>
						<div className="aboutPage-company-containerCard">
							{members.map((item, index) => {
								return (
									<div className="aboutPage-company-colCard" key={index}>
										<div className="aboutPage-company-imgPlaceholder">
											<img className='aboutPage-company-cardImg' src={item.image} alt='ahihi' />
										</div>
										<div className='aboutPage-company-cardContent'>
											<h1 className='aboutPage-company-cardTitle'>{item.name}</h1>
											<p className='aboutPage-company-cardPara'>
												<img className='aboutPage-company-cardIcon' src={userIcon} alt='User Icon'></img> {item.title}
											</p>
											<div className='aboutPage-company-row' >
												<a href='https://www.facebook.com/' target='_blank'><img className='aboutUs-logo' src={faceIcon} alt='facebookIcon' /></a>
												<a href='https://twitter.com/' target='_blank'><img className='aboutUs-logo' src={tweetterIcon} alt='tweetterIcon' /></a>
												<a href='https://www.instagram.com/' target='_blank'><img className='aboutUs-logo' src={instaIcon} alt='instagramIcon' /></a>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>

				</div>

			</motion.div>
		</>
	);
}

export default AboutPage;
