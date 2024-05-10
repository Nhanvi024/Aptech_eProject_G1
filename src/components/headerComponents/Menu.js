import './Menu.css';
import arrowIcon from '../../assets/image/header/icon/arrow.svg';

import React, {useContext, useEffect, useState} from 'react';
import MenuIcon from '../../assets/image/header/icon/menuIcon.svg';
import {Link, useNavigate} from 'react-router-dom';
import {DataContext} from '../../context/DataContext';
import $ from 'jquery';

function Menu(props) {
	const navigate = useNavigate();

	const {setBtnActive} = useContext(DataContext);
	const menuDetail = [
		{name: 'HOME', href: '/'},
		{name: 'NEWS', href: '/news'},
		{name: 'ALL PRODUCTS', href: '/allproducts'},
		{ name: 'DOWNLOAD ALL PRODUCTS', href: '/downloadallproduct' },
		{name: 'CONTACT', href: '/contact'},
	];

	return (
		<div className="menuContainer">
			<div className="menuButton" onClick={() => $('#menuDetail').slideToggle()}>
				<img className="menuIcon" src={MenuIcon} alt="menuIcon" />
				<p className="menuText">Menu</p>
			</div>
			<div id="menuDetail">
				{menuDetail.map((item, index) => {
					return (
						<div key={index} className="menuTab" id={`menuTab_${index}`} onClick={(e) => console.log(e.target.id)}>
							<div className="menu-products-container">
								{/* <img className='iconArrow' src='/assets/image/extra/angleRight.svg' alt='...' /> */}
								<Link
									className="tabLink"
									onClick={() => {
										setBtnActive(item.name);
										$('#menuDetail').slideUp();
									}}
									to={item.href}>
									{item.name}{' '}
								</Link>
								{item.name === 'ALL PRODUCTS' && (
									<>
										<img
											className="iconArrow"
											id="iconDownArrow"
											src="/assets/image/extra/angleLeft.svg"
											onClick={() => {
												$('#menu-products-child-container').slideDown();
												$('#iconUpArrow').show();
												$('#iconDownArrow').hide();
											}}
										/>
										<img
											className="iconArrow"
											id="iconUpArrow"
											src="/assets/image/extra/angleDown.svg"
											style={{display: 'none'}}
											onClick={() => {
												$('#menu-products-child-container').slideUp();
												$('#iconUpArrow').hide();
												$('#iconDownArrow').show();
											}}
										/>
									</>
								)}
							</div>

							{item.name === 'ALL PRODUCTS' && (
								<div id="menu-products-child-container" style={{display: 'none'}}>
									<div className="menu-products-child-tab">
										{/* <img className='iconArrow' src='/assets/image/extra/angleRight.svg' alt='...' /> */}
										<Link
											className="menu-products-child"
											onClick={() => {
												setBtnActive('CALENDAR');
												$('#menuDetail').slideUp();
											}}
											to="/calendar">
											CALENDAR
										</Link>
									</div>
									<div className="menu-products-child-tab">
										{/* <img className='iconArrow' src='/assets/image/extra/angleRight.svg' alt='...' /> */}
										<Link
											className="menu-products-child"
											onClick={() => {
												setBtnActive('NOTEBOOK');
												$('#menuDetail').slideUp();
											}}
											to={item.href}>
											NOTEBOOK
										</Link>
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Menu;
