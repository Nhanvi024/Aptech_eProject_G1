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
        </div>
    );
}

export default CartList;