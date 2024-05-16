import ProductCard from '../../components/homepageComponents/ProductCard';
import { DataContext } from '../../context/DataContext';
import './SearchPage.css'
import {motion} from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';

function SearchPage(props) {
    const { products, searchProduct } = useContext(DataContext)
    const { calendar, noteBook } = products
    let [searchList, setSearchList] = useState([])

    searchList = []
    if (noteBook && calendar) {
    noteBook.forEach(item => {
        if (item.name.toUpperCase().includes(searchProduct.toUpperCase())) {
            searchList.push(item)
        }
    });
    calendar.forEach(item => {
        if (item.name.toUpperCase().includes(searchProduct.toUpperCase())) {
            searchList.push(item)
        }
    });
    }
    useEffect(() => {
        setSearchList([...searchList])
    }, [searchProduct])


    return (
        <>
            <motion.div initial={{ opacity: 0 }}

                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 0} }}
            >
                <img className='imageBanner imgBannerCss'
                    src='https://carleton.ca/dighum/wp-content/uploads/Calendar-Banner.jpg'></img>
                <div className='searchPage-container'>
                    <h1 style={{textAlign: "center", marginTop: 20}}>Search Page</h1>
                    {!searchList.length ? <h2 style={{marginLeft: 20, fontStyle: "italic"}} className='searchPage-result'>No results found</h2> : <h2 style={{marginLeft: 20, fontStyle: "italic"}} className='searchPage-result'>{searchList.length} matching search results</h2>}
                    <div className='searchPage-searchlist'>
                        {searchList.map((item, index) => {
                            return (
                                <div key={index} className='searchPage-product'>
                                    <ProductCard item={item} />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </motion.div>
        </>
    );
}

export default SearchPage;
