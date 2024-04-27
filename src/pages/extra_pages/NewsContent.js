import { useParams } from 'react-router-dom';
import './NewsContent.css'
import React, { useEffect, useRef, useState } from 'react';
import Parser from "html-react-parser";




function NewsContent(props) {

    const { newscontent } = useParams()
    console.log(newscontent);

    const [content, setContent] = useState('')

    useEffect(() => {
        fetch(`/news/${newscontent}.txt`)
            .then(res => res.text())
            .then(data => setContent(data))
    })

    return (
        <>
            <img className='imageBanner'
                src='https://www.olgcdbb.catholic.edu.au/wp-content/uploads/2018/04/latest-news-banner.jpg' alt='banner'></img>
            {/* <div className='NewsContent-container' dangerouslySetInnerHTML={{ __html: content }}/> */}
            <div className='NewsContent-container'>
                <div className='NewsContent-content col-sm-8'>
                    {Parser(content)}
                </div>
                <div className='NewsContent-sidebar col-sm-4'>

                </div>
            </div>


        </>

    );
}

export default NewsContent;