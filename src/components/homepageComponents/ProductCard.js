import React from 'react';
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProductCard(props) {
    let { item } = props
    return (
        <div className='text-center mx-auto col homepage-productCard'>
            <div>
                <div className='homepage-productCard-imgContainer'>
                    <img className='homepage-productCard-img' src={item.image.mainImage}></img>
                    <div className='productCard-button-container'>
                    <button className='productCard-button1 fas fa-info'></button>
                    <button className='productCard-button1 fas fa-cart-plus'></button>
                    <button className='productCard-button1 fas fa-eye'></button>
                    </div>
        
                </div>
                <div>
                    <div className='homepage-productCard-name'>{item.name}</div>
                    <div className='homepage-productCard-price'>${item.price}</div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;