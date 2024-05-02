import './TypeFilterAll.css'

import React from 'react';


function TypeFilterAll(props) {
    const { typeFilter, setTypeFilter, notebookTypeList, calendarTypeList } = props
    const { calendarFilter, noteBookFilter } = typeFilter

    const handleNoteBookFilter = (e) => {
        e.target.checked ?
            noteBookFilter.push(e.target.name) :
            noteBookFilter.splice(noteBookFilter.indexOf(e.target.name), 1)

        setTypeFilter({ ...typeFilter })
    }

    const handleCalendarFilter = (e) => {
        e.target.checked ?
            calendarFilter.push(e.target.name) :
            calendarFilter.splice(calendarFilter.indexOf(e.target.name), 1)

        setTypeFilter({ ...typeFilter })
    }

    return (
        <div className='typeFilterAll-container'>
            <div className='typeFilterAll-head'>
                <p className='typeFilterAll-title'>Menu</p>
            </div>
            <div className='typeFilterAll-list'>
                {notebookTypeList &&
                    <div className='typeFilterAll-item-container'>
                        <button onClick={() => setTypeFilter({ ...typeFilter, noteBookFilter: [...notebookTypeList] })} className='typeFilterAll-text'>Notebook</button>

                        <div className='typeFilterAll-subitemlist'>
                            {notebookTypeList.map((item, index) => {
                                return (
                                    <div className='typeFilterAll-subitem' key={index}>
                                        <input onChange={(e) => handleNoteBookFilter(e)} className="typeFilterAll-typebox" name={item} type="checkbox" id={item} checked={noteBookFilter.some(product => product === item)} />
                                        <label className='typeFilterAll-typename' htmlFor={item}>{item}</label>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                }
                {calendarTypeList &&
                    <div className='typeFilterAll-item-container'>
                        <button onClick={() => setTypeFilter({ ...typeFilter, calendarFilter: [...calendarTypeList] })} className='typeFilterAll-text'>Calendar</button>

                        <div className='typeFilterAll-subitemlist'>
                            {calendarTypeList.map((item, index) => {
                                return (
                                    <div className='typeFilterAll-subitem' key={index}>
                                        <input onChange={(e) => handleCalendarFilter(e)} className="typeFilterAll-typebox" name={item} type="checkbox" id={item} checked={calendarFilter.some(product => product === item)} />
                                        <label className='typeFilterAll-typename' htmlFor={item}>{item}</label>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                }
            </div>

        </div>
    );
}

export default TypeFilterAll;
