import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Products.css';

const Products = () => {
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
        {
            productID: 5,
            productTitle: "Filigree Frill",
            productCategory: "demo category",
            productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/Website-Sham-11.jpg"
        },
        {
            productID: 6,
            productTitle: "Rani Haar",
            productCategory: "demo category",
            productImage: "https://shamjewellers.com/wp-content/uploads/2018/06/9-1-600x600.jpg"
        },
        {
            productID: 7,
            productTitle: "Rosy Radiance",
            productCategory: "demo category",
            productImage: "https://shamjewellers.com/wp-content/uploads/2017/06/2-1-600x692.jpg"
        },
    ];

    return (
        <section className="bg-main py-5">
            <div className="text-center">
                <h1 className='montserrat product-heading'>Explore Our Collection</h1>
            </div>
            <div className="pb-5">
                <div className="container mt-5 d-flex flex-wrap justify-content-between">
                    {products.map(product => (
                        <div key={product.productID} className="container-box col-lg-3 col-md-4 col-sm-6 mb-4">
                            <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, position: 'relative', overflow: 'hidden' }} className="product-card">
                                <Link to={`/product/${product.productID}`} className="card-link">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={product.productImage}
                                            alt={product.productTitle}
                                            sx={{ objectFit: 'cover', transition: 'transform 0.3s ease' }} // Smooth scaling effect
                                            className="card-image"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" className="card-title popins text-center">
                                                {product.productTitle}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" className="card-category text-center">
                                                {product.productCategory}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
