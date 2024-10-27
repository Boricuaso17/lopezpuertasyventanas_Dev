import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductsAndServices from './components/ProductsAndServices/ProductsAndServices'
import Qoutes from './components/Quotes/Quotes'
import AboutUs from './components/AboutUs/AboutUs'; // Example pages
import Gallery from './components/Gallery/Gallery'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<ProductsAndServices />} />
         <Route path="/gallery/:type" element={<Gallery />} />
         <Route path="/quotes" element={<Qoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
