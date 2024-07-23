import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import { Link } from "react-router-dom";

const Brand = () => {

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

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className="brand-heading mt-4">
                <h4 className=" text-center mb-4">Latest Arrivals</h4>
            </div>
            <div className="car_brand">
            <Slider {...settings}>
        {products.map(product => (
          <div key={product.productID} className="jwellery-slider">
            <Link to={`/product/${product.productID}`} >
            <div className="image-container">
              <img src={product.productImage} alt={`Jewellery ${product.productID}`} className="img-fluid" />
              <div className="overlay">
                <div className="overlay-text product-tittle"> {product.productTitle}</div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
            </div>
        </div>
    );
};

export default Brand;