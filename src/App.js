import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DataContext } from './context/DataContext'
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App(props) {
  return (
    <DataContext>
      <Header />
      <NavBar />
      <Routes>
        {/* <Route path='/' element={ } />
        <Route path='/' element={ } />
        <Route path='/' element={ } />
        <Route path='/' element={ } /> */}
      </Routes>
      <Footer />
    </DataContext>
  );
}

export default App;