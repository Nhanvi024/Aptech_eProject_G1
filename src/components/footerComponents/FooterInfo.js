import './FooterInfo.css'
import faceIcon from '../../assets/image/footer/icon/facebook.svg'
import tweetterIcon from '../../assets/image/footer/icon/tweetter.svg'
import instaIcon from '../../assets/image/footer/icon/instagram.svg'
import logoCalendar from '../../assets/image/header/logo/logoImage.png'


import React from 'react';

function FooterInfo(props) {
    return (
        <div className='footerInfoContainer'>
            <div className='logoFooter'>
                <img className='logoFooter_logo' 
                src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/logo.png?1711094550864'
                // src={logoCalendar}
                alt='logoFooter'/>
                <div className='logoFooter_fanPage'>
                    <img className='logoFooter_fanPage-icon' src={faceIcon} alt='facebookIcon'/>
                    <img className='logoFooter_fanPage-icon' src={tweetterIcon} alt='tweetterIcon'/>
                    <img className='logoFooter_fanPage-icon' src={instaIcon} alt='instagramIcon'/>
                </div>
                <p className='logoFooter_groupName'>Team Calendar</p>
                <p className='logoFooter_class'>T1.2401.E0</p>
                <p className='logoFooter_address'>590, Cach Mang Thang Tam street, ward 11, district 3, Ho Chi Minh city</p>

            </div>
            <div className='infoFooter'>
                
                <div className='infoFooter_aboutUs'>
                    <p className='infoFooter_aboutUs-title'>About Us: </p>
                    <div className='infoFooter_aboutUs-list'>
                        <p className='infoFooter_aboutUs-item'>Contact Us</p>
                        <p className='infoFooter_aboutUs-item'>Company</p>
                        <p className='infoFooter_aboutUs-item'>Our Team</p>
                    </div>
                </div>

                <div className='infoFooter_products'>
                <p className='infoFooter_products-title'>Products: </p>
                    <div className='infoFooter_products-list'>
                        <p className='infoFooter_products-item'>All Products</p>
                        <p className='infoFooter_products-item'>Calendars</p>
                        <p className='infoFooter_products-item'>Notebooks</p>
                    </div>
                </div>

            </div>

            

            
        </div>
    );
}

export default FooterInfo;