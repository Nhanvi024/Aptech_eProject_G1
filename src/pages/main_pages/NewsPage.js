import { Link} from 'react-router-dom';
import './NewsPage.css'

import React, { useContext, useState } from 'react';
import Parser from "html-react-parser";
import { DataContext } from '../../context/DataContext';

function NewsPage(props) {

const { handleAddProductCart } = useContext(DataContext)
const [news,setNews] = useState('')

const html = `
  <h1>XSS Example</h1>
  <a href="javascript:alert(1)">Open Link</a>
`;

    return (
        <div className='newsPageContainer'>
            <section>
            <img className='imageBanner' 
            src='https://www.olgcdbb.catholic.edu.au/wp-content/uploads/2018/04/latest-news-banner.jpg' alt='banner'></img>
            </section>
           <div>
            {Parser(html)}
           </div>
            <section>
                <button onClick={()=>handleAddProductCart('WC1')}>Add product</button>
                <button onClick={()=>handleAddProductCart('NBJ4')}>Add product</button>


                <Link onClick={()=>setNews('News0')} to={news}>News 0</Link>
                <Link onClick={()=>setNews('News1')} to={news}>News 1</Link>

            </section>
        </div>
    );
}

export default NewsPage;