import './App.css'

import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
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


function App(props) {
  const {searchProduct} = useContext(DataContext)

  return (
   <div className='calendarWebStore'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/notebook' element={<NoteBook/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/news' element={<NewsPage/>} />

        <Route path='/search' element={<SearchPage />} />
        <Route path='/allproducts' element={<AllProductPage/>} />
        <Route path='/download' element={<DownloadPage/>} />

      </Routes>
      <Footer />
   </div>

  );
}

export default App;