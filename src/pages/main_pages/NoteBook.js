import PriceFilter from '../../components/filterComponents/PriceFilter';
import SortSelect from '../../components/filterComponents/SortSelect';
import TypeFilter from '../../components/filterComponents/TypeFilter';
import './NoteBook.css'

import React from 'react';

function NoteBook(props) {
    return (

        <>
            <img className='imageBanner'
                src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/bg_breadcrumb.jpg?1709874054823' alt='banner'></img>


            <div className='noteBookPageContainer'>
                <SortSelect/>
                <TypeFilter/>
                <PriceFilter/>
            </div>
        </>

    );
}

export default NoteBook;