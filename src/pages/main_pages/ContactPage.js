import './ContactPage.css'
import addressIcon from '../../assets/image/contact/address.svg'
import phoneIcon from '../../assets/image/contact/phone.svg'
import emailIcon from '../../assets/image/contact/email.svg'


import React from 'react';

function ContactPage(props) {
    return (
        <>
            <img className='imageBanner'
                src='https://abbl.com/wp-content/uploads/2023/02/abbl-contact-banner.jpg' alt='banner'></img>

            <div className='contactPageContainer'>

                <div className='contactPageContainer_row1'>
                    <div className='contact_info'>
                        <h1 className='contact_info-title'>Contact Us</h1>
                        <p className='contact_info-content'>We believe that progress can always be made by continuously driving growth for our
                            customers and employees, shaping decisions and experiences through media, content and technology.</p>
                        <div className='contact_info-address'>
                            <img className='contact_info-icon' src={addressIcon} alt='addressIcon' />
                            <div className='contact_info-content'>
                                <p className='contact_info-content-title'>Address:</p>
                                <p className='contact_info-content-content'>FPT Aptech, 590 Cach Mang Thang Tam, ward 11, district 3, Ho Chi Minh, Viet Nam</p>
                            </div>
                        </div>
                        <div className='contact_info-phone'>
                            <img className='contact_info-icon' src={phoneIcon} alt='addressIcon' />
                            <div className='contact_info-content'>
                                <p className='contact_info-content-title'>Phone:</p>
                                <p className='contact_info-content-content'>+84 123.456.789</p>
                            </div>
                        </div>
                        <div className='contact_info-email'>
                            <img className='contact_info-icon' src={emailIcon} alt='addressIcon' />
                            <div className='contact_info-content'>
                                <p className='contact_info-content-title'>Email:</p>
                                <p className='contact_info-content-content'>group_1@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact_comment'>
                        <h1 className='contact_comment-title'>Leave A Comment</h1>
                        <p className='contact_comment-content'>Our staff will call back later and answer your questions.</p>
                        <form>
                            <input type="text" class="form-control" placeholder="Your name *" />
                            <div >
                                <input type="text" class="form-control" placeholder="Your mail *" />
                                <input type="text" class="form-control" placeholder="Your phone *" />
                            </div>
                            <input type="text" class="form-control" placeholder="Title *" />
                            <textarea type="text" class="form-control" placeholder="Comment *" />
                            <button type="submit" class="btn btn-primary">SEND FEEDBACK</button>
                        </form>
                    </div>
                </div>
                <div className='contactPageContainer_row2'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3237228635567!2d106.66367477451728!3d10.786499259008922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecb37e59e33%3A0xfe7c4d9f94f9e079!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1713580613318!5m2!1svi!2s" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>


            </div>
        </>

    );
}

export default ContactPage;