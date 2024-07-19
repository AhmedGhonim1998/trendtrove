import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import { Container } from 'react-bootstrap';
import ProductCards from './ProductCards';
import PageNation from './PageNation';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResult = "showing 01-12 of 139 results";

const Shop = () => {
    const [gridList, setGridList] = useState(true);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => {
                setProducts(res);
                setFilteredProducts(res);
            });
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const menuItems = ["All", ...new Set(products.map((val) => val.category))];

    const filterItem = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);

        if (category === "All") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <PageHeader title="Our Shop Page" currentPage="shop" />
            <div className="shop-page padding-tb">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p className='text-capitalize'>{showResult}</p>
                                    <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid text-decoration-none' onClick={() => setGridList(true)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list text-decoration-none' onClick={() => setGridList(false)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <ProductCards gridList={gridList} products={currentProducts} />
                                </div>
                                <PageNation
                                    productsPerPage={productsPerPage}
                                    totalProducts={filteredProducts.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={filteredProducts} gridList={gridList} />
                                <ShopCategory 
                                    filterItem={filterItem}
                                    menuItems={menuItems}
                                    selectedCategory={selectedCategory}
                                />
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

export default Shop;
