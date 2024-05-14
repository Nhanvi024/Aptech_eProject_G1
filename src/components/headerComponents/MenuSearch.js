import './MenuSearch.css'
import React, { useContext, useState } from 'react';
import MenuIcon from '../../assets/image/header/icon/menuIcon.svg'
import searchIcon from '../../assets/image/header/icon/search.svg'
import $ from 'jquery';
import { DataContext } from '../../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

function MenuSearch(props) {
    const [showModal, setShowModal] = useState(false)
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
        { name: 'DOWNLOAD ALL PRODUCTS', href: '/downloadallproduct' },
        { name: 'CONTACT', href: '/contact' },

    ]

    return (
        <div className='menuSearch-container'>
            <div className='menuSearch-icon'>
                <img
                    onClick={() => setShowModal(pre => !pre)}
                    className='menuSearch-menuIcon'
                    src={MenuIcon} alt='menuIcon'
                />
                <img onClick={() => $("#menuSearch-searchInput").slideToggle()} className='menuSearch-searchIcon' src={searchIcon} alt='searchIcon' />
            </div>

            <input
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => handleSearch(e)}
                id='menuSearch-searchInput' type='text' placeholder='Enter product name and press enter ...' />

            <input onChange={() => setShowModal(pre => !pre)} type='checkbox' id='menu-modal' checked={showModal} />
            <div className='menuSearch-modal' onClick={() => setShowModal(pre => !pre)}>
                <div id='menuSearch-menuDetail'>
                    <Logo />
                    <div className='menuSearch-menuList'>
                        {menuDetail.map((item, index) => {
                            return (
                                <div key={index} className='menuTab' id={`menuTab_${index}`} onClick={(e) => console.log(e.target.id)}>
                                <div className='menu-products-container'>
                                    {/* <img className='iconArrow' src='/assets/image/extra/angleRight.svg' alt='...' /> */}
                                    <Link className='tabLink'
                                        onClick={() => {
                                            setBtnActive(item.name);
                                            $('#menuDetail').slideUp()
                                        }}
                                        to={item.href}>{item.name} </Link>
                                        {item.name === 'ALL PRODUCTS' &&
                                            <>
                                                <img className='iconArrow' id='menuSearch-iconDownArrow'
                                                    src='/assets/image/extra/angleLeft.svg'
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        $("#menuSearch-child-container").slideDown()
                                                        $("#menuSearch-iconUpArrow").show()
                                                        $("#menuSearch-iconDownArrow").hide()
                                                    }} />
                                                <img className='iconArrow' id='menuSearch-iconUpArrow'
                                                    src='/assets/image/extra/angleDown.svg'
                                                    style={{ display: 'none' }}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        $("#menuSearch-child-container").slideUp()
                                                        $("#menuSearch-iconUpArrow").hide()
                                                        $("#menuSearch-iconDownArrow").show()
                                                    }} />
                                            </>
                                        }
                                </div>
    
                                {item.name === 'ALL PRODUCTS' &&
                                    <div id='menuSearch-child-container' style={{ display: 'none' }}>
                                        <div className='menu-products-child-tab'>
                                            {/* <img className='iconArrow' src='/assets/image/extra/angleRight.svg' alt='...' /> */}
                                            <Link className='menu-products-child'
                                                onClick={() => {
                                                    setBtnActive("CALENDAR");
                                                    $('#menuDetail').slideUp()
                                                }}
                                                to='/calendar'>CALENDAR</Link>
                                        </div>
                                        <div className='menu-products-child-tab'>
                                            {/* <img className='iconArrow' src='/assets/image/extra/angleRight.svg' alt='...' /> */}
                                            <Link className='menu-products-child'
                                                onClick={() => {
                                                    setBtnActive("NOTEBOOK");
                                                    $('#menuDetail').slideUp()
                                                }}
                                                to='/notebook'>NOTEBOOK</Link>
                                        </div>
                                    </div>
                                }
                            </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>


    );
}

export default MenuSearch;