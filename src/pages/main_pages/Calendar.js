import './Calendar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useEffect, useState, useContext} from 'react';
import {DataContext} from '../../context/DataContext';
import ProductCard from '../../components/homepageComponents/ProductCard';
import PriceFilter from '../../components/filterComponents/PriceFilter'
import SortSelect from '../../components/filterComponents/SortSelect'
import TypeFilterAll from '../../components/filterComponents/TypeFilterAll'
import { motion } from 'framer-motion';
function Calendar(props) {
    let { products, setProducts } = useContext(DataContext);

    const { calendar, noteBook } = products

    // Array product to show on page 
    const [showList, setShowList] = useState([])

    // ** Sort Function ***************************************

    // Array sort type (name, price,...)
    const selectArray = [
        { name: "Select Sort", value: "default" },
        { name: "Name A → Z", value: "type1" },
        { name: "Name Z → A", value: "type2" },
        { name: "Price Ascending", value: "type3" },
        { name: "Price Descending", value: "type4" },
    ]
    const [select, setSelect] = useState(selectArray[0])

    // function sort: check type --> sort showList
    const handleSortAll = () => {
        let result = []
        switch (select.value) {
            case 'type1':
                result = showList.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                setShowList([...result])
                break;
            case 'type2':
                result = showList.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
                setShowList([...result])
                break;
            case 'type3':
                result = showList.sort(function (a, b) {
                    return a.price - b.price
                })
                setShowList([...result])
                break;
            case 'type4':
                result = showList.sort(function (a, b) {
                    return b.price - a.price
                })
                setShowList([...result])
                break;
            default:
                calendar && calendar.forEach(item => {
                    result.push(item)
                });
            
                setShowList([...result])
        }
    }
    // Reload page to update sort
    useEffect(() => {
        handleSortAll()
    }, [select, products])


    // ** Filter type **********************************************

    // Array type of notBook/calendar
    const [typeList, setTypeList] = useState({
       
        calendarTypeList: [],
    })
    const {calendarTypeList } = typeList

    // Array type of notebook/calendar wants to filter
    const [typeFilter, setTypeFilter] = useState({
       
        calendarFilter: []
    })

    // Initial add all types of products to array want to filter
    const handleReadyTypeData = () => {
        if ( calendar) {       
            calendar.forEach(item => {
                if (!calendarTypeList.includes(item.type)) {
                    calendarTypeList.push(item.type)
                }
            });

            // All types of notebook/calendar
            setTypeList({ ...typeList })

            // Add all types to array want to filter
            setTypeFilter({
                ...typeFilter,              
                calendarFilter: [...calendarTypeList],
            })
        }
    }

    // Page loading first time --> all products are shown
    useEffect(() => {
        handleReadyTypeData()
    }, [])

    //** Filter price ***********************************************

    // Ranges of price
    const [priceFilter, setPriceFilter] = useState({
        price_range0: {
            min: 0,
            max: 5,
            check: false
        },
        price_range1: {
            min: 5,
            max: 10,
            check: false
        },
        price_range2: {
            min: 10,
            max: 20,
            check: false
        },
        price_range3: {
            min: 20,
            max: 30,
            check: false
        },
        price_range4: {
            min: 30,
            max: 40,
            check: false
        },
        price_range5: {
            min: 40,
            max: 1000,
            check: false
        }
    })


    //** All conditional to filter ( price + type) --> products match all conditional will be shown 
    const handleFilterAll = (product) => {
		return (
            // Filter type
            
                typeFilter.calendarFilter.some(item => item === product.type)
            &&

            // Filter price
            (
                (priceFilter.price_range0.check && (product.price >= priceFilter.price_range0.min) && (product.price < priceFilter.price_range0.max ))||
                (priceFilter.price_range1.check && (product.price >= priceFilter.price_range1.min) && (product.price < priceFilter.price_range1.max ))||
                (priceFilter.price_range2.check && (product.price >= priceFilter.price_range2.min) && (product.price < priceFilter.price_range2.max ))||
                (priceFilter.price_range3.check && (product.price >= priceFilter.price_range3.min) && (product.price < priceFilter.price_range3.max ))||
                (priceFilter.price_range4.check && (product.price >= priceFilter.price_range4.min) && (product.price < priceFilter.price_range4.max ))||
                (priceFilter.price_range5.check && (product.price >= priceFilter.price_range5.min) && (product.price < priceFilter.price_range5.max ))||

                !(
                    priceFilter.price_range0.check ||
                    priceFilter.price_range1.check ||
                    priceFilter.price_range2.check ||
                    priceFilter.price_range3.check ||
                    priceFilter.price_range4.check ||
                    priceFilter.price_range5.check
                ))
        )
    }

    return (
        <>
         <motion.div initial={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
            <img className='imageBanner'
                src='https://www.muji.us/cdn/shop/collections/collection_page_stationery_calendar_planner_2043x630.jpg?v=1668704287'  alt='calendarBanner'></img>
            <div className='allProducts-container'>
                <div className='allProduct-sidebar col-sm-3'>
                    <TypeFilterAll
                        typeFilter={typeFilter}
                        setTypeFilter={setTypeFilter}                 
                        calendarTypeList={calendarTypeList}
                    />

                    <PriceFilter priceFilter={priceFilter}
                        setPriceFilter={setPriceFilter} />
                </div>
                <div className='allProduct-productlist col-sm-9'>
                    <div className='allProduct-header'>
                        <p className='allProduct-header-title'>Calendar</p>
                        <SortSelect select={select} setSelect={setSelect} selectArray={selectArray} />
                    </div>
                    <div className='allProduct-product'>
                        {showList.map((item, index) => {
                            return (
                                handleFilterAll(item) // All conditional to filter (price + type)
                                &&
                                <div key={index} className='allProduct-product-item'>
                                    <ProductCard item={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
            </motion.div>
        </>

    );
}


export default Calendar;