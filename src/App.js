import './App.css';

import React, { useContext } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { DataContext } from './context/DataContext';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/main_pages/HomePage';
import Calendar from './pages/main_pages/Calendar';
import NoteBook from './pages/main_pages/NoteBook';
import ContactPage from './pages/main_pages/ContactPage';
import NewsPage from './pages/main_pages/NewsPage';

import SearchPage from './pages/extra_pages/SearchPage';
import AllProductPage from './pages/extra_pages/AllProductsPage';
import DownloadPage from './pages/extra_pages/DownloadPage';
import AboutPage from './pages/main_pages/AboutPage';
import NewsContent from './pages/extra_pages/NewsContent';
import CartPage from './pages/extra_pages/CartPage';
import SingleProductDetail from './components/homepageComponents/SingleProductDetail';
import CheckOut from './pages/extra_pages/CheckOut';
import AnimationRoute from './components/AnimationComponents/AnimationRoute';

function App(props) {
	const { searchProduct } = useContext(DataContext);
	const { productId } = useParams();

	return (
		<div className="calendarWebStore">
			<Header />
		<AnimationRoute/>
			<Footer />
		</div>
	);
}

export default App;
