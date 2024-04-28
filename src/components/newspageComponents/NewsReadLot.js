import './NewsReadLot.css'

import React from 'react';
import EllipsisText from "react-ellipsis-text";

function NewsReadLot(props) {
    const { newsReadLot, handleSelectNews } = props

    return (

        <div className='newsPage-newsReadLot'>
            <h1 className='newsPage-newsReadLot-name'>NEWS READ A LOT</h1>
            <div className='newsPage-newsReadLot-container'>
                {newsReadLot && newsReadLot.map((item, index) => {
                    return (
                        index < 4 &&
                        <div key={index} className='newsPage-newsReadLot-newscard'>
                            <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsReadLot-nav' name={item.id}>
                                <img className='newsPage-newsReadLot-img' src={item.mainImage} alt='news'/>
                                <p className='newsPage-newsReadLot-title' >{item.title}</p>
                            </button>
                            <p className='newsPage-newsReadLot-posted'>Posted on {item.datePost} by {item.author}</p>
                            <p className='newsPage-newsReadLot-content'><EllipsisText text={item.description} length={"200"} /></p>
                        </div>
                    )

                })}

            </div>
        </div>
    );
}

export default NewsReadLot;