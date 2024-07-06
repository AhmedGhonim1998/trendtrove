import React, { useState } from 'react'
const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterprise an sources applications emerging psd template.";
const ProductDisplay = ({ item }) => {
    const { name, id, price, seller, ratingsCount, quantity } = item;
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
                <form>
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
                        <div className="">-</div>
                        <input type="text" name='qtybutton' id='qtybutton'/>
                        <div className="">+</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay