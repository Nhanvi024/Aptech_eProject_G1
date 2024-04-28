import './NewsContent.css'

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Parser from "html-react-parser";
import RelatedNews from '../../components/newspageComponents/RelatedNews';

function NewsContent(props) {
    const { newscontent } = useParams()
    const [content, setContent] = useState('')
    const [ newsSide, setNewsSide ] = useState({
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
        fetch(`/news/${newscontent}.txt`)
            .then(res => res.text())
            .then(data => setContent(data))
    },[])

    useEffect(()=>{
        newsSide.relatedNews = news && news.filter(item=>{
            item.type.id !== content 
        })
        newsSide.iterestedNews = news && news.filter(item=>item.type.newsReadLot === true)
        setTypeNews({...typeNews})
    },[news])



    return (
        <>
            <img className='imageBanner'
                src='https://www.olgcdbb.catholic.edu.au/wp-content/uploads/2018/04/latest-news-banner.jpg' alt='banner'></img>
            <div className='NewsContent-container'>
                <div className='NewsContent-content col-sm-8'>
                    {Parser(content)}
                </div>
                <div className='NewsContent-sidebar col-sm-4'>
                    <RelatedNews />
                </div>
            </div>
        </>
    );
}

export default NewsContent;