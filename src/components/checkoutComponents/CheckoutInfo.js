import './CheckoutInfo.css'
import React from 'react';
import Logo from '../../components/headerComponents/Logo';

function CheckoutInfo(props) {
    const { handleInput, errors } = props

    return (
        <div className='checkout-info'>
            <div className='checkout-info-container'>
                <h2 className='checkout-info-title'>Order Information</h2>
                <form>
                    <div className="mb-3 mt-3">
                        <input onChange={(e) => handleInput(e)} type="name" className="checkout-info-input" id="name" placeholder="Full Name" name="name" />
                        <p className='text-danger'>{errors?.nameError}</p>
                    </div>
                    <div className="mb-3 mt-3">
                        <input onChange={(e) => handleInput(e)} type="email" className="checkout-info-input" id="email" placeholder="Email" name="email" />
                        <p className='text-danger'>{errors?.emailError}</p>

                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => handleInput(e)} type="phone" className="checkout-info-input" id="phone" placeholder="Phone Number" name="phone" />
                        <p className='text-danger'>{errors?.phoneError}</p>

                    </div>
                    <div className="mb-3">
                        <input onChange={(e) => handleInput(e)} type="address" className="checkout-info-input" id="address" placeholder="Address" name="address" />
                        <p className='text-danger'>{errors?.addressError}</p>
                    </div>
                    <textarea onChange={(e) => handleInput(e)} className="checkout-info-notes" id="notes" placeholder='Notes:'></textarea>
                </form>
            </div>
        </div>
    );
}

export default CheckoutInfo;