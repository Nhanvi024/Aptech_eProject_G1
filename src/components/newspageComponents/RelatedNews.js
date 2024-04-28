import { useNavigate } from 'react-router-dom';
import './RelatedNews.css'

import React from 'react';

function RelatedNews(props) {
    const navigation = useNavigate()
    const { relatedNews } = props

    const handleSelectNews = (e) => {
        navigation(`/news/${e.currentTarget.name}`)
    }
    return (
        <div className='relatedNews'>
            <p className='relatedNews-name'>Related News:</p>
            <div className='relatedNews-container'>
                {relatedNews && relatedNews.map((item, index) => {
                    return (
                        <div key={index} className='relatedNews-newscard'>
                            <img onClick={(e) => handleSelectNews(e)} className='relatedNews-img' src={item.mainImage} name={item.id} />
                            <div className='relatedNews-content'>
                                <button onClick={(e) => handleSelectNews(e)} className='relatedNews-title'>{item.title} name={item.id}</button>
                                <p className='relatedNews-desc'>{item.description}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    );
}

export default RelatedNews;