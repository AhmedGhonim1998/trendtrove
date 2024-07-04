import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Search = ({products , gridList}) => {
    const[searchTrem, setSearchTrem]=useState("");

    const filteredProducts = products.filter((product)=>(product.name.toLowerCase().includes(searchTrem.toLowerCase())));
    return (
        <div className='widget widget-search'>
            <form className='search-wrapper mb-3'>
                <input type="text"  name='search' id='search' placeholder='search...' defaultValue={searchTrem} onChange={(e)=>setSearchTrem(e.target.value)}/>
                <button type='submit'>
                    <i className='icofont-search'></i>
                </button>
            </form>

            {/* showing search result */}
            <div>
                {
                    searchTrem && filteredProducts.map((product)=>(
                        <Link key={product.id} to={`/shop/${product.id}`}>
                            <div className="d-flex gab-3 p-2">
                                <div>
                                    <div className="pro-thumb h-25">
                                        <img src={product.img} alt="img" width={70} className='flex-{grow|shrink}-0'/>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <p className='ms-2'>
                                        <Link to={`/shop/${product.id}`} className='text-decoration-none text-black'>{product.name}</Link>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Search