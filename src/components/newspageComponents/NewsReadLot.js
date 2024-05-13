import './NewsReadLot.css'

import React, { useEffect, useState } from 'react';
import EllipsisText from "react-ellipsis-text";

function NewsReadLot(props) {
    const { newsReadLot, handleSelectNews } = props
    const [newsShow, setNewsShow] = useState({
        news1: 0,
        news2: 1,
        news3: 2,
        news4: 3
    })

    useEffect(() => {
        const timerId = setInterval(() => {
            newsShow.news1 >= newsReadLot.length - 1 ? newsShow.news1 = 0 : newsShow.news1++
            newsShow.news2 >= newsReadLot.length - 1 ? newsShow.news2 = 0 : newsShow.news2++
            newsShow.news3 >= newsReadLot.length - 1 ? newsShow.news3 = 0 : newsShow.news3++
            newsShow.news4 >= newsReadLot.length - 1 ? newsShow.news4 = 0 : newsShow.news4++
            setNewsShow({ ...newsShow })
        }, 6000)
        return () => clearInterval(timerId)
    }, [])

    const handleLPrev = () => {
        newsShow.news1 <= 0 ? newsShow.news1 = newsReadLot.length - 1 : newsShow.news1--
        newsShow.news2 <= 0 ? newsShow.news2 = newsReadLot.length - 1 : newsShow.news2--
        newsShow.news3 <= 0 ? newsShow.news3 = newsReadLot.length - 1 : newsShow.news3--
        newsShow.news4 <= 0 ? newsShow.news4 = newsReadLot.length - 1 : newsShow.news4--
        setNewsShow({ ...newsShow })
    }
    const handleLNext = () => {
        newsShow.news1 >= newsReadLot.length - 1 ? newsShow.news1 = 0 : newsShow.news1++
        newsShow.news2 >= newsReadLot.length - 1 ? newsShow.news2 = 0 : newsShow.news2++
        newsShow.news3 >= newsReadLot.length - 1 ? newsShow.news3 = 0 : newsShow.news3++
        newsShow.news4 >= newsReadLot.length - 1 ? newsShow.news4 = 0 : newsShow.news4++
        setNewsShow({ ...newsShow })
    }
    return (

        <div className='newsPage-newsReadLot1'>
            <h1 className='newsPage-newsReadLot-name'>NEWS READ A LOT</h1>
            <div className='newsPage-newsReadLot-container'>
                {newsReadLot && newsReadLot.map((item, index) => {
                    return (
                        index === newsShow.news1
                        &&
                        <div key={index} className='newsPage-newsReadLot-newscard'>
                            <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsReadLot-nav' name={item.id}>
                                <img className='newsPage-newsReadLot-img' src={item.mainImage} alt='news' />
                                <p className='newsPage-newsReadLot-title' >{item.title}</p>
                            </button>
                            <p className='newsPage-newsReadLot-posted'>Posted on {item.datePost} by {item.author}</p>
                            <p className='newsPage-newsReadLot-content'><EllipsisText text={item.description} length={200} /></p>
                        </div>
                    )

                })}
                {newsReadLot && newsReadLot.map((item, index) => {
                    return (
                        index === newsShow.news2
                        &&
                        <div key={index} className='newsPage-newsReadLot-newscard'>
                            <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsReadLot-nav' name={item.id}>
                                <img className='newsPage-newsReadLot-img' src={item.mainImage} alt='news' />
                                <p className='newsPage-newsReadLot-title' >{item.title}</p>
                            </button>
                            <p className='newsPage-newsReadLot-posted'>Posted on {item.datePost} by {item.author}</p>
                            <p className='newsPage-newsReadLot-content'><EllipsisText text={item.description} length={200} /></p>
                        </div>
                    )

                })}  {newsReadLot && newsReadLot.map((item, index) => {
                    return (
                        index === newsShow.news3
                        &&
                        <div key={index} className='newsPage-newsReadLot-newscard'>
                            <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsReadLot-nav' name={item.id}>
                                <img className='newsPage-newsReadLot-img' src={item.mainImage} alt='news' />
                                <p className='newsPage-newsReadLot-title' >{item.title}</p>
                            </button>
                            <p className='newsPage-newsReadLot-posted'>Posted on {item.datePost} by {item.author}</p>
                            <p className='newsPage-newsReadLot-content'><EllipsisText text={item.description} length={200} /></p>
                        </div>
                    )

                })}  {newsReadLot && newsReadLot.map((item, index) => {
                    return (
                        index === newsShow.news4
                        &&
                        <div key={index} className='newsPage-newsReadLot-newscard'>
                            <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsReadLot-nav' name={item.id}>
                                <img className='newsPage-newsReadLot-img' src={item.mainImage} alt='news' />
                                <p className='newsPage-newsReadLot-title' >{item.title}</p>
                            </button>
                            <p className='newsPage-newsReadLot-posted'>Posted on {item.datePost} by {item.author}</p>
                            <p className='newsPage-newsReadLot-content'><EllipsisText text={item.description} length={200} /></p>
                        </div>
                    )

                })}
                <button onClick={() => handleLPrev()} class="carousel-control-prev" type="button">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button onClick={() => handleLNext()} class="carousel-control-next" type="button">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
}

export default NewsReadLot;