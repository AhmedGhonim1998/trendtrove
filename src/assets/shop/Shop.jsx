import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { Container } from 'react-bootstrap';
import Data from '../../products.json';
import ProductCards from './ProductCards';
import PageNation from './PageNation';
import Search from './Search';
import ShopCategory from './ShopCategory';
const showResult = "showing 01-12 of 139 results";
const Shop = () => {
    const [gridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);

    //page nation
    const [currentPage, setCurrentpage] = useState(1);
    const productsParPage = 12;

    const indexOfLastProduct = currentPage * productsParPage;
    const indexOfFirstProduct = indexOfLastProduct - productsParPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    //function to change the current page
    const paginate = (pageNumber) => {
        setCurrentpage(pageNumber)
    }
    // filtered products based on category
    const [selectedCategory, setSelectedCategory] = useState("All");
    const menuItems = [...new Set(Data.map((val) => val.category))];
    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        })
        setSelectedCategory(curcat);
        setProducts(newItem)
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
                                    <ProductCards gridList={gridList} products={currentProducts} />
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
                            <aside>
                                <Search products={products} gridList={gridList} />
                                <ShopCategory 
                                filterItem={filterItem}
                                setItem={setProducts}
                                menuItems={menuItems}
                                setProducts={setProducts}
                                SelectedCategory={setSelectedCategory}
                                />
                            </aside>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Shop