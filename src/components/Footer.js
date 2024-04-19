import './Footer.css'

import React from 'react';
import ServicesBanner from './footerComponents/ServicesBanner';
import FooterInfo from './footerComponents/FooterInfo';

function Footer(props) {
    return (
        <div className='footerContainer'>

        <div className='footerContainer_row1'>
          <ServicesBanner/>
        </div>
        <div className='footerContainer_row2'>
           <FooterInfo/>
        </div>
        <div className='footerContainer_row3'>
           
           </div>

    </div>
    );
}

export default Footer;