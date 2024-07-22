import React from 'react';
import Data from '../../products.json';

const ShopCategory = ({ filterItem, menuItems, selectedCategory }) => {
    return (
        <>
            <div className="widget-header">
                <h5 className='ms-2 text-capitalize'>all categories</h5>
            </div>
            <div className="">
                {
                    menuItems.map((val, id) => {
                        return (
                            <button
                                className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`}
                                key={id}
                                onClick={() => filterItem(val)}
                            >
                                {val}
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShopCategory;
