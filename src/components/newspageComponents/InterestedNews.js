import { useNavigate } from 'react-router-dom';
import './InterestedNews.css'

import React from 'react';
import EllipsisText from "react-ellipsis-text";


function InterestedNews(props) {
    const navigation = useNavigate()
    const { iterestedNews } = props

    const handleSelectNews = (e) => {
        navigation(`/news/${e.currentTarget.name}`)
    }
    return (
        <div className='iterestedNews'>
            <p className='iterestedNews-name'>You may be interested:</p>
            <div className='iterestedNews-container'>
                {iterestedNews && iterestedNews.map((item, index) => {
                    return (
                        index < 4 &&
                        <div key={index} className='iterestedNews-newscard'>
                            <button onClick={(e) => handleSelectNews(e)} className='iterestedNews-nav' name={item.id}>
                                <img className='iterestedNews-img' src={item.mainImage} alt='news'/>
                                <p className='iterestedNews-title' >{item.title}</p>
                            </button>
                            <p className='iterestedNews-posted'>Posted on {item.datePost} by {item.author}</p>
                            <p className='iterestedNews-content'><EllipsisText text={item.description} length={200} /></p>
                        </div>
                    )
                })}

            </div>
        </div>

    );
}

export default InterestedNews;