import './NewsUpdate.css'

import React, { useEffect, useState } from 'react';

function NewsUpdate(props) {
    const { newsUpdate, handleSelectNews } = props

    const [idNews, setIdNews] = useState({
        news0: 0,
        news1: 1,
        news2: 2,
        news3: 3,
        news4: 4,
    })
    useEffect(() => {
        const timerId = setInterval(() => {
            idNews.news0 < 4 ? idNews.news0++ : idNews.news0 = 0;
            idNews.news1 < 4 ? idNews.news1++ : idNews.news1 = 0;
            idNews.news2 < 4 ? idNews.news2++ : idNews.news2 = 0;
            idNews.news3 < 4 ? idNews.news3++ : idNews.news3 = 0;
            idNews.news4 < 4 ? idNews.news4++ : idNews.news4 = 0;
            setIdNews({ ...idNews })
        }, 5000)
        return () => clearInterval(timerId)
    }, [])


    return (
        <div className='newsPage-newsUpdate'>
            <h1 className='newsPage-newsUpdate-name'>NEWS UPDATE</h1>
            {newsUpdate &&
                <div className='newsPage-newsUpdate-container'>
                    <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news1' name={newsUpdate[idNews.news0].id}>
                        <img className='newsPage-newsUpdate-news1-img' src={newsUpdate[idNews.news0].mainImage} alt='news'/>
                        <div className='newsPage-newsUpdate-news1-title' >
                            <p className='newsPage-newsUpdate-news-news'>News</p>
                            <p className='newsPage-newsUpdate-news1-newstitle'>{newsUpdate[idNews.news0].title}</p></div>
                    </button>
                    <div className='newsPage-newsUpdate-side'>
                        <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news2'name={newsUpdate[idNews.news1].id}>
                            <img className='newsPage-newsUpdate-news2-img' src={newsUpdate[idNews.news1].mainImage} alt='news'/>
                            <div className='newsPage-newsUpdate-news2-title'>
                                <p className='newsPage-newsUpdate-news-news' >News</p>
                                <p className='newsPage-newsUpdate-news2-newstitle'>{newsUpdate[idNews.news1].title}</p></div>
                        </button>
                        <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news3'  name={newsUpdate[idNews.news2].id}>
                            <img className='newsPage-newsUpdate-news3-img' src={newsUpdate[idNews.news2].mainImage} alt='news'/>
                            <div className='newsPage-newsUpdate-news3-title' >
                                <p className='newsPage-newsUpdate-news-news'>News</p>
                                <p className='newsPage-newsUpdate-news3-newstitle'>{newsUpdate[idNews.news2].title}</p></div>
                        </button>
                        <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news4' name={newsUpdate[idNews.news3].id} >
                            <img className='newsPage-newsUpdate-news4-img' src={newsUpdate[idNews.news3].mainImage} alt='news'/>
                            <div className='newsPage-newsUpdate-news4-title'>
                                <p className='newsPage-newsUpdate-news-news'>News</p>
                                <p className='newsPage-newsUpdate-news4-newstitle'>{newsUpdate[idNews.news3].title}</p></div>
                        </button>
                        <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news5' name={newsUpdate[idNews.news4].id} >
                            <img className='newsPage-newsUpdate-news5-img' src={newsUpdate[idNews.news4].mainImage} alt='news'/>
                            <div className='newsPage-newsUpdate-news5-title'>
                                <p className='newsPage-newsUpdate-news-news'>News</p>
                                <p className='newsPage-newsUpdate-news5-newstitle'>{newsUpdate[idNews.news4].title}</p></div>
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default NewsUpdate;