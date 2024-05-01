import './MenuSearch.css'
import React, { useContext, useState } from 'react';
import MenuIcon from '../../assets/image/header/icon/menuIcon.svg'
import searchIcon from '../../assets/image/header/icon/search.svg'
import $ from 'jquery';
import { DataContext } from '../../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

function MenuSearch(props) {
    const { setSearchProduct } = useContext(DataContext)
    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setSearchProduct(searchText)
            navigate('/search')
        }
    }

    const { setBtnActive } = useContext(DataContext)
    const menuDetail = [
        { name: 'HOME', href: '/' },
        { name: 'NEWS', href: '/news' },
        { name: 'ALL PRODUCTS', href: '/allproducts' },
        { name: 'CALENDAR', href: '/calendar' },
        { name: 'NOTEBOOK', href: '/notebook' },
        { name: 'DOWNLOAD', href: '/download' },
        { name: 'CONTACT', href: '/contact' },

    ]

    return (
        <div className='menuSearch-container'>
            <div className='menuSearch-icon'>
                <img className='menuSearch-menuIcon' src={MenuIcon} alt='menuIcon' />
                <img onClick={() => $("#menuSearch-searchInput").toggle()} className='menuSearch-searchIcon' src={searchIcon} alt='searchIcon' />
            </div>
            <div className='menuSearch-search'>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => handleSearch(e)}
                    id='menuSearch-searchInput' type='text' placeholder='Typing your search and press enter ...' />
            </div>
            <div className='menuSearch-menuDetail'>
                <Logo />
                <div className='menuSearch-menuList'>
                    {menuDetail.map((item, index) => {
                        return (
                            <div key={index} className='menuSearch-menuTab' id={`menuSearch-menuTab_${index}`} onClick={(e) => console.log(e.target.id)}>
                                <div className='menuSearch-iconRedArrow' />
                                <Link className='menuSearch-tabLink' onClick={() => setBtnActive(item.name)} to={item.href}>{item.name}</Link>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default MenuSearch;