import './Menu.css'
import arrowIcon from '../../assets/image/header/icon/arrow.svg'

import React, { useContext, useState } from 'react';
import MenuIcon from '../../assets/image/header/icon/menuIcon.svg'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

function Menu(props) {

    const { btnActive, setBtnActive, products } = useContext(DataContext)

    const { calendar, noteBook } = products

    let notebookTypeList = []
    let calendarTypeList = []

    if (noteBook) {
        noteBook.forEach(item => {
            if (!notebookTypeList.includes(item.type)) {
                notebookTypeList.push(item.type)
            }
        });
    }
    if (calendar) {
        calendar.forEach(item => {
            if (!calendarTypeList.includes(item.type)) {
                calendarTypeList.push(item.type)
            }
        });
        console.log(calendarTypeList);
    }

    const menuDetail = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' },
        { name: 'ALL PRODUCTS', href: '/allproducts' },
        { name: 'DOWNLOAD', href: '/download' },
        { name: 'CONTACT', href: '/contact' },

    ]


    return (
        <div className='menuContainer'>
            <div className='menuButton'>
                <img className='menuIcon' src={MenuIcon} alt='menuIcon' />
                <p className='menuText'>Menu</p>
            </div>
            <div className='menuDetail'>
                {menuDetail.map((item, index) => {
                    return (
                        <div key={index} className='menuTab' id={`menuTab_${index}`} onClick={(e) => console.log(e.target.id)}>
                            <div className='iconRedArrow' />
                            <Link className='tabLink' onClick={() => setBtnActive(item.name)} to={item.href}>{item.name}</Link>

                            {item.name === 'ALL PRODUCTS' &&
                                <>
                                    <div className='iconBlackArrow' />
                                    <div className='productsDetail'>
                                        <div className='productsDetail-calendar'>
                                            <h1>CALENDAR</h1>
                                            {calendarTypeList.map((item,index)=>{
                                                return(
                                                    <p key={index}>{item}</p>
                                                )
                                            })

                                            }
                                        </div>
                                        <div className='productsDetail-notebook'>
                                            <h1>NOTEBOOK</h1>
                                            {notebookTypeList.map((item,index)=>{
                                                return(
                                                    <p key={index}>{item}</p>
                                                )
                                            })
                                            }
                                        </div>

                                    </div>
                                </>
                            }
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Menu;