import React,{Suspense} from 'react';
import './App.css';

import {

  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'

import Home from './pages/Home';
import ProductDetail from './pages/Basket';
import Basket from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Suspense fallback = {<div>Loading...</div>}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail/>} />
            <Route path ="/basket" element={<Basket/>} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
