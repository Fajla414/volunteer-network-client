import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';
import ProductDetail from './components/ProductDetail/ProductDetail';

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/productDetail/:id' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;