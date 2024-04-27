import { Link, useNavigate } from 'react-router-dom';
import './NewsPage.css'

import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import NewsReadLot from '../../components/newspageComponents/NewsReadLot';
import HotNews from '../../components/newspageComponents/HotNews';
import NewsSeeMore from '../../components/newspageComponents/NewsSeeMore';
import NewsUpdate from '../../components/newspageComponents/NewsUpdate';


function NewsPage(props) {
    const navigation = useNavigate()
    const [news, setNews] = useState([])
    const { newsUpdate, newsReadLot } = news

    useEffect(() => {
        fetch('/data/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    const handleSelectNews = (e) => {
        navigation(`/news/${e.currentTarget.name}`)
    }

    return (
        <>

            <img className='imageBanner'
                src='https://www.olgcdbb.catholic.edu.au/wp-content/uploads/2018/04/latest-news-banner.jpg' alt='banner'></img>
            {/* src='https://phomit03.github.io/EProject1-RyanaCalendars/pages/NEWS/img/banner.jpg' alt='banner'></img> */}
            <div className='newsPageContainer'>
                
                    <NewsUpdate newsUpdate={newsUpdate} handleSelectNews={handleSelectNews} />
                    <NewsReadLot newsReadLot={newsReadLot} handleSelectNews={handleSelectNews} />
                    <HotNews hotNews={newsUpdate} handleSelectNews={handleSelectNews}/>
                    <NewsSeeMore newsSeeMore={newsUpdate} handleSelectNews={handleSelectNews}/>
               
            </div>
        </>
    );
}

export default NewsPage;