import './SearchBox.css'

import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';

import searchIcon from '../../assets/image/header/icon/search.svg'

function SearchBox(props) {
    const { searchProduct, setSearchProduct } = useContext(DataContext)
    const [searchText,setSearchText] = useState('')

const handleSearch = () =>{
    setSearchProduct(searchText)
}
    return (
        <div className='searchContainer'>
            <div className='searchBox'>
            <input className='searchInput' onChange={(e)=>setSearchText(e.target.value)} type="text"  placeholder="What are you looking for?"/>
                <button className='searchButton' onClick={()=>handleSearch()}><img className='searchImage' src={searchIcon} alt='searchIcon'></img></button>  
            </div>
                 
        </div>
    );
}

export default SearchBox;