import React from 'react'

const PageNation = ({ productsParPage, totalProducts, paginate, activePage }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsParPage); i++) {
        pageNumber.push(i)
    }
    return (
        <ul className='default-pagination lab-ul'>
            <li>
                <a href="#" className='text-decoration-none' onClick={() => {
                    if (activePage < pageNumber.length) {
                        paginate(activePage - 1)
                    }
                }}>
                    <i className='icofont-rounded-left'></i>
                </a>
            </li>
            {
                pageNumber.map((number) => (
                    <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                        <button onClick={() => paginate(number)} className='bg-transparent'>{number}</button>
                    </li>
                ))
            }
            <li>
                <a href="#" className='text-decoration-none' onClick={() => {
                    if (activePage < pageNumber.length) {
                        paginate(activePage + 1)
                    }
                }}>
                    <i className='icofont-rounded-right'></i>
                </a>
            </li>
        </ul>
    )
}

export default PageNation