import './App.css';

import React, {useContext} from 'react';
import {Route, Routes, useParams} from 'react-router-dom';
import {DataContext} from './context/DataContext';

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

function App(props) {
	const {searchProduct} = useContext(DataContext);
	const {productId} = useParams();

	return (
		<div className="calendarWebStore">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/notebook" element={<NoteBook />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/about" element={<AboutPage />} />

				<Route path="news/:newscontent" element={<NewsContent />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/allproducts" element={<AllProductPage />} />
				<Route path="/detail/:productId" element={<SingleProductDetail />} />
				<Route path="/download" element={<DownloadPage />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
