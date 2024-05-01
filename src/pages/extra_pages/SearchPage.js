import ProductCard from '../../components/homepageComponents/ProductCard';
import { DataContext } from '../../context/DataContext';
import './SearchPage.css'

import React, { useContext, useEffect, useState } from 'react';

function SearchPage(props) {
    const { products, searchProduct } = useContext(DataContext)
    const { calendar, noteBook } = products
    let [searchList, setSearchList] = useState([])

    searchList = []
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

    useEffect(() => {
        setSearchList([...searchList])
    }, [searchProduct])


    return (
        <>
            <img className='imageBanner'
                src='https://carleton.ca/dighum/wp-content/uploads/Calendar-Banner.jpg'></img>
            <div className='searchPage-container'>
                <h1>Search Page</h1>
                {!searchList.length ? <h2 className='searchPage-result'>No results found</h2> : <h2 className='searchPage-result'>{searchList.length} matching search results</h2>}
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
        </>
    );
}

export default SearchPage;