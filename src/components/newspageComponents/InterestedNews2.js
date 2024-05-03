import { useNavigate } from 'react-router-dom';
import './InterestedNews2.css'

import React from 'react';
import EllipsisText from "react-ellipsis-text";

function InterestedNews2(props) {
    const navigation = useNavigate()
    const { newsReadLot } = props

    const handleSelectNews = (e) => {
        navigation(`/news/${e.currentTarget.name}`)
    }
    return (

        <div className='interestedNews2-newsReadLot'>
            <h1 className='interestedNews2-newsReadLot-name'>You may be interested</h1>
            <div className='interestedNews2-newsReadLot-container'>
                {newsReadLot && newsReadLot.map((item, index) => {
                    return (
                        index < 4 &&
                        <div key={index} className='interestedNews2-newsReadLot-newscard'>
                            <button onClick={(e) => handleSelectNews(e)} className='interestedNews2-newsReadLot-nav' name={item.id}>
                                <img className='interestedNews2-newsReadLot-img' src={item.mainImage} alt='news'/>
                                <p className='interestedNews2-newsReadLot-title' >{item.title}</p>
                            </button>
                            <p className='interestedNews2-newsReadLot-posted'>Posted on {item.datePost} by {item.author}</p>
                            <p className='interestedNews2-newsReadLot-content'><EllipsisText text={item.description} length={200} /></p>
                        </div>
                    )

                })}

            </div>
        </div>
    );
}

export default InterestedNews2;