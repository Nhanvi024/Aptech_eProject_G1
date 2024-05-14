import './CheckoutCart.css'
import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';


function CheckoutCart(props) {
    const navigate = useNavigate()
    const { productCart, totalPayment } = useContext(DataContext)
    const { shipping, handleConfirmOrder, paymentMethod } = props
    return (

        <div className='checkout-cart col-sm-4'>
            <div className='checkout-cart-container'>
                <div className='checkout-cart-header'>
                    <h2>Cart: {productCart.length} product(s)</h2>
                </div>
                <div className='checkout-cart-body'>
                    <div className='checkout-cart-productsList'></div>
                    {productCart.map((item, index) => {
                        return (
                            <div key={index} className='checkout-cart-product'>
                                <div className='checkout-cart-item-col1'>
                                    <figure className='checkout-cart-item-imagebg'>
                                        <img className='checkout-cart-item-image' src={item.img} alt='productImage' />
                                    </figure>
                                    <p className='checkout-cart-item-qty'>{item.quantity}</p>
                                </div>
                                <div className='checkout-cart-item-col2'>
                                    <p className='checkout-cart-item-name'>{item.name}</p>
                                </div>
                                <div className='checkout-cart-item-col3'>
                                    <p className='checkout-cart-subtotal'>{(item.price * item.quantity).toFixed(2)}<sup>$</sup></p>

                                </div>
                            </div>
                        )
                    })

                    }
                </div>
                <div className='checkout-cart-footer'>
                    <div className='checkout-cart-footerrow1'>
                        <p className='checkout-cart-subtotalText'>Subtotal: </p>
                        <p className='checkout-cart-subtotalPrice'>{totalPayment.toFixed(2)}<sup> $</sup></p>
                    </div>
                    <div className='checkout-cart-footerrow2'>
                        <p className='checkout-cart-shippingText'>Shipping: </p>
                        <p className='checkout-cart-shippingPrice'>{shipping.fee.toFixed(2)}<sup> $</sup></p>
                    </div>
                    <div className='checkout-cart-footerrow3'>
                        <p className='checkout-cart-totalText'>Total: </p>
                        <p className='checkout-cart-totalPrice'>{(totalPayment + shipping.fee).toFixed(2)}<sup> $</sup></p>
                    </div>
                    <div className='checkout-cart-button'>
                        <button onClick={() => navigate('/cart')} className='checkout-cart-back'>Back To Cart</button>
                        {paymentMethod !== 'paypal-payment' &&
                        <button onClick={(e) => handleConfirmOrder(e)} className='checkout-cart-order'>Confirm Order</button>
                        }
                    </div>
                </div>
            </div>
     
        </div>
    );
}

export default CheckoutCart;