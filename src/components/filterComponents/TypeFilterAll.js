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

    const handleAllNoteBookFilter = (e) => {
        e.target.checked ?
            setTypeFilter({ ...typeFilter, noteBookFilter: [...notebookTypeList] }) :
            setTypeFilter({ ...typeFilter, noteBookFilter: [] })
    }

    const handleCalendarFilter = (e) => {
        e.target.checked ?
            calendarFilter.push(e.target.name) :
            calendarFilter.splice(calendarFilter.indexOf(e.target.name), 1)

        setTypeFilter({ ...typeFilter })
    }

    const handleAllCalendarFilter = (e) => {
        e.target.checked ?
            setTypeFilter({ ...typeFilter, calendarFilter: [...calendarTypeList] }) :
            setTypeFilter({ ...typeFilter, calendarFilter: [] })
    }
    return (
        <>

            <div className='typeFilterAll-container d-none d-md-block col-6 g-0'>
                <div className='typeFilterAll-head'>
                    <p className='typeFilterAll-title'>Menu</p>
                </div>

                <div className='typeFilterAll-list'>
                    {notebookTypeList &&
                        <div className='typeFilterAll-item-container'>
                            {notebookTypeList && <p className='typeFilterAll-text'>Notebook</p>}
                            <div className='typeFilterAll-notebookAll'>
                                <input onChange={(e) => handleAllNoteBookFilter(e)} className="typeFilterAll-typebox" name='notebookAll' type="checkbox" id='notebookAll' checked={noteBookFilter.length === notebookTypeList.length} />
                                <label className='typeFilterAll-typename' htmlFor='notebookAll'>All Notebook</label>
                            </div>
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
                            <p className='typeFilterAll-text'>Calendar</p>
                            <div className='typeFilterAll-calendarAll'>
                                <input onChange={(e) => handleAllCalendarFilter(e)} className="typeFilterAll-typebox" name='calendarAll' type="checkbox" id='calendarAll' checked={calendarFilter.length === calendarTypeList.length} />
                                <label className='typeFilterAll-typename' htmlFor='calendarAll'>All Calendar</label>
                            </div>
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
            <div className='typeFilterAll-container1 d-block d-md-none col-6 g-0 w-100'>
                <div className='typeFilterAll-head1 navbar-expand-lg'>

                    <button className="navbar-toggler typeFilterbtn dropdown-toggle w-100 h-100" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span>Categories </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto my-2 text-center w-100">
                            <li className="nav-item dropdown">
                                {notebookTypeList && 
                                <div className="nav-link dropdown-toggle typeFilterSubmenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Notebook</div>
                                }
                                <ul className="dropdown-menu w-100">
                                    {notebookTypeList &&
                                        <div className='typeFilterAll-item-containerDropDown'>
                                            <div className='typeFilterAll-notebookAll  dropdown-item'>
                                                <input onChange={(e) => handleAllNoteBookFilter(e)} className="typeFilterAll-typebox" name='notebookAll' type="checkbox" id='notebookAll' checked={noteBookFilter.length === notebookTypeList.length} />
                                                <label className='typeFilterAll-typename' htmlFor='notebookAll'>All Notebook</label>
                                            </div>
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
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav m-auto my-2 text-center w-100">
                            <li className="nav-item dropdown">
                                {calendarTypeList &&
                                 <div className="nav-link dropdown-toggle typeFilterSubmenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Calendars</div>
                                }
                                <ul className="dropdown-menu w-100">
                                    {calendarTypeList &&
                                        <div className='typeFilterAll-item-containerDropDown'>
                                            <div className='typeFilterAll-calendarAll dropdown-item'>
                                                <input onChange={(e) => handleAllCalendarFilter(e)} className="typeFilterAll-typebox" name='calendarAll' type="checkbox" id='calendarAll' checked={calendarFilter.length === calendarTypeList.length} />
                                                <label className='typeFilterAll-typename' htmlFor='calendarAll'>All Calendar</label>
                                            </div>
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
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TypeFilterAll;
