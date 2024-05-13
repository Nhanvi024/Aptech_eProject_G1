
import { DataContext } from '../../context/DataContext';
import './NoteBook.css'
import React, { useContext, useEffect, useState } from 'react';
import PriceFilter from '../../components/filterComponents/PriceFilter'
import SortSelect from '../../components/filterComponents/SortSelect'
import ProductCard from '../../components/homepageComponents/ProductCard';
import TypeFilterAll from '../../components/filterComponents/TypeFilterAll';
import { motion } from 'framer-motion';


function NoteBook(props) {
    const { products } = useContext(DataContext);
    const { noteBook } = products;

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
                noteBook && noteBook.forEach(item => {
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
        notebookTypeList: [],
    })
    const { notebookTypeList } = typeList

    // Array type of notebook/calendar wants to filter
    const [typeFilter, setTypeFilter] = useState({
        noteBookFilter: [],
    })

    // Initial add all types of products to array want to filter
    const handleReadyTypeData = () => {
        if (noteBook) {
            noteBook.forEach(item => {
                if (!notebookTypeList.includes(item.type)) {
                    notebookTypeList.push(item.type)
                }
            })

            // All types of notebook/calendar
            setTypeList({ ...typeList })

            // Add all types to array want to filter
            // setTypeFilter({
            //     ...typeFilter,
            //     noteBookFilter: [...notebookTypeList],
            // })
        }
    }

    // Page loading first time --> all products are shown
    useEffect(() => {
        handleReadyTypeData()
    }, [products])

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
        
                (typeFilter.noteBookFilter.some(item => item === product.type) ||
                (!typeFilter.noteBookFilter.length && typeList.notebookTypeList.some(item => item === product.type)))
    
            &&

            // Filter price
            (
                (priceFilter.price_range0.check && (product.price >= priceFilter.price_range0.min) && (product.price < priceFilter.price_range0.max)) ||
                (priceFilter.price_range1.check && (product.price >= priceFilter.price_range1.min) && (product.price < priceFilter.price_range1.max)) ||
                (priceFilter.price_range2.check && (product.price >= priceFilter.price_range2.min) && (product.price < priceFilter.price_range2.max)) ||
                (priceFilter.price_range3.check && (product.price >= priceFilter.price_range3.min) && (product.price < priceFilter.price_range3.max)) ||
                (priceFilter.price_range4.check && (product.price >= priceFilter.price_range4.min) && (product.price < priceFilter.price_range4.max)) ||
                (priceFilter.price_range5.check && (product.price >= priceFilter.price_range5.min) && (product.price < priceFilter.price_range5.max)) ||

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
        <motion.div initial={{ opacity: 0 }}

            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
        >
            <img className='imageBanner d-block w-100'
                src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/bg_breadcrumb.jpg?1709874054823' alt='banner'></img>
            {/* Sidebar area */}
            <div className='allProducts-container row '>
                <div className='allProduct-sidebar col-xl-3 col-md-5 col-sm-6'>
                    <TypeFilterAll
                        typeFilter={typeFilter}
                        setTypeFilter={setTypeFilter}
                        notebookTypeList={notebookTypeList}
                    />
                    <PriceFilter priceFilter={priceFilter}
                        setPriceFilter={setPriceFilter} />
                </div>
                <div className='allProduct-productlist col-xl-9 col-md-7 col-sm-6 w-100 '>
                    <div className='allProduct-header'>
                        <p className='allProduct-header-title'>Notebook</p>
                        <SortSelect select={select} setSelect={setSelect} selectArray={selectArray} />
                    </div>
                    <div className='allProduct-product container-fluid'>
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
    );
}

export default NoteBook;
