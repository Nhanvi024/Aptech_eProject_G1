import './PaymentMethod.css'
import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import $ from 'jquery'

function PaymentMethod(props) {
    const { productCart, totalPayment } = useContext(DataContext)
const { shipping, setShipping, shippingMethods } = props

    return (
        <div className='checkout-payment col-sm-4'>
            <h2>Delivery</h2>
            {shippingMethods.map((item, index) => {
                return (
                    <div className="form-check">
                        <input onChange={() => setShipping(item)} type="radio" className="form-check-input" id={item.name} value={item.fee} checked={shipping.name === item.name} />
                        <label className="form-check-label" htmlFor={item.name}>{item.name}</label>
                    </div>
                )
            })
            }

            <h2>Payment methods</h2>
            <div className="form-check">
                <input type="radio" className="form-check-input" id="cash" name="payment" defaultChecked />
                <label className="form-check-label" htmlFor="cash">Cash on delivery (CCOD)</label>
            </div>
            <div className="form-check">
                <input onChange={(e)=>{
                    e.target.checked? $('#bank-info').slideDown() : $('#bank-info').slideUp()
                }} type="radio" className="form-check-input" id="bank" name="payment" />
                <label className="form-check-label" htmlFor="bank">Bank transfer</label>
                <div id='bank-info'>
                    <p className='bank-info-name'>Nhan</p>
                    <p className='bank-info-bank'>Techcombank</p>
                    <p className='bank-info-account'>123456789</p>
                </div>
            </div>
            <div className="form-check">
                <input type="radio" className="form-check-input" id="paypal" name="payment" />
                <label className="form-check-label" htmlFor="paypal">Paypal payment</label>
            </div>
        </div>
    );
}

export default PaymentMethod;