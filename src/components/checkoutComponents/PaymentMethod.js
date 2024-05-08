import './PaymentMethod.css'
import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import $ from 'jquery'
import PaypalPayment from './PaypalPayment';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function PaymentMethod(props) {
    const { shipping, setShipping, shippingMethods, errors } = props

    const handleChangePayment = (e) => {
        e.target.id === 'bank' ? $('#bank-info').slideDown() : $('#bank-info').slideUp()
        e.target.id === 'paypal' ? $('#paypal-info').slideDown() : $('#paypal-info').slideUp()
    }
    return (
        <div className='checkout-payment'>
            <div className='checkout-delivery'>
                <h2>Delivery</h2>
                {shippingMethods.map((item, index) => {
                    return (
                        <div key={index} className="form-check checkout-delivery-option">
                            <input onChange={() => setShipping(item)} type="radio" className="particles-checkbox" id={item.name} value={item.fee} checked={shipping.name === item.name} />
                            <label className="form-check-label" htmlFor={item.name}>{item.name}</label>
                        </div>
                    )
                })
                }
            </div>
            <div className='checkout-paymentMethod'>
                <h2>Payment methods</h2>
                <div className="form-check checkout-payment-option">
                    <input onChange={(e) => handleChangePayment(e)} type="radio" className="particles-checkbox" id="cash" name="payment" defaultChecked />
                    <label className="form-check-label" htmlFor="cash">Cash on delivery (CCOD)</label>
                </div>
                <div className="form-check checkout-payment-option">
                    <input onChange={(e) => handleChangePayment(e)} type="radio" className="particles-checkbox" id="bank" name="payment" />
                    <label className="form-check-label" htmlFor="bank">Bank transfer</label>

                </div>
                <div className="form-check checkout-payment-option">
                    <input onChange={(e) => handleChangePayment(e)} type="radio" className="particles-checkbox" id="paypal" name="payment" />
                    <label className="form-check-label" htmlFor="paypal">Paypal payment</label>
                </div>
                <div className='payment-info'>
                <div id='bank-info'>
                    <p className=''>Store staff will contact you to assist and confirm payment after you confirm the order. Bank information is below:</p>
                    <p className='bank-info-name'><span className='bank-info-title'>Account Name:</span><span className='bank-info-info'>Ryana Store</span></p>
                    <p className='bank-info-bank'><span className='bank-info-title'>Bank:</span><span className='bank-info-info'>Vietcombank</span></p>
                    <p className='bank-info-account'><span className='bank-info-title'>Account Number:</span><span className='bank-info-info'>0123456789</span></p>
                </div>
                <div id='paypal-info'>
                    {/* <PaypalPayment shipping={shipping} errors={errors}/> */}
                </div>
                <div style={{ color: 'red' }}>Please ensure your order information is correct</div>
            </div>
            </div>

          

        </div>
    );
}

export default PaymentMethod;