import './MenuSearch.css'
import React from 'react';
import MenuIcon from '../../assets/image/header/icon/menuIcon.svg'
import searchIcon from '../../assets/image/header/icon/search.svg'



function MenuSearch(props) {
    return (
        <div className='menuSearch-container'>
            <div className='menuSearch-icon'>
            <img className='menuSearch-menuIcon' src={MenuIcon} alt='menuIcon' />
            <img className='menuSearch-searchIcon' src={searchIcon} alt='searchIcon'/>
            </div>
            <div className='menuSearch-search'>
            <input className='menuSearch-searchInput' type='text' placeholder='Typing your search and press enter ...'/>

            </div>


        </div>
    );
}

export default MenuSearch;