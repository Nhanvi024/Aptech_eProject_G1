import './App.css';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimationRoute from './components/AnimationComponents/AnimationRoute';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';

function App(props) {

	return (
		<div className="calendarWebStore">
				<Header />
				<AnimationRoute />
				<Footer />
		</div>
	);
}

export default App;
