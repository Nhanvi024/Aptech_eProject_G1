import { useParams } from 'react-router-dom';
import './NewsContent.css'
import React, { useEffect, useRef, useState } from 'react';



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
            <div className='NewsContent-container' dangerouslySetInnerHTML={{ __html: content }}>
               
            </div>
        </>

    );
}

export default NewsContent;