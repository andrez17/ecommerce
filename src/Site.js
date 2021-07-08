import React, { useState, useEffect } from 'react'
import { Slideshow } from './Slideshow'
import { ProductRow } from './ProductRow'
import { Shipping } from './Shipping'
import { FashionReel } from './FashionReel'


export const Site = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, [])



    return (
            <div className="site-container">
                <Slideshow products={products}/>
                <ProductRow />
                <Shipping />
                <FashionReel />
            </div>
    )
}
