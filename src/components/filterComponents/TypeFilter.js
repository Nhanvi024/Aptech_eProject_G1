import './TypeFilter.css'

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

function TypeFilter(props) {

    const { products } = useContext(DataContext)
    const { calendar, noteBook } = products

    let notebookTypeList = []
    let calendarTypeList = []

    if (noteBook) {
        noteBook.forEach(item => {
            if (!notebookTypeList.includes(item.type)) {
                notebookTypeList.push(item.type)
            }
        });
        console.log(notebookTypeList);
    }
    if (calendar) {
        calendar.forEach(item => {
            if (!calendarTypeList.includes(item.type)) {
                calendarTypeList.push(item.type)
            }
        });

    }

    return (
        <div className='typeFilter-container'>
            <div className='typeFilter-head'>
                <p className='typeFilter-title'>Menu</p>
            </div>
            <div className='typeFilter-list'>
                <div className='typeFilter-item-container'>
                    <Link className='typeFilter-text'>Notebook<span className='typeFilter-icon' /></Link>
                </div>
                <div className='typeFilter-subitem'>
                {notebookTypeList.map((item, index) => {
                    return (
                       
                            <Link key={index} className='typeFilter-text'>{item}</Link>
                    )
                })
                }
                </div>

                <div className='typeFilter-item-container'>
                <Link className='typeFilter-text'>Calendar<span className='typeFilter-icon' /></Link>
                </div>
                <div className='typeFilter-subitem'>
                {calendarTypeList.map((item, index) => {
                    return (
                       
                            <Link key={index} className='typeFilter-text'>{item}</Link>
                    )
                })
                }
                </div>
            </div>

        </div>
    );
}

export default TypeFilter;
