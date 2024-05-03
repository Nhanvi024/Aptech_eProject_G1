import './FooterInfo.css'
import faceIcon from '../../assets/image/footer/icon/facebook.svg'
import tweetterIcon from '../../assets/image/footer/icon/tweetter.svg'
import instaIcon from '../../assets/image/footer/icon/instagram.svg'

import logoCalendar from '../../assets/image/header/logo/logoImage.png'
import RYANA5 from '../../assets/image/logo/RYANA5.png'

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../headerComponents/Logo';

function FooterInfo(props) {
    return (
        <div className='footerInfoContainer'>
            <div className='logoFooter'>

                {/* <img className='logoFooter_logo' 
                src='/assets/image//logo/logo.jpg'
                alt='logoFooter'/> */}
                <Logo/>

                <div className='logoFooter_fanPage'>
                    <img className='logoFooter_fanPage-icon' src={faceIcon} alt='facebookIcon'/>
                    <img className='logoFooter_fanPage-icon' src={tweetterIcon} alt='tweetterIcon'/>
                    <img className='logoFooter_fanPage-icon' src={instaIcon} alt='instagramIcon'/>
                </div>
                <div className='logoFooter_info'>
                <p className='logoFooter_groupName'>Team Calendar</p>
                <p className='logoFooter_class'>T1.2401.E0</p>
                <p className='logoFooter_address'>590, Cach Mang Thang Tam street, ward 11, district 3, Ho Chi Minh city</p>
                </div>
            </div>
            <div className='infoFooter'>
                
                <div className='infoFooter_aboutUs'>
                    <p className='infoFooter_aboutUs-title'>ABOUT US:</p>
                    <div className='infoFooter_aboutUs-list'>
                        <Link className='infoFooter_aboutUs-item' to='/contact'>Contact Us</Link>
                        <Link className='infoFooter_aboutUs-item'to='/about'>Company</Link>
                        <Link className='infoFooter_aboutUs-item'to='/about'>Our Team</Link>
                    </div>
                </div>

                <div className='infoFooter_products'>
                <p className='infoFooter_products-title'>PRODUCTS: </p>
                    <div className='infoFooter_products-list'>
                        <Link className='infoFooter_products-item' to='/allproducts'>All Products</Link>
                        <Link className='infoFooter_products-item' to='/calendar'>Calendars</Link>
                        <Link className='infoFooter_products-item' to='/notebook'>Notebooks</Link>
                    </div>
                </div>
                <div className='infoFooter_supports'>
                <p className='infoFooter_supports-title'>SUPPORT: </p>
                    <div className='infoFooter_supports-container'>
                        <img className='infoFooter_supports-image' src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/24-hours.svg?1714632381944'/>
                        <p className='infoFooter_supports-hotline'>0123.456.789</p>
                    </div>
                </div>

            </div>

            

            
        </div>
    );
}

export default FooterInfo;