import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from '../src/components/products/Products';
import ProductDetail from '../src/components/products/ProductDetails';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Products} />
            <Route path="/product/:productID" component={ProductDetail} />
        </Router>
    );
};

export default App;
