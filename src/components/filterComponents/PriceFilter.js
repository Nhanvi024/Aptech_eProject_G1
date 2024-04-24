import './PriceFilter.css'

import React from 'react';

function PriceFilter(props) {

    const handleChangePriceFilter = (e)=>{
        
    }
    return (
        <div className='priceFilter-container'>
             <div className='priceFilter-head'>
                <p className='priceFilter-title'>Price Filter</p>
            </div>

            <div className='priceFilter-list'>
               <div className='priceFilter-pricerange'>
                <input className='priceFilter-checkbox' onChange={()=>handleChangePriceFilter()} type='checkbox' id='prcice1' value='>10'/>
                <label className='priceFilter-label' htmlFor='prcice1'>Under 10 $</label>
               </div>
               <div className='priceFilter-pricerange'>
                <input className='priceFilter-checkbox' onChange={()=>handleChangePriceFilter()} type='checkbox' id='prcice2' value='>10'/>
                <label className='priceFilter-label' htmlFor='prcice2'>10$ - 20$</label>
               </div>
               <div className='priceFilter-pricerange'>
                <input className='priceFilter-checkbox' onChange={()=>handleChangePriceFilter()} type='checkbox' id='prcice3' value='>10'/>
                <label className='priceFilter-label' htmlFor='prcice3'>20$ - 50$</label>
               </div>
               <div className='priceFilter-pricerange'>
                <input className='priceFilter-checkbox' onChange={()=>handleChangePriceFilter()} type='checkbox' id='prcice4' value='>10'/>
                <label className='priceFilter-label' htmlFor='prcice4'>50$ - 70$</label>
               </div>
               <div className='priceFilter-pricerange'>
                <input className='priceFilter-checkbox' onChange={()=>handleChangePriceFilter()} type='checkbox' id='prcice5' value='>10'/>
                <label className='priceFilter-label' htmlFor='prcice5'>70$ - 100$</label>
               </div>
               <div className='priceFilter-pricerange'>
                <input className='priceFilter-checkbox' onChange={()=>handleChangePriceFilter()} type='checkbox' id='prcice6' value='>10'/>
                <label className='priceFilter-label' htmlFor='prcice6'>Over 100$</label>
               </div>
            </div>
        </div>
    );
}

export default PriceFilter;