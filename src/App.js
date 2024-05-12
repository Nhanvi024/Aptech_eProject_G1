import './App.css';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimationRoute from './components/AnimationComponents/AnimationRoute';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';
import ScrollButton from './components/footerComponents/ScrollButton';

function App(props) {

	return (
		<div className="calendarWebStore">
				<Header />
				<AnimationRoute />
				<ScrollButton/>
				<Footer />
		</div>
	);
}

export default App;
