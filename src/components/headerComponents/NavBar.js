import './NavBar.css'
import aboutUsIcon from '../../assets/image/header/icon/aboutus.svg'

import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

function NavBar(props) {

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
    }


    const navLink = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' },
        { name: 'CALENDAR', href: '/calendar' },
        { name: 'NOTEBOOK', href: '/notebook' },
        { name: 'CONTACT', href: '/contact' },
    ]
    // const [btnActive, setBtnActive] = useState(navLink[0].name)


    return (
        <div className='navbarContainer'>
            <ul className="navBarTab">
                {navLink.map((item, index) => {
                    return (
                        <li key={index} className="navItem">
                            <NavLink className='navLink'
                                onClick={(e) => setBtnActive(e.target.name)}
                                name={item.name}
                                active={btnActive === item.name ? 'true' : 'false'}
                                to={item.href} >{item.name}</NavLink>

                            { item.name === 'CALENDAR'?
                                <div className='listType'>
                                    
                                        {calendarTypeList.map((item,index)=>{
                                            return(
                                                <Link className='listType-item' key={index}>{item}</Link>
                                            )
                                        })}
                                    
                                </div> :
                            item.name === 'NOTEBOOK'?
                                <div className='listType'>
                                     {notebookTypeList.map((item,index)=>{
                                            return(
                                                <Link className='listType-item' key={index}>{item}</Link>
                                            )
                                        })}
                                </div>:
                                <></>
                            }

                        </li>
                    )
                })}
            </ul >





        </div >
    );
}

export default NavBar;