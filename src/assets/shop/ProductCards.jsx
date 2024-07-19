import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../components/Rating'
const ProductCards = ({gridList , products}) => {
    let scrollUp=()=>{
        window.scroll(0,0);
    }
    return (
        <div className={`shop-product-wrap row justofy-content-center ${gridList?"grid":"list"}`}>
            {
                products.map((product,i)=>(<div key={i} className='col-lg-4 col-md-6 col-12 mb-4'>
                    <div className="product-item h-100">
                        {/* product images */}
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={product.image} alt="img" className='imageShop'/>
                            </div>
                            {/* product action links */}
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`} onClick={scrollUp} className="text-decoration-none"><i className='icofont-eye'></i></Link>
                                <Link to="/cart-page" className="text-decoration-none"><i className='icofont-cart'></i></Link>
                            </div>
                        </div>
                        {/* product content */}
                        <div className="product-content">
                            <h5>
                                <Link to={`/shop/${product.id}`} className='text-decoration-none'>{product.title}</Link>
                            </h5>
                            <p className='productRating'>
                                <Rating/>
                            </p>
                            <h6>$ {product.price}</h6>
                        </div>
                    </div><div className="product-list-item">
                        {/* product images */}
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={product.img} alt="img" />
                            </div>
                            {/* product action links */}
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`} className="text-decoration-none"><i className='icofont-eye'></i></Link>
                                <a href="#" className='text-decoration-none'>
                                    <i className='icofont-heart'></i>
                                </a>
                                <Link to="/cart-page" className="text-decoration-none"><i className='icofont-cart'></i></Link>
                            </div>
                        </div>
                        {/* product content */}
                        <div className="product-content">
                            <h5>
                                <Link to={`/shop/${product.id}`} className='text-decoration-none'>{product.name}</Link>
                            </h5>
                            <p className='productRating'>
                                <Rating/>
                            </p>
                            <h6>$ {product.price}</h6>
                        </div>
                    </div>
                </div>))
            }
        </div>
    )
}

export default ProductCards