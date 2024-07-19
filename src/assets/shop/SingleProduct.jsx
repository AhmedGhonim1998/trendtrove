import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import pro from '../../products.json';
import PageHeader from '../../components/PageHeader';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"
import ProductDisplay from './ProductDisplay';
import Rieview from './Rieview';
import PopularPost from './PopularPost';
import Tags from './Tags';
const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))
    }, [])
    const resutl = product.filter((p) => p.id === id);
    return (
        <div>
            <PageHeader title={"OUR SHOP SINGLE"} currentPage={"Shop / single product"} />

            <div className="shop-single padding-tb aside-bg">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <div>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <div className="swiper-container pro-single-top">
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={true}
                                                        autoplay={{
                                                            delay: 2000,
                                                            disableOnInteraction: false
                                                        }}
                                                        modules={[Autoplay]}
                                                        navigation={
                                                            {
                                                                prevEl: ".pro-single-prev",
                                                                nextvEl: ".pro-single-next",
                                                            }
                                                        }
                                                        className="mySwiper">
                                                        {
                                                            resutl.map((item, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className="single-thumb">
                                                                        <img src={item.img} alt="img" />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                    <div className="pro-single-next">
                                                        <i className='icofont-rounded-left'></i>
                                                    </div>
                                                    <div className="pro-single-prev">
                                                        <i className='icofont-rounded-right'></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-12">
                                            <div className="post-content">
                                                <div className="">
                                                    {
                                                        resutl.map(item => <ProductDisplay key={item.id} item={item}/>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* reviews */}
                                <div className="review">
                                    <Rieview/>
                                </div>
                            </div>
                        </div>

                        {/* right side */}
                        <div className="col-lg-4 col-12">
                            <aside className='ps-lg-4'>
                                <PopularPost/>
                                <Tags/>
                            </aside>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default SingleProduct