import './NewsContent.css'

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Parser from "html-react-parser";
import RelatedNews from '../../components/newspageComponents/RelatedNews';
import InterestedNews from '../../components/newspageComponents/InterestedNews';
import InterestedNews2 from '../../components/newspageComponents/InterestedNews2';

function NewsContent(props) {
    const { newscontent } = useParams()
    const [content, setContent] = useState('')
    const [newsSide, setNewsSide] = useState({
        relatedNews: [],
        iterestedNews: []
    })

    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('/data/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])


    useEffect(() => {
        fetch(`/assets/news/${newscontent}.txt`)
            .then(res => res.text())
            .then(data => setContent(data))
    }, [newscontent])

    useEffect(() => {
        let currentNews = news.find(item => item.id === newscontent)
        newsSide.relatedNews = news && news.filter(item =>(item.type === currentNews.type && item.id !== newscontent))
        newsSide.iterestedNews = news && news.filter(item =>(item.type !== currentNews.type && item.id !== newscontent))
        setNewsSide({ ...newsSide })
    }, [news,newscontent])

    return (
        <>
            <img className='imageBanner'
                src='https://www.olgcdbb.catholic.edu.au/wp-content/uploads/2018/04/latest-news-banner.jpg' alt='banner'></img>
            <div className='NewsContent-container'>
                <div className='NewsContent-content col-sm-8'>
                    {Parser(content)}
                </div>
                <div className='NewsContent-sidebar col-sm-4'>
                    {newsSide.relatedNews.length && <RelatedNews relatedNews={newsSide.relatedNews} />}
                    {newsSide.iterestedNews.length && <InterestedNews iterestedNews={newsSide.iterestedNews} />}
                </div>
                {newsSide.iterestedNews.length && <InterestedNews2 newsReadLot={newsSide.iterestedNews} />}
            </div>


        </>
    );
}

export default NewsContent;