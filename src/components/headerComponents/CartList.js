import './CartList.css'

import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

import CartIcon from '../../assets/image/header/icon/cartIcon.svg'

function CartList(props) {
    // const {cartListQty} = useContext(DataContext)
    const cartListQty = 1;
    return (
        <div className='cardListContainer'>
           
            <img className='cardIcon' src={CartIcon} alt='cartImage'/>
            <div className='itemQty'>
                {cartListQty}
            </div>
            <div className='cartList'>
                <div className='cartList_list'>
                    <div className='cartList_list-item'>

                    </div>
                    <div className='cartList_list-item'>
                        
                    </div>
                    <div className='cartList_list-item'>
                        
                    </div>
            
                </div>
                
                <div className='cartList_bottom'>
                <div className='cartList_bottom-sum'>
                    <p className='cartList_bottom-sumText'>Sum: </p>
                    <p className='cartList_bottom-sumPrice'>123456</p>
                </div>
                <button className='cartList_bottom-checkout'> Check Out</button>
                </div>
                
                
            </div>
        </div>
    );
}

export default CartList;