import './NewsPage.css'

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NewsReadLot from '../../components/newspageComponents/NewsReadLot';
import HotNews from '../../components/newspageComponents/HotNews';
import NewsSeeMore from '../../components/newspageComponents/NewsSeeMore';
import NewsUpdate from '../../components/newspageComponents/NewsUpdate';


function NewsPage(props) {
    const navigation = useNavigate()
    const [news, setNews] = useState([])
    const [ typeNews, setTypeNews ] = useState(
        {
            newsUpdate: []  ,
            newsReadLot: [],
            hotNews: [],
            newsSeeMore: [],
        }
    )
    useEffect(() => {
        fetch('/data/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    useEffect(()=>{
        typeNews.newsUpdate = news && news.filter(item=>item.type.newsUpdate === true)
        typeNews.newsReadLot = news && news.filter(item=>item.type.newsReadLot === true)
        typeNews.hotNews = news && news.filter(item=>item.type.hotNews === true)
        typeNews.newsSeeMore = news && news.filter(item=>item.type.readMore === true)
        setTypeNews({...typeNews})
    },[news])

    const handleSelectNews = (e) => {
        navigation(`/news/${e.currentTarget.name}`)
    }

    return (
        <>

            <img className='imageBanner'
                src='https://www.olgcdbb.catholic.edu.au/wp-content/uploads/2018/04/latest-news-banner.jpg' alt='banner'></img>
            {/* src='https://phomit03.github.io/EProject1-RyanaCalendars/pages/NEWS/img/banner.jpg' alt='banner'></img> */}
            <div className='newsPageContainer'>
                
            {typeNews.newsUpdate.length && <NewsUpdate newsUpdate={typeNews.newsUpdate} handleSelectNews={handleSelectNews} />}
            {typeNews.newsReadLot.length && <NewsReadLot newsReadLot={typeNews.newsReadLot} handleSelectNews={handleSelectNews} />}
            {typeNews.hotNews.length && <HotNews hotNews={typeNews.hotNews} handleSelectNews={handleSelectNews}/>}
            {typeNews.newsSeeMore.length && <NewsSeeMore newsSeeMore={typeNews.newsSeeMore} handleSelectNews={handleSelectNews}/>}
               
            </div>
        </>
    );
}

export default NewsPage;