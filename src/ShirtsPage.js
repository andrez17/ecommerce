import React from 'react'
import { useSelector } from 'react-redux';

export const ShirtsPage = () => {
    const products = useSelector((state) => state.allProducts.products);


    return (
        <div className="productpage-container">
            {
            products.map((product) => {
                if(product.title.includes("Slim") || product.title.includes("Short")){
                    return (
                        <div className="products">
                            <img className="myProducts" src={product.image} />
                            <a>{product.title}</a>
                            <h4 className="product-price">${product.price}</h4>
                        </div>
                    )
                }
            })
        }
        </div>
    )
}