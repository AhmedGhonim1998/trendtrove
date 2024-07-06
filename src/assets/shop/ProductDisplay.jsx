import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterprise an sources applications emerging psd template.";
const ProductDisplay = ({ item }) => {
    const { name, id, price, seller, ratingsCount, quantity, img } = item;
    const [preQuantity, steQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }
    const handleSizeColor = (e) => {
        setColor(e.target.value);
    }
    const handleDecrease = () => {
        if (preQuantity > 1) {
            steQuantity(preQuantity - 1)
        }
    }
    const handleIncecrease = () => {
        steQuantity(preQuantity + 1)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: preQuantity,
            size: size,
            color: color,
            coupon: coupon
        }
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);
        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += preQuantity;
        } else {
            existingCart.push(product);
        }
        //update local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));
        //reset from fields
        steQuantity(1);
        setSize("Select Size");
        setColor("select Color");
        setCoupon("")
    }
    return (
        <div>
            <div className="">
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span> {ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>

            {/* cart components */}
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
                        <select value={color} onChange={handleSizeColor}>
                            <option>Select color</option>
                            <option>Pink</option>
                            <option>Ash</option>
                            <option>Red</option>
                            <option>White</option>
                            <option>Blue</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>

                    {/* cart plus minus */}
                    <div className="cart-plus-minus">
                        <div className="dec qtybutton" onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={preQuantity} onChange={(e) => steQuantity(parseInt(e.target.value, 10))} />
                        <div className="inc qtybutton" onClick={handleIncecrease}>+</div>
                    </div>
                    {/* coupon field */}
                    <div className="discount-code">
                        <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />
                    </div>

                    {/* button section */}
                    <button type='submit' className='lab-btn text-capitalize text-white'>add to cart</button>
                    <Link to="/cart-page" type='submit' className='lab-btn text-capitalize text-white bg-primary text-decoration-none'>check out</Link>

                </form>
            </div>
        </div>
    )
}

export default ProductDisplay