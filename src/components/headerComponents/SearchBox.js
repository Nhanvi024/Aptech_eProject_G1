import './SearchBox.css';

import React, {useContext, useState} from 'react';
import {DataContext} from '../../context/DataContext';

import searchIcon from '../../assets/image/header/icon/search.svg'
import { useNavigate } from 'react-router-dom';

function SearchBox(props) {
    const { setSearchProduct } = useContext(DataContext)
    const [searchText,setSearchText] = useState('')
    const navigate = useNavigate()

const handleSearch = () =>{
    setSearchProduct(searchText)
    navigate('/search')
}
    return (
        <div className='searchContainer'>
            <div className='searchBox'>
            <input className='searchInput' onChange={(e)=>setSearchText(e.target.value)} type="text"  placeholder="Enter product name"/>
                <button className='searchButton' onClick={()=>handleSearch()}><img className='searchImage' src={searchIcon} alt='searchIcon'></img></button>  
            </div>
                 
        </div>
    );
}

export default SearchBox;
