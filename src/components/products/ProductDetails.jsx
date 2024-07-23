import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Favourites from '../home/favourites/Favourites';

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

const ProductDetails = () => {
    const [showImageModal, setShowImageModal] = useState(false);
    const [showQueryModal, setShowQueryModal] = useState(false);

    const handleCloseImageModal = () => setShowImageModal(false);
    const handleShowImageModal = () => setShowImageModal(true);

    const handleCloseQueryModal = () => {
        reset();
        setShowQueryModal(false);
    };
    const handleShowQueryModal = () => setShowQueryModal(true);

    const { productID } = useParams();
    const product = products.find(p => p.productID === parseInt(productID));

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert('Form submitted');
        console.log(data);
        handleCloseQueryModal();
    };

    if (!product) return <div>Product not found</div>;

    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-lg-5 col-md-6">
                    <div className="image-container">
                        <img
                            src={product.productImage}
                            alt={product.productTitle}
                            className="image img-fluid"
                            onClick={handleShowImageModal}
                        />
                    </div>
                </div>
                <div className="col-lg-7 col-md-6">
                    <div className="details-content">
                        <h3>{product.productTitle}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempore fuga impedit suscipit incidunt id dolore natus ipsum atque repudiandae pariatur dolor possimus excepturi ipsam, necessitatibus sit neque sequi quibusdam.</p>
                        <Button variant="contained" onClick={handleShowQueryModal}>Send Query</Button>
                        <div className='mt-4'>
                            <strong>Category: </strong> {product.productCategory}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            <Modal show={showImageModal} onHide={handleCloseImageModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{product.productTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={product.productImage}
                        alt={product.productTitle}
                        className="img-fluid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseImageModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Query Modal */}
            <Modal show={showQueryModal} onHide={handleCloseQueryModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Send Query</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <span className="text-danger">{errors.name.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Invalid email address'
                                    }
                                })}
                            />
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                id="phone"
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: 'Phone number must be 10 digits'
                                    }
                                })}
                            />
                            {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                id="message"
                                rows="3"
                                {...register('message', { required: 'Message is required' })}
                            ></textarea>
                            {errors.message && <span className="text-danger">{errors.message.message}</span>}
                        </div>
                        <Modal.Footer>
                            <Button variant="contained" color="primary" type="submit">
                                Send Query
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

            <div className="container mt-5">
                <h4>You may also like</h4>
                <Favourites />
            </div>
        </div>
    );
};

export default ProductDetails;
