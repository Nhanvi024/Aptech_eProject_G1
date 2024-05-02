import './HotNews.css'

import React from 'react';

function HotNews(props) {
    const { hotNews , handleSelectNews } = props

    return (
        <div className='newsPage-hotNews'>
            <h1 className='newsPage-hotNews-name'>HOT NEWS OF THE WEEK</h1>

            <div className='newsPage-hotNews-container'>
                <div className='newsPage-hotNews-row1'>
                    {hotNews && hotNews.map((item, index) => {
                        return (
                            index < 4 &&
                            <button key={index} onClick={(e) => handleSelectNews(e)} className='newsPage-hotNews-newscard1' name={item.id}>
                                <img className='newsPage-hotNews-img1' src={item.mainImage} alt='news'/>
                                <p className='newsPage-hotNews-title1' >{item.title}</p>
                            </button>
                        )
                    })}
                </div>

                <div className='newsPage-hotNews-row2'>
                    {hotNews && hotNews.map((item, index) => {
                        return (
                            index > 3 && index < 7 &&
                            <button key={index} onClick={(e) => handleSelectNews(e)} className='newsPage-hotNews-newscard2'  name={item.id}>
                                <img className='newsPage-hotNews-img2' src={item.mainImage} alt='news'/>
                                <p className='newsPage-hotNews-title2'>{item.title}</p>
                            </button>
                        )

                    })}
                </div>


            </div>

        </div>
    );
}

export default HotNews;