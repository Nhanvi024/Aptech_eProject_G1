import { useNavigate } from 'react-router-dom';
import './RelatedNews.css'
import EllipsisText from "react-ellipsis-text";


import React from 'react';

function RelatedNews(props) {
    const navigation = useNavigate()
    const { relatedNews } = props

    const handleSelectNews = (e) => {
        navigation(`/news/${e.target.name}`)
    }
    return (
        <div className='relatedNews'>
            <p className='relatedNews-name'>Related News:</p>
            <div className='relatedNews-container'>
                {relatedNews && relatedNews.map((item, index) => {
                    return (
                        index < 4 &&
                        <div key={index} className='relatedNews-newscard'>
                            <figure  >
                                <img className='relatedNews-img' onClick={(e) => handleSelectNews(e)} src={item.mainImage} name={item.id} alt='news'/>
                            </figure>
                            <div className='relatedNews-content'>
                                <button onClick={(e) => handleSelectNews(e)} className='relatedNews-title' name={item.id}><EllipsisText text={item.title} length={50}/></button>
                                <p className='relatedNews-desc' >Posted on {item.datePost} by {item.author}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    );
}

export default RelatedNews;