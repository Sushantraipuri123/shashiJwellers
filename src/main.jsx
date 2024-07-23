import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Products from './components/products/Products.jsx';
import Layout from './Layout.jsx';
import ProductDetails from './components/products/ProductDetails.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Faq from './components/faq/Faq.jsx';
import Privacy from './components/privacy/Privacy.jsx';
import Tc from './components/termsComditions/Tc.jsx';
import SCrollToTop from './utilities/ScrollToTo.jsx';
import Diamond  from './components/categories/diamond/Diamond.jsx';
import Gold from './components/categories/gold/Gold.jsx';
import Silver from './components/categories/silver/Silver.jsx';
import Gems from './components/categories/gems/Gems.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <SCrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />}/>
        <Route path="product/:productID" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms&Conditions" element={<Tc />} />
        <Route path="diamond" element={<Diamond />} />
        <Route path="gold" element={<Gold/>} />
        <Route path="silver" element={<Silver/>} />
        <Route path="gems" element={<Gems/>} />
      </Route>
    </Routes>
    </Router>
  </React.StrictMode>
);
