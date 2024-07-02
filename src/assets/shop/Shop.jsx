import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { Container } from 'react-bootstrap';
const showResult = "showing 01-12 of139 results"
const Shop = () => {
    const[gridList , setGridList]=useState(false);
    return (
        <div>
            <PageHeader title="our shop page" currentPage="shop"/>
            {/* shop page */}
            <div className="shop-page padding-tb">
                <Container>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p className='text-capitalize'>{showResult}</p>
                                    <div className={`product-view-mode ${gridList ?"active":"listActive"}`}>
                                        <a className='grid text-decoration-none' onClick={()=>setGridList(!gridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                    </div>
                                </div>
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