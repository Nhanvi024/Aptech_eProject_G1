import { Link} from 'react-router-dom';
import './NewsPage.css'

import React, { useState } from 'react';

function NewsPage(props) {
const [news,setNews] = useState('')

    return (
        <div className='newsPageContainer'>
            <section>
            <img className='imageBanner' 
            src='https://www.olgcdbb.catholic.edu.au/wp-content/uploads/2018/04/latest-news-banner.jpg' alt='banner'></img>
            </section>
           
            <section>
                <Link onClick={()=>setNews('News0')} to={news}>News 0</Link>
                <Link onClick={()=>setNews('News1')} to={news}>News 1</Link>

            </section>
        </div>
    );
}

export default NewsPage;