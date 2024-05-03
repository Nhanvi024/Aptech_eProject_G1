import Logo from '../../components/headerComponents/Logo';
import { DataContext } from '../../context/DataContext';
import './CheckOut.css'
import React, { useContext, useState } from 'react';

function CheckOut(props) {
    const { productCart, totalPayment } = useContext(DataContext)
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
                <div className='checkout-info col-sm-4'>
                    <Logo />
                    <h2>Order Information</h2>
                    <form>
                        <div className="mb-3 mt-3">
                            <input type="name" className="form-control" id="name" placeholder="Full Name" name="name" />
                        </div>
                        <div className="mb-3 mt-3">
                            <input type="email" className="form-control" id="email" placeholder="Email" name="email" />
                        </div>
                        <div className="mb-3">
                            <input type="phone" className="form-control" id="phone" placeholder="Phone Number" name="phone" />
                        </div>
                        <div className="mb-3">
                            <input type="address" className="form-control" id="address" placeholder="Address" name="address" />
                        </div>
                        <textarea id="notes" className="form-control"></textarea>
                    </form>
                </div>
                <div className='checkout-payment col-sm-4'>
                    <h2>Delivery</h2>
                    {shippingMethods.map((item, index) => {
                        return (
                            <div className="form-check">
                                <input onChange={()=>setShipping(item)} type="radio" className="form-check-input" id={item.name} value={item.fee} checked={shipping.name === item.name}/>
                                <label className="form-check-label" htmlFor={item.name}>{item.name}</label>
                            </div>
                        )
                    })
                    }

                    <h2>Payment methods</h2>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="cash" name="payment" defaultChecked/>
                        <label className="form-check-label" htmlFor="cash">Cash on delivery (CCOD)</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="bank" name="payment"/>
                        <label className="form-check-label" htmlFor="bank">Bank transfer</label>
                    </div>
                </div>
                <div className='checkout-cart col-sm-4'>
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
                            <p className='checkout-cart-totalPrice'>{(totalPayment+shipping.fee).toFixed(2)}<sup> $</sup></p>
                        </div>
                        <button className='checkout-cart-order'>Confirm Ordder</button>
                    </div>

                </div>
            </div>
        </>

    );
}

export default CheckOut;