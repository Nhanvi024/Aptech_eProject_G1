import PriceFilter from '../../components/filterComponents/PriceFilter';
import SortSelect from '../../components/filterComponents/SortSelect';
import TypeFilter from '../../components/filterComponents/TypeFilter';
import ProductCard from '../../components/homepageComponents/ProductCard';
import { DataContext } from '../../context/DataContext';
import './AllProductsPage.css'

import React, { useContext } from 'react';


function AllProductsPage(props) {
    const { products } = useContext(DataContext)
    const { calendar, noteBook } = products
    console.log(calendar);

    return (
        <>
            <img className='imageBanner'
                src='https://carleton.ca/dighum/wp-content/uploads/Calendar-Banner.jpg'></img>
            <div className='allProductsContainer'>
                <div className='allProduct-sidebar col-sm-3'>
                    <TypeFilter />
                    <PriceFilter />
                </div>
                <div className='allProduct-productlist col-sm-9'>
                    <div className='allProduct-header'>
                        <p className='allProduct-header-title'>All Product</p>
                        <SortSelect />
                    </div>
                    <div className='allProduct-product'>
                        {calendar.map((item, index) => {
                            return (
                                <div key={index} className='allProduct-product-item'>
                                    <ProductCard item={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>

    );
}

export default AllProductsPage;