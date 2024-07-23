import React from 'react';
import { Link } from 'react-router-dom';
import './Favourite.css';

function Favourites() {
    const products = [
        {
            productID: 1,
            productTitle: "Scintillating Smile",
            productCategory: "demo category",
            productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/1-2-600x692.jpg"
        },
        {
            productID: 2,
            productTitle: "Filigree Frill",
            productCategory: "demo category",
            productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-11.jpg"
        },
        {
            productID: 3,
            productTitle: "Rani Haar",
            productCategory: "demo category",
            productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/9-1-600x600.jpg"
        },
        {
            productID: 4,
            productTitle: "Rosy Radiance",
            productCategory: "demo category",
            productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/2-1-600x692.jpg"
        },
    ];

    return (
        <div className="container">
        
        <div className="row">
            {products.map(product => (
                <div key={product.productID} className="col-md-3 mt-3">
                    <Link to={`/product/${product.productID}`}>
                        <div className="image-container">
                            <img src={product.productImage} alt={`Jewellery ${product.productID}`} className="img-fluid" />
                            <div className="overlay">
                                <div className="overlay-text product-title">{product.productTitle}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Favourites;
