import React, { useEffect } from 'react'
import { useState } from 'react'
import { json } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deImgUrt from '../images/shop/del.png'
import CheckOutPage from './CheckOutPage';
const CartPage = () => {
    const [cartItmes, setCartItmes] = useState([]);

    useEffect(() => {
        //fetch cart item from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItmes(storedCartItems)
    }, [])

    //calculate prices
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;

    }

    //handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1;
        setCartItmes([...cartItmes]);
        //update local storage with new cart items
        localStorage.setItem("cart", JSON.stringify(cartItmes));
    }
    //handle quantity decrease
    const handledecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItmes([...cartItmes]);
            //update local storage with new cart items
            localStorage.setItem("cart", JSON.stringify(cartItmes));
        }
    }

    //handle item remove
    const handleRemoveItem = (item) => {
        const updatedCart = cartItmes.filter((cartItmes) => cartItmes.id !== item.id)
        //update new cart
        setCartItmes(updatedCart);
        updateLocalStorage(updatedCart)
    }
    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    //cart subtotal
    const cartSubtotal = cartItmes.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);
    //order total
    const orderTotal = cartSubtotal;
    return (
        <div>
            <PageHeader title={"shop cart"} currentPage={"cart page"} />

            <div className="shop-cart padding-tb">
                <Container>
                    <div className="section-wrapper">
                        {/*  cart top */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='text-capitalize cart-product'>product</th>
                                        <th className='text-capitalize cart-price'>price</th>
                                        <th className='text-capitalize cart-quantity'>quatity</th>
                                        <th className='text-capitalize cart-toprice'>total</th>
                                        <th className='text-capitalize cart-edit'>edit</th>
                                    </tr>
                                </thead>
                                {/* table body */}
                                <tbody>
                                    {
                                        cartItmes.map((item, index) => (
                                            <tr key={index}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to="/shop" className='text-decoration-none'><img src={item.img} alt="img" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop" className='text-decoration-none'>{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className=''>
                                                    $ {item.price}
                                                </td>
                                                <td className='cat-quantity'>
                                                    <div className='cart-plus-minus'>
                                                        <div className='dec qtybutton' onClick={() => handledecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className='inc qtybutton' onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                                <td className='car-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}><img src={deImgUrt} alt="img" /></a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* *********************** cart top end*************************************** */}
                        {/* cart buttom */}
                        <div className="cart-bottom">
                            {/* checkout box */}
                            <div className="cart-checkout-box">
                                <form className='coupon'>
                                    <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon code' />
                                    <input type="submit" value="Apply Coupon" />
                                </form>
                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div className="">
                                        <CheckOutPage/>
                                    </div>
                                </form>
                            </div>
                            {/********************** checkout box end ***************************/}
                            {/* shopping box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3 className='text-capitalize'>calculate shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="uk" className='text-capitalize'>united kingdom (UK)</option>
                                                    <option value="usa" className='text-capitalize'>united states (USA) </option>
                                                    <option value="pak" className='text-capitalize'>palistan</option>
                                                    <option value="ind" className='text-capitalize'>india</option>
                                                    <option value="np" className='text-capitalize'>nipal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="uk" className='text-capitalize'>london</option>
                                                    <option value="usa" className='text-capitalize'>new york</option>
                                                    <option value="pak" className='text-capitalize'>dhaka</option>
                                                    <option value="ind" className='text-capitalize'>new delhi</option>
                                                    <option value="np" className='text-capitalize'>kathmandu</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <input type="text" name='postalCode' id='postalCode' className='cart-page-input-text' placeholder='Postalcode/ZIP *' />
                                            <button type="submit" className='text-capitalize'>update address</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3 className='text-capitalize'>cart total</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='text-capitalize pull-left'>cart subtotal</span>
                                                    <p className='pull-right'>$ {cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className='text-capitalize pull-left'>shipping & Handling</span>
                                                    <p className='pull-right text-capitalize'>free shipping</p>
                                                </li>
                                                <li>
                                                    <span className='text-capitalize pull-left'>order total</span>
                                                    <p className='pull-right text-capitalize'>$ {orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default CartPage