import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDisplay = ({ item }) => {
    const { title, id, price, image, rating, description } = item || {};
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
    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
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
            existingCart.push(product);
        }
        localStorage.setItem("cart", JSON.stringify(existingCart));
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");
    }

    let scrollUp = () => {
        window.scroll(0, 0);
    }

    console.log(item); // Log the item to check its structure

    return (
        <div>
            <div className="">
                <h4>{title}</h4>
                <p className='rating'>
                    {rating && (
                        <>
                            <i className='icofont-star'></i>
                            <i className='icofont-star'></i>
                            <i className='icofont-star'></i>
                            <i className='icofont-star'></i>
                            <i className='icofont-star'></i>
                            <span> {rating.rate}</span>
                        </>
                    )}
                </p>
                <h4>${price}</h4>
                <p>{description}</p>
            </div>
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="select-product size">
                        <select value={size} onChange={handleSizeChange}>
                            <option>Select Size</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    <div className="select-product color">
                        <select value={color} onChange={handleColorChange}>
                            <option>Select color</option>
                            <option>Pink</option>
                            <option>Ash</option>
                            <option>Red</option>
                            <option>White</option>
                            <option>Blue</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    <div className="cart-plus-minus">
                        <div className="dec qtybutton" onClick={handleDecrease}>-</div>
                        <input
                            className='cart-plus-minus-box'
                            type="text"
                            name='qtybutton'
                            id='qtybutton'
                            value={preQuantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                        />
                        <div className="inc qtybutton" onClick={handleIncrease}>+</div>
                    </div>
                    <div className="discount-code">
                        <input
                            type="text"
                            placeholder='Enter Discount Code'
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='lab-btn text-capitalize text-white'>add to cart</button>
                    <Link to="/cart-page" className='lab-btn text-capitalize text-white bg-primary text-decoration-none' onClick={scrollUp}>check out</Link>
                </form>
            </div>
        </div>
    );
}

export default ProductDisplay;
