import CheckoutCart from '../../components/checkoutComponents/CheckoutCart';
import CheckoutInfo from '../../components/checkoutComponents/CheckoutInfo';
import PaymentMethod from '../../components/checkoutComponents/PaymentMethod';
import { DataContext } from '../../context/DataContext';
import './CheckOut.css'
import React, { useContext, useState } from 'react';

function CheckOut(props) {
    const [shipping, setShipping] = useState({
        name: 'Fast delivery',
        fee: 10
    })

    const shippingMethods = [
        {
            name: 'Fast delivery',
            fee: 10
        },
        {
            name: 'Economical delivery',
            fee: 5
        }
    ]
    return (
        <>
            <img className='imageBanner' src='https://sloboda-studio.com/wp-content/uploads/2020/08/Group-126.jpg.webp'></img>
            <div className='checkout-container'>
                <CheckoutInfo/>
                <PaymentMethod shipping={shipping} setShipping={setShipping} shippingMethods= {shippingMethods}/>
                <CheckoutCart shipping={shipping}/>
            </div>
        </>
    
    );
}

export default CheckOut;