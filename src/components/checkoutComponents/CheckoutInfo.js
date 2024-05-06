import './CheckoutInfo.css'
import React from 'react';
import Logo from '../../components/headerComponents/Logo';

function CheckoutInfo(props) {
    return (
        <div className='checkout-info col-sm-4'>
            <Logo />
            <h2 className='checkout-info-title'>Order Information</h2>
            <form>
                <div className="mb-3 mt-3">
                    <input type="name" className="checkout-info-input" id="name" placeholder="Full Name" name="name" />
                </div>
                <div className="mb-3 mt-3">
                    <input type="email" className="checkout-info-input" id="email" placeholder="Email" name="email" />
                </div>
                <div className="mb-3">
                    <input type="phone" className="checkout-info-input" id="phone" placeholder="Phone Number" name="phone" />
                </div>
                <div className="mb-3">
                    <input type="address" className="checkout-info-input" id="address" placeholder="Address" name="address" />
                </div>
                <textarea className="checkout-info-notes" id="notes" placeholder='Notes:'></textarea>
            </form>
        </div>
    );
}

export default CheckoutInfo;