import React from 'react'
import { useLocation } from 'react-router-dom'
import { Route, Routes} from 'react-router-dom';

import HomePage from '../../pages/main_pages/HomePage';
import Calendar from '../../pages/main_pages/Calendar';
import NoteBook from '../../pages/main_pages/NoteBook';
import ContactPage from '../../pages/main_pages/ContactPage';
import NewsPage from '../../pages/main_pages/NewsPage';

import SearchPage from '../../pages/extra_pages/SearchPage';
import AllProductPage from '../../pages/extra_pages/AllProductsPage';
import DownloadPage from '../../pages/extra_pages/DownloadPage';
import AboutPage from '../../pages/main_pages/AboutPage';
import NewsContent from '../../pages/extra_pages/NewsContent';
import CartPage from '../../pages/extra_pages/CartPage';
import SingleProductDetail from '../homepageComponents/SingleProductDetail';
import CheckOut from '../../pages/extra_pages/CheckOut';
import {AnimatePresence} from "framer-motion";
import DownloadProduct from '../homepageComponents/DownloadProduct';
import DownloadAll from '../homepageComponents/DownloadAll';



function AnimationRoute() {
  const location =useLocation();
  return (
  
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
				<Route path="/" element={<HomePage/>} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/notebook" element={<NoteBook />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/about" element={<AboutPage />} />

				<Route path="news/:newscontent" element={<NewsContent />} />
				<Route path="/search" element={<SearchPage/>} />
				<Route path="/allproducts" element={<AllProductPage />} />
				<Route path="/detail/:productId" element={<SingleProductDetail/>} />
				<Route path="/download" element={<DownloadPage />} />
				<Route path="/downloadproduct" element={<DownloadProduct />} />
				<Route path="/downloadallproduct" element={<DownloadAll />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/checkout' element={<CheckOut/>}/>
			</Routes>
      </AnimatePresence>
  
  )
}

export default AnimationRoute

