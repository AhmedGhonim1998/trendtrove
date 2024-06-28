import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import image01 from '../assets/images/shape-img/icon/01.png';
import image02 from '../assets/images/shape-img/icon/02.png';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
]
const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);

    const filterItem=(categItem)=>{
        const updateItems = ProductData.filter((curElem)=>{
            return curElem.cate===categItem;
        })
        setItems(updateItems)
    }
    return (
        <>
            <div className="course-section style-3 padding-tb">
                {/* shapes */}
                <div className="course-shape one">
                    <img src={image01} alt="img" />
                </div>
                <div className="course-shape two">
                    <img src={image02} alt="img" />
                </div>

                {/* main sction */}
                <Container>
                    {/* section header */}
                    <div className="section-header">
                        <h2 className='title'>{title}</h2>
                        <div className="course-filter-group">
                            <ul className="lab-ul">
                                <li className='text-capitalize' onClick={()=>setItems(ProductData)}>all</li>
                                <li className='text-capitalize' onClick={()=>filterItem("Shoes")}>shoes</li>
                                <li className='text-capitalize' onClick={()=>filterItem("Bags")}>bags</li>
                                <li className='text-capitalize' onClick={()=>filterItem("Phones")}>phones</li>
                                <li className='text-capitalize' onClick={()=>filterItem("Beauty")}>beauty</li>

                            </ul>
                        </div>
                    </div>
                    {/* section body */}
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                            {
                                items.map((product)=><div key={product.id} className='col'>
                                    <div className="course-item style-4">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={product.imgUrl} alt="img" />
                                                <div className="course-category">
                                                    <div className="course-cate">
                                                        <a href="" className='text-decoration-none'>{product.cate}</a>
                                                    </div>
                                                    <div className="course-review">
                                                        <Rating/>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* content */}
                                            <div className="course-content">
                                                <Link to={`/shop/${product.id}`} className='text-decoration-none text-black'><h6>{product.title}</h6></Link>
                                                <div className="course-footer">
                                                    <div className="course-author">
                                                    <Link className="text-decoration-none ca-name" to="/">{product.brand}</Link>
                                                    </div>
                                                    <div className="course-price">
                                                        {product.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default CategoryShowCase