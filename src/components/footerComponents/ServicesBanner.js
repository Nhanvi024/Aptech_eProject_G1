import React from 'react';
import './ServicesBanner.css'

function ServicesBanner(props) {
    return (
        <div className='servicesContainer'>
            <div className='delivery'>
                <img className='servicesImage' src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/policy1.png?1711094550864' alt='deliveryIcon'/>
                <p className='servicesName' >DELIVERY</p>
            </div>
            <div className='support'>
                <img className='servicesImage' src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/policy2.png?1711094550864' alt='supportIcon'/>
                <p className='servicesName'>SUPPORT 24/7</p>
            </div>
            <div className='exchange_return'>
                <img className='servicesImage' src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/policy3.png?1711094550864' alt='exchangeIcon'/>
                <p className='servicesName'>EXCHANGE OR RETURN</p>
            </div>
            <div className='standardPrice'>
                <img className='servicesImage' src='https://bizweb.dktcdn.net/100/220/344/themes/739421/assets/policy4.png?1711094550864' alt='priceIcon'/>
                <p className='servicesName'>STANDARD PRICE</p>
            </div>

        </div>
    );
}

export default ServicesBanner;