import React from 'react'
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: '/images/category/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: '/images/category/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: '/images/category/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: '/images/category/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: '/images/category/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: '/images/category/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]
const HomeCategory = () => {
    return (
        <>
            <div className='category-section style-4 padding-tb ps-2 pe-2'>
                <Container>
                    {/* section header */}
                    <div className="section-header text-center">
                        <span className='subtitle'>{subTitle}</span>
                        <h2 className='title'>{title}</h2>
                    </div>
                    {/* section card */}
                    <div className="section-wapper">
                        <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                            {
                                categoryList.map((val, i) => (<div key={i} className='col'>
                                    <Link to="/shop" className='category-item text-decoration-none'>
                                        <div className='category-inner p-0'>
                                            <Card className="bg-dark text-white card-category">
                                                <Card.Img src={val.imgUrl} alt="Card image" />
                                                <Card.ImgOverlay className='imag-over-lay position-relaive'>
                                                    <div className="d-flex justify-content-start image-overlay-content position-absolute w-100 pb-2">
                                                        <div className="categoty-icon cate-icon">
                                                            <i className={val.iconName}></i>
                                                        </div>
                                                        <Link to="/shop" className='text-decoration-none my-auto link-category'>{val.title}</Link>
                                                    </div>
                                                </Card.ImgOverlay>
                                            </Card>
                                        </div>
                                    </Link>
                                </div>))
                            }
                        </div>
                        <div className="text-center mt-5">
                            <Link to="/shop" className='lab-btn text-decoration-none'><span>{btnText}</span></Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default HomeCategory