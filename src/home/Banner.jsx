import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';

const title = (
    <h2 className='text-capitalize'>search your one from <span>thousand</span> of products</h2>
);
const desc = "we have the largest collections of products";

const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More than 2000 Merchants",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];

export default function Banner() {
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => {
                setProducts(res);
                setFilteredProducts(res);
            });
    };

    // Search function
    const handleSearch = e => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        // Filtering products based on search
        const filtered = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProducts(filtered);
    };

    return (
        <div className="banner-section style-4">
            <Container>
                <div className="banner-content">
                    {title}
                    <form>
                        <SelectedCategory select={"all"} />
                        <input
                            type="text"
                            name='search'
                            id='search'
                            placeholder='Search your product'
                            value={searchInput}
                            onChange={handleSearch}
                        />
                        <button type='submit'><i className="icofont-search"></i></button>
                    </form>
                    <p>{desc}</p>
                    <ul className='lab-ul'>
                        {
                            searchInput && filteredProducts.map((product, i) => (
                                <li key={i}>
                                    <Link to={`/shop/${product.id}`} className="text-decoration-none text-black">
                                        {product.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
        </div>
    );
}
