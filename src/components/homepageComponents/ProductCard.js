import React from 'react';
import './ProductCard.css'
function ProductCard(props) {
    let { item } = props
    return (
        <div className='text-center mx-auto col homepage-productCard'>
            <div>
                <div className='homepage-productCard-imgContainer'>
                    <img className='homepage-productCard-img' src={item.image.mainImage}></img>
        
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