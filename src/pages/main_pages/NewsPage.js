import { Link, useNavigate } from 'react-router-dom';
import './NewsPage.css'

import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';


function NewsPage(props) {

    const navigation = useNavigate()

    let [news, setNews] = useState([])
    const { newsUpdate } = news

    const [idNews, setIdNews] = useState({
        news0: 0,
        news1: 1,
        news2: 2,
        news3: 3,
        news4: 4,

    })

    useEffect(() => {
        fetch('/data/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

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

    const handleSelectNews = (e) => {
        news = e.target.name;
        navigation(`/news/${news}`)
    }

    return (
        <>

            <img className='imageBanner'
                src='https://www.olgcdbb.catholic.edu.au/wp-content/uploads/2018/04/latest-news-banner.jpg' alt='banner'></img>
            {/* src='https://phomit03.github.io/EProject1-RyanaCalendars/pages/NEWS/img/banner.jpg' alt='banner'></img> */}


            <div className='newsPageContainer'>
                <section>
                    <div className='newsPage-newsUpdate'>
                        <h1 className='newsPage-newsUpdate-name'>News Update</h1>
                        {newsUpdate &&
                            <div className='newsPage-newsUpdate-container'>
                                <div onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news1'>
                                    <img className='newsPage-newsUpdate-news1-img' src={newsUpdate[idNews.news0].mainImage} />
                                    <button className='newsPage-newsUpdate-news1-title' name={newsUpdate[idNews.news0].id} >{newsUpdate[idNews.news0].title}</button>
                                </div>
                                <div className='newsPage-newsUpdate-side'>
                                    <div onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news2'>
                                        <img className='newsPage-newsUpdate-news2-img' src={newsUpdate[idNews.news1].mainImage} />
                                        <button className='newsPage-newsUpdate-news2-title' name={newsUpdate[idNews.news1].id} >{newsUpdate[idNews.news1].title}</button>
                                    </div>
                                    <div onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news3'>
                                        <img className='newsPage-newsUpdate-news3-img' src={newsUpdate[idNews.news2].mainImage} />
                                        <button className='newsPage-newsUpdate-news3-title' name={newsUpdate[idNews.news2].id} >{newsUpdate[idNews.news2].title}</button>
                                    </div>
                                    <div onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news4'>
                                        <img className='newsPage-newsUpdate-news4-img' src={newsUpdate[idNews.news3].mainImage} />
                                        <button className='newsPage-newsUpdate-news4-title' name={newsUpdate[idNews.news3].id} >{newsUpdate[idNews.news3].title}</button>
                                    </div>
                                    <div onClick={(e) => handleSelectNews(e)} className='newsPage-newsUpdate-news5'>
                                        <img className='newsPage-newsUpdate-news5-img' src={newsUpdate[idNews.news4].mainImage} />
                                        <button className='newsPage-newsUpdate-news5-title' name={newsUpdate[idNews.news4].id} >{newsUpdate[idNews.news4].title}</button>
                                    </div>
                                </div>
                            </div>
                        }
                        <div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>


                    </div>

                    {/* {newsUpdate.map((item, index) => {
                    return (
                        <div key={index} onClick={(e) => handleSelectNews(e)} >
                            <img src={item.mainImage} />
                            <p>Post on {item.datePost} by {item.author}</p>
                            <button name={item.id} >{item.title}</button>
                        </div>
                    )
                })
                } */}

                </section>
            </div>
        </>
    );
}

export default NewsPage;