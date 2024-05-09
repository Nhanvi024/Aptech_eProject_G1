import './NewsPage.css'

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NewsReadLot from '../../components/newspageComponents/NewsReadLot';
import HotNews from '../../components/newspageComponents/HotNews';
import NewsSeeMore from '../../components/newspageComponents/NewsSeeMore';
import NewsUpdate from '../../components/newspageComponents/NewsUpdate';
import { motion } from 'framer-motion';

function NewsPage(props) {
    const navigation = useNavigate()
    const [news, setNews] = useState([])
    const [ statusNews, setStatusNews ] = useState(
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
        statusNews.newsUpdate = news && news.filter(item=>item.status.newsUpdate === true)
        statusNews.newsReadLot = news && news.filter(item=>item.status.newsReadLot === true)
        statusNews.hotNews = news && news.filter(item=>item.status.hotNews === true)
        statusNews.newsSeeMore = news && news.filter(item=>item.status.readMore === true)
        setStatusNews({...statusNews})
    },[news])

    const handleSelectNews = (e) => {
        navigation(`/news/${e.currentTarget.name}`)
    }

    return (
        <>
          <motion.div initial={{ opacity: 0 }}
                
                animate={{ opacity: 1, transition:{duration:1}}}
            exit={{opacity: 0, transition:{duration:0} }}
            >

            <img className='imageBanner'
                src='https://www.olgcdbb.catholic.edu.au/wp-content/uploads/2018/04/latest-news-banner.jpg' alt='banner'></img>
            <div className='newsPageContainer'>
                
            {statusNews.newsUpdate.length && <NewsUpdate newsUpdate={statusNews.newsUpdate} handleSelectNews={handleSelectNews} />}
            {statusNews.newsReadLot.length && <NewsReadLot newsReadLot={statusNews.newsReadLot} handleSelectNews={handleSelectNews} titleName="NEWS READ A LOT"/>}
            {statusNews.hotNews.length && <HotNews hotNews={statusNews.hotNews} handleSelectNews={handleSelectNews}/>}
            {statusNews.newsSeeMore.length && <NewsSeeMore newsSeeMore={statusNews.newsSeeMore} handleSelectNews={handleSelectNews}/>}
               
            </div>
            </motion.div>
        </>
    );
}

export default NewsPage;