import React from 'react';

const PageNation = ({ productsPerPage, totalProducts, paginate, activePage }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <ul className='default-pagination lab-ul'>
            <li>
                <button
                    className='text-decoration-none bg-transparent border-0'
                    onClick={() => {
                        if (activePage > 1) {
                            paginate(activePage - 1);
                        }
                    }}
                >
                    <i className='icofont-rounded-left'></i>
                </button>
            </li>
            {
                pageNumber.map((number) => (
                    <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                        <button
                            onClick={() => paginate(number)}
                            className='bg-transparent border-0'
                        >
                            {number}
                        </button>
                    </li>
                ))
            }
            <li>
                <button
                    className='text-decoration-none bg-transparent border-0'
                    onClick={() => {
                        if (activePage < pageNumber.length) {
                            paginate(activePage + 1);
                        }
                    }}
                >
                    <i className='icofont-rounded-right'></i>
                </button>
            </li>
        </ul>
    );
};

export default PageNation;
