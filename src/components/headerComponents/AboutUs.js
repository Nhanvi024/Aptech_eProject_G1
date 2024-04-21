import './AboutUs.css'
import aboutUsIcon from '../../assets/image/header/icon/aboutus.svg'

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

function AboutUs(props) {
    const { btnActive, setBtnActive } = useContext(DataContext)

    return (
        <div className='aboutUsContainer'>
            <img className='aboutUsIcon' src={aboutUsIcon} alt='aboutUsIcon' />
            <Link className='aboutUsBtn'
                to='/about'
                onClick={(e) => setBtnActive(e.target.name)}
                name='ABOUT US'
                active={btnActive === 'ABOUT US' ? 'true' : 'false'}
            >ABOUT US</Link>

        </div>
    );
}

export default AboutUs;