import './CartList.css'

import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';

import CartIcon from '../../assets/image/header/icon/cartIcon.svg'
import DeleteIcon from '../../assets/image/header/icon/delIcon.svg'
import { useNavigate } from 'react-router-dom';


function CartList(props) {
    const navigate = useNavigate()
    const {productCart, handleDeleteItem, totalPayment} = useContext(DataContext)

    return (
        <div className='cartListContainer'>
            <div className='cartList-iconCart'>
                <img onClick={()=>navigate('/cart')} className='cartIcon' src={CartIcon} alt='cartImage' />
                {productCart.length ?
                    <div className='itemQty'>
                        {productCart.length}
                    </div> :
                    <></>
                }

            </div>

            < div className='cartList'>
                {productCart.length ?
                    <>
                        <div className='cartList_list'>
                            {productCart.map((item, index) => {
                                return (
                                    <div key={index} className='cartList_list-item'>
                                        <div className='cartList_list-item-col1'>
                                            <img onClick={() => handleDeleteItem(item.id)} className='cartList_list-item-delete' src={DeleteIcon} alt='deleteIcon' />
                                            <figure className='cartList_list-item-imagebg'>
                                                <img className='cartList_list-item-image' src={item.img} alt='productImage' />
                                            </figure>
                                        </div>
                                        <div className='cartList_list-item-col2'>
                                            <p className='cartList_list-item-name'>{item.name}</p>
                                            <div className='cartList_list-item-pricecontain'>
                                                <p className='cartList_list-item-price'>{item.price} <sup>$</sup></p>
                                                <p className='cartList_list-item-qty'>x{item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className='cartList_bottom'>
                            <div className='cartList_bottom-sum'>
                                <p className='cartList_bottom-sumText'>Sum: </p>
                                <p className='cartList_bottom-sumPrice'>{totalPayment.toFixed(2)}<sup> $</sup></p>
                            </div>
                            <button className='cartList_bottom-checkout'> Check Out</button>
                        </div>
                    </> :
                    <>
                        <p className='cartList_list-noitem'>No product in cart !</p>
                    </>
                }

            </div>
        </div >
    );
}

export default CartList;