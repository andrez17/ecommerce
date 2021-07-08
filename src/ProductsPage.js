import React from 'react'

export const ProductsPage = () => {
    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="productpage-container">
            {elements.map((value) => {
                return <div className="product">Product</div>
            })}
        </div>
    )
}
