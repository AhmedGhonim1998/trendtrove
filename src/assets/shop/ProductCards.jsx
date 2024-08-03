import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../../components/Rating';

const ProductCards = ({ gridList, products }) => {
    const [preQuantity, setQuantity] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleDecrease = () => {
        if (preQuantity > 1) {
            setQuantity(preQuantity - 1);
        }
    }

    const handleIncrease = () => {
        setQuantity(preQuantity + 1);
    }

    const handleSubmit = (product) => {
        const { id, image, title, price } = product;
        const cartItem = {
            id: id,
            img: image,
            name: title,
            price: price,
            quantity: preQuantity,
            size: size,
            color: color,
            coupon: coupon
        };

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += preQuantity;
        } else {
            existingCart.push(cartItem);
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");
    }

    const scrollUp = () => {
        window.scroll(0, 0);
    }

    return (
        <div className={`shop-product-wrap row justify-content-center ${gridList ? "grid" : "list"}`}>
            {products.map((product) => (
                <div key={product.id} className='col-lg-4 col-md-6 col-12 mb-4'>
                    <div className="product-item h-100">
                        {/* Product Images */}
                        <div className="product-thumb d-flex justify-content-center align-items-center">
                            <div className="pro-thumb">
                                <img src={product.image} alt="img" className='imageShop' />
                            </div>
                            {/* Product Action Links */}
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`} onClick={scrollUp} className="text-decoration-none"><i className='icofont-eye'></i></Link>
                                <Link className='text-decoration-none' onClick={() => handleSubmit(product)}><i className='icofont-heart'></i></Link>
                                <Link to="/cart-page" className="text-decoration-none"><i className='icofont-cart'></i></Link>
                            </div>
                        </div>
                        {/* Product Content */}
                        <div className="product-content">
                            <h5>
                                <Link to={`/shop/${product.id}`} className='text-decoration-none'>{product.title}</Link>
                            </h5>
                            <p className='productRating'>
                                <Rating />
                            </p>
                            <h6>$ {product.price}</h6>
                        </div>
                    </div>
                    <div className="product-list-item">
                        {/* Product Images */}
                        <div className="product-thumb d-flex justify-content-center align-items-center">
                            <div className="pro-thumb">
                                <img src={product.image} alt="img" className='imageShop' />
                            </div>
                            {/* Product Action Links */}
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`} className="text-decoration-none"><i className='icofont-eye'></i></Link>
                                <Link className='text-decoration-none'><i className='icofont-heart' onClick={() => handleSubmit(product)}></i></Link>
                                <Link to="/cart-page" className="text-decoration-none"><i className='icofont-cart'></i></Link>
                            </div>
                        </div>
                        {/* Product Content */}
                        <div className="product-content">
                            <h5>
                                <Link to={`/shop/${product.id}`} className='text-decoration-none'>{product.title}</Link>
                            </h5>
                            <p className='productRating'>
                                <Rating />
                            </p>
                            <h6>$ {product.price}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductCards;
