import './NewsSeeMore.css'

import React from 'react';
import EllipsisText from "react-ellipsis-text";

function NewsSeeMore(props) {
    const { newsSeeMore, handleSelectNews } = props

    return (
        <div className='newsPage-newsSeeMore'>
            <h1 className='newsPage-newsSeeMore-name'>YOU CAN SEE MORE: CALENDAR & DIARY</h1>

            <div className='newsPage-newsSeeMore-container'>

                {newsSeeMore && newsSeeMore.map((item, index) => {
                    return (
                        <div  key={index} className='newsPage-newsSeeMore-newscard'>
                            <img onClick={(e) => handleSelectNews(e)} className='newsPage-newsSeeMore-img' src={item.mainImage}  name={item.id} alt='news'/>
                            <div className='newsPage-newsSeeMore-content'>
                                <p className='newsPage-newsSeeMore-title'>{item.title}</p>
                                <p className='newsPage-newsSeeMore-desc'><EllipsisText text={item.description} length={300} /></p>
                                <button onClick={(e) => handleSelectNews(e)} className='newsPage-newsSeeMore-readmore' name={item.id}>Read More</button>
                            </div>
                        </div>
                    )
                })}


            </div>

        </div>
    );
}

export default NewsSeeMore;