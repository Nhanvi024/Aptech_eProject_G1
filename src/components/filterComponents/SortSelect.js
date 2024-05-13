import './SortSelect.css'

import React from 'react';
import $ from 'jquery'

function SortSelect(props) {
const {select, setSelect, selectArray} = props
    return (
        <div className='sortSelect-container'> 
            <p className='sortSelect-label'>Sort by: </p>
            <p onClick={()=>$('#idsortSelect-list').slideToggle()} className='sortSelect-select'>{select.name}<span className="sortSelect-icon" /></p>
            <div className='sortSelect-list' id='idsortSelect-list'>
                {selectArray.map((item, index) => {
                    return (
                        <p key={index} className='sortSelect-option' 
                        onClick={() => { 
                            setSelect(item) 
                            $('#idsortSelect-list').slideUp()
                        }} 
                        value={item.value}>{item.name}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default SortSelect;