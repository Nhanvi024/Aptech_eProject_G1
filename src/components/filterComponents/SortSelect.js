import './SortSelect.css'

import React, { useEffect, useRef, useState } from 'react';

function SortSelect(props) {
    const selectArray = [
        { name: "Select Sort", value: "default" },
        { name: "Name A → Z", value: "type1" },
        { name: "Name Z → A", value: "type2" },
        { name: "Price Ascending", value: "type3" },
        { name: "Price Descending", value: "type4" },
    ]
    const [select, setSelect] = useState(selectArray[0])

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