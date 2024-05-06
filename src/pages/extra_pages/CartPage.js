import './CartPage.css'

import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

import DeleteIcon from '../../assets/image/header/icon/delIcon.svg'
import { Link } from 'react-router-dom';


function CartPage(props) {

    const { productCart, setProductCart, handleDeleteItem, totalPayment } = useContext(DataContext)

    const handleChangeQuantity = (e, product) => {
        product.quantity = e.target.value > 0 && e.target.value
        if (e.key === 'Enter') {
            e.target.blur()
        }
        setProductCart(productCart.map(item => {
            return item.id === product.id ? product : item
        }))
    }
    
    const handleBlurQuantity = (e, product) => {
        product.quantity = e.target.value > 0 ? e.target.value : 1
        setProductCart(productCart.map(item => {
            return item.id === product.id ? product : item
        }))
    }

    return (
        <>
            <img className='imageBanner'
                src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/bg_breadcrumb.jpg?1709874054823' alt='banner'></img>
            <div className='cartPage-container'>

                <h1 className='cartPage-name'>SHOPPING CART</h1>
                {productCart.length ?
                    <>
                        <table className='cartPage-table'>
                            <thead>
                                <tr>
                                    <th className='cartPage-delete'></th>
                                    <th className='cartPage-product'>Product</th>
                                    <th className='cartPage-price'>Price</th>
                                    <th className='cartPage-quantity'>Quantity</th>
                                    <th className='cartPage-subtotal'>SubTotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productCart.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='cartPage-td-delete'>
                                                <img
                                                    onClick={() => handleDeleteItem(item.id)}
                                                    className='cartPage-item-delete'
                                                    src={DeleteIcon} alt='deleteIcon' />
                                            </td>
                                            <td className='cartPage-td-product'>
                                                <figure className='cartPage-item-imagebg'>
                                                    <img className='cartPage-item-image' src={item.img} alt='productImage' />
                                                </figure>
                                                <p className='cartPage-item-name'>{item.name}</p>
                                            </td>
                                            <td className='cartPage-td-price'><p className='cartPage-item-price'>{item.price} <sup>$</sup></p></td>
                                            <td className='cartPage-td-quantity'>
                                                <input
                                                    onChange={(e) => handleChangeQuantity(e, item)}
                                                    onKeyDown={(e) => handleChangeQuantity(e, item)}
                                                    onBlur={(e) => handleBlurQuantity(e, item)}
                                                    min={1}
                                                    type='number'
                                                    className='cartPage-item-qty'
                                                    value={item.quantity} />
                                            </td>
                                            <td className='cartPage-td-subtotal'><p className='cartPage-item-subtotal'>{(item.price * item.quantity).toFixed(2)}<sup>$</sup></p></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className='cartPage-bottom-sum'>
                            <p className='cartPage-bottom-sumText'>Total: </p>
                            <p className='cartPage-bottom-sumPrice'>{totalPayment.toFixed(2)}<sup> $</sup></p>
                        </div>
                        <div className='cartPage-bottom-button'>
                            <Link className='cartPage-bottom-back' to='/'> Back to the store</Link>
                            <Link className='cartPage-bottom-checkout' to='/checkout'> Check Out</Link>
                        </div>
                    </> :
                    <>
                        <p className='cartPage-noitem'>No product in cart !</p>
                        <Link className='cartPage-bottom-back' to='/'>Back to the store</Link>
                    </>
                }
            </div>
        </>

    );
}

export default CartPage;