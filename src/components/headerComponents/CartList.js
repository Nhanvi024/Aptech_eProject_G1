import './CartList.css'

import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';

import CartIcon from '../../assets/image/header/icon/cartIcon.svg'
import DeleteIcon from '../../assets/image/header/icon/delIcon.svg'

function CartList(props) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [product, setProduct] = useState([
        {
            id: "1",
            img: 'https://m.media-amazon.com/images/I/91XZWblXa0L._SY425_.jpg',
            name: "Wherever You Go, Go with All Your Heart Journal",
            price: "8.99",
            quantity: 2,
        },
        {
            id: "2",
            img: 'https://m.media-amazon.com/images/I/91XZWblXa0L._SY425_.jpg',
            name: "Wherever You Go, Go with All Your Heart Journal",
            price: "8.99",
            quantity: 3,
        },
        {
            id: "3",
            img: 'https://m.media-amazon.com/images/I/91XZWblXa0L._SY425_.jpg',
            name: "Wherever You Go, Go with All Your Heart Journal",
            price: "8.99",
            quantity: 3,
        },
        {
            id: "3",
            img: 'https://m.media-amazon.com/images/I/91XZWblXa0L._SY425_.jpg',
            name: "Wherever You Go, Go with All Your Heart Journal",
            price: "8.99",
            quantity: 3,
        },
    ])

    const handleDeleteItem = (idDelete) => {
        let result = product.filter(item => item.id !== idDelete)
        setProduct([...result])
    }

    useEffect(() => {
        let total = 0
        product.forEach((item) => {
            total = total + (+item.price * item.quantity)
        })
        setTotalPrice(total)
    }, [product])

    return (
        <div className='cardListContainer'>
            <div className='cartList-iconCart'>
                <img className='cardIcon' src={CartIcon} alt='cartImage' />
                {product.length ?
                    <div className='itemQty'>
                        {product.length}
                    </div> :
                    <></>
                }

            </div>


            < div className='cartList'>
                {product.length ?
                    <>
                        <div className='cartList_list'>
                            {product.map((item, index) => {
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
                                <p className='cartList_bottom-sumPrice'>{totalPrice}<sup> $</sup></p>
                            </div>
                            <button className='cartList_bottom-checkout'> Check Out</button>
                        </div>
                    </> :
                    <>
                        <p className='cartList_list-noitem'>No product into cart</p>
                    </>
                }

            </div>
        </div >
    );
}

export default CartList;