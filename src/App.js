import './App.css';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimationRoute from './components/AnimationComponents/AnimationRoute';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';
import ScrollButton from './components/footerComponents/ScrollButton';

function App(props) {
	const initialOptions = {
		clientId: 'AX1I0Rd45ExcqiNA2Zfa_RGZXsNLLG__6jiB1Dq1pKTCtLxjB1AIUM9fdnwcNyrqn09kSveTyWpGptCr',
		currency: 'USD',
		intent: 'capture',
		components: 'buttons',
	};
	return (
		<div className="calendarWebStore">
			<PayPalScriptProvider options={initialOptions}>
				<Header />
				<AnimationRoute />
				<ScrollButton/>
				<Footer />
			</PayPalScriptProvider>
		</div>
	);
}

export default App;
