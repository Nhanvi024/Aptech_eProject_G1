import './PriceFilter.css'

import React from 'react';

function PriceFilter(props) {
    const { priceFilter, setPriceFilter } = props

    const handleChangePriceFilter = (e) => {
        switch (e.target.name) {
            case 'range0':
                priceFilter.price_range0.check = e.target.checked
                setPriceFilter({ ...priceFilter })
                break;
            case 'range1':
                priceFilter.price_range1.check = e.target.checked
                setPriceFilter({ ...priceFilter })
                break;
            case 'range2':
                priceFilter.price_range2.check = e.target.checked
                setPriceFilter({ ...priceFilter })
                break;
            case 'range3':
                priceFilter.price_range3.check = e.target.checked
                setPriceFilter({ ...priceFilter })
                break;
            case 'range4':
                priceFilter.price_range4.check = e.target.checked
                setPriceFilter({ ...priceFilter })
                break;
            case 'range5':
                priceFilter.price_range5.check = e.target.checked
                setPriceFilter({ ...priceFilter })
                break;
            default:
        }

    }
    return (
        <>
            <div className='priceFilter-container d-none d-sm-block col-6 g-0'>
                <div className='priceFilter-head'>
                    <p className='priceFilter-title'>Price</p>
                </div>

                <div className='priceFilter-list'>
                    <div className='priceFilter-pricerange'>
                        <input className='priceFilter-checkbox' onChange={(e) => handleChangePriceFilter(e)} type='checkbox' id='prcice1' name='range0' checked={priceFilter.price_range0.check} />
                        <label className='priceFilter-label' htmlFor='prcice1'>Under {priceFilter.price_range0.max}$</label>
                    </div>
                    <div className='priceFilter-pricerange'>
                        <input className='priceFilter-checkbox' onChange={(e) => handleChangePriceFilter(e)} type='checkbox' id='prcice2' name='range1' checked={priceFilter.price_range1.check} />
                        <label className='priceFilter-label' htmlFor='prcice2'>{priceFilter.price_range1.min}$ - {priceFilter.price_range1.max}$</label>
                    </div>
                    <div className='priceFilter-pricerange'>
                        <input className='priceFilter-checkbox' onChange={(e) => handleChangePriceFilter(e)} type='checkbox' id='prcice3' name='range2' checked={priceFilter.price_range2.check} />
                        <label className='priceFilter-label' htmlFor='prcice3'>{priceFilter.price_range2.min}$ - {priceFilter.price_range2.max}$</label>
                    </div>
                    <div className='priceFilter-pricerange'>
                        <input className='priceFilter-checkbox' onChange={(e) => handleChangePriceFilter(e)} type='checkbox' id='prcice4' name='range3' checked={priceFilter.price_range3.check} />
                        <label className='priceFilter-label' htmlFor='prcice4'>{priceFilter.price_range3.min}$ - {priceFilter.price_range3.max}$</label>
                    </div>
                    <div className='priceFilter-pricerange'>
                        <input className='priceFilter-checkbox' onChange={(e) => handleChangePriceFilter(e)} type='checkbox' id='prcice5' name='range4' checked={priceFilter.price_range4.check} />
                        <label className='priceFilter-label' htmlFor='prcice5'>{priceFilter.price_range4.min}$ - {priceFilter.price_range4.max}$</label>
                    </div>
                    <div className='priceFilter-pricerange'>
                        <input className='priceFilter-checkbox' onChange={(e) => handleChangePriceFilter(e)} type='checkbox' id='prcice6' name='range5' checked={priceFilter.price_range5.check} />
                        <label className='priceFilter-label' htmlFor='prcice6'>Over {priceFilter.price_range5.min}$</label>
                    </div>
                </div>
            </div>
            <div className='priceFilter-container d-block d-sm-none col-6 g-0'>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PriceFilter;