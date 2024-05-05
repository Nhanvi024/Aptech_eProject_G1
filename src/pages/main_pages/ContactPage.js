import './ContactPage.css'
import addressIcon from '../../assets/image/contact/address.svg'
import phoneIcon from '../../assets/image/contact/phone.svg'
import emailIcon from '../../assets/image/contact/email.svg'


import React, { useState } from 'react';

function ContactPage(props) {
    const [errors, setErrors] = useState({ nameError: '', emailError: '', titleError: '', commentError: '', phoneError: '' });
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        title: '',
        comment: ''
    })
    const handleInput = (e) => {
        let { name, value } = e.target
        handleValidate(name, value)
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e) => {

        if (Object.keys(errors).length !== 0) {
            e.preventDefault();
            alert('All field is required')
        } else {
            alert('Thank you for contacting us!!!')
        }
    }

    const handleValidate = (name, value) => {
        switch (name) {
            case 'name':
                if (value === '') {
                    errors.nameError = 'Name is required';
                } else if (value.length < 3) {
                    errors.nameError = 'Name must be greater than 3';
                } else {
                    delete errors.nameError;
                }
                break;
            case 'email':
                let emailRegEx = /^\w+@\w+\.[a-zA-Z]{2,4}$/;
                if (value === '') {
                    errors.emailError = ' Email is required';
                } else if (!emailRegEx.test(value)) {
                    errors.emailError = 'Email is not correct';
                } else {
                    delete errors.emailError;
                }
                break;
            case 'phone':
                let phoneRegEx = /^[0-9]{10,12}$/;
                if (value === '') {
                    errors.phoneError = 'Phone number is required';
                } else if (!phoneRegEx.test(value)) {
                    errors.phoneError = 'Phone number is not correct';
                } else {
                    delete errors.phoneError;
                }
                break;
            case 'title':
                if (value === '') {
                    errors.titleError = 'Title is required';
                } else {
                    delete errors.titleError;
                }
                break;
            case 'comment':
                if (value === '') {
                    errors.commentError = 'Comment is required';
                } else {
                    delete errors.commentError;
                }
                break;
            default:

        }
    }

    return (
        <>
            <img className='imageBanner'
                src='https://abbl.com/wp-content/uploads/2023/02/abbl-contact-banner.jpg' alt='banner'></img>

            <div className='contactPageContainer'>

                <div className='contactPageContainer_row1'>
                    <div className='contact_info'>
                        <h1 className='contact_info-title'>Contact Us</h1>
                        <p className='contact_info-produce'>We believe that progress can always be made by continuously driving growth for our
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
                            <a href='mailto:group_1@gmail.com'><img className='contact_info-icon' src={emailIcon} alt='addressIcon' /></a>
                            <div className='contact_info-content'>
                                <p className='contact_info-content-title'>Email:</p>
                                <a href='mailto:group_1@gmail.com' style={{ textDecoration: 'none' }}><p className='contact_info-content-content'>group_1@gmail.com</p></a>
                            </div>
                        </div>
                    </div>
                    <div className='contact_comment'>
                        <h1 className='contact_comment-title'>Leave A Comment</h1>
                        <p className='contact_comment-produce'>Our staff will call back later and answer your questions.</p>
                        <form className='contact_comment-form' onSubmit={(e) => handleSubmit(e)}>
                            <div className='mb-3'>
                                <input type=" text" className="contact_comment-input" placeholder="Your name *" name='name' onChange={(e) => handleInput(e)} />
                                <p className='text-danger'>{errors?.nameError}</p>
                            </div>
                            <div className='mb-3'>
                                <input type="text" className="contact_comment-input " placeholder="Your mail *" name='email' onChange={(e) => handleInput(e)} />
                                <p className='text-danger'>{errors?.emailError}</p>
                            </div>
                            <div className='mb-3'>
                                <input type="text" className="contact_comment-input " placeholder="Your phone *" name='phone' onChange={(e) => handleInput(e)} />
                                <p className='text-danger'>{errors?.phoneError}</p>
                            </div>
                            <div className='mb-3'>
                                <input type="text" className="contact_comment-input" placeholder="Title *" name='title' onChange={(e) => handleInput(e)} />
                                <p className='text-danger'>{errors?.titleError}</p>
                            </div>
                            <div className='mb-3'>
                                <textarea type="text" className="contact_comment-textarea" placeholder="Comment *" name='comment' onChange={(e) => handleInput(e)} />
                                <p className='text-danger'>{errors?.commentError}</p>
                            </div>
                            <button type="submit" className="contact_comment-send">SEND FEEDBACK</button>
                        </form>
                    </div>
                </div>
                <div className='contactPageContainer_row2'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3221072104034!2d106.66147947596484!3d10.786623231604377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f631cb7c4b7%3A0xd152d83450f68d15!2sFPT%20Aptech!5e0!3m2!1svi!2s!4v1714936012358!5m2!1svi!2s" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>


            </div>
        </>

    );
}

export default ContactPage;