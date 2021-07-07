import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Slideshow } from './Slideshow'
import { ProductRow } from './ProductRow'
import { Shipping } from './Shipping'


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
        <Router>
            <div className="site-container">
                <Slideshow products={products}/>
                <ProductRow />
                <Shipping />
            </div>
        </Router>
    )
}
