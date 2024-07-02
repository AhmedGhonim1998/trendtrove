import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { Container } from 'react-bootstrap';
import Data from '../../products.json';
import ProductCards from './ProductCards';
import PageNation from './PageNation';
const showResult = "showing 01-12 of 139 results";
const Shop = () => {
    const [gridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    //page nation
    const [currentPage, setCurrentpage] = useState(1);
    const productsParPage = 12;

    const indexOfLastProduct = currentPage * productsParPage;
    const indexOfFirstProduct = indexOfFirstProduct - productsParPage;
    const currentProducts = products.slice(indexOfFirstProduct , indexOfLastProduct);

    //function to change the current page
    const paginate=(pageNumber)=>{
        setCurrentpage(pageNumber)
    }
    return (
        <div>
            <PageHeader title="our shop page" currentPage="shop" />
            {/* shop page */}
            <div className="shop-page padding-tb">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout & title here */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p className='text-capitalize'>{showResult}</p>
                                    <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid text-decoration-none' onClick={() => setGridList(!gridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list text-decoration-none' onClick={() => setGridList(!gridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>
                                {/* product cards */}
                                <div>
                                    <ProductCards gridList={gridList} products={products} />
                                </div>
                                <PageNation 
                                productsParPage={productsParPage}
                                totalProducts={products.length}
                                paginate={paginate}
                                activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            right side
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Shop