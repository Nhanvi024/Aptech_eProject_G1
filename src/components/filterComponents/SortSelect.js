import './SortSelect.css'

import React from 'react';

function SortSelect(props) {
const {select, setSelect, selectArray} = props
    return (
        <div className='sortSelect-container'> 
            <p className='sortSelect-label'>Sort by: </p>
            <p className='sortSelect-select'>{select.name}<span className="sortSelect-icon" /></p>
            <div className='sortSelect-list'>
                {selectArray.map((item, index) => {
                    return (
                        <p key={index} className='sortSelect-option' onClick={() => { setSelect(item) }} value={item.value}>{item.name}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default SortSelect;