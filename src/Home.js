import React, {useEffect} from 'react'
import { Slideshow } from './Slideshow'
import { ProductRow } from './ProductRow'
import { Shipping } from './Shipping'
import { FashionReel } from './FashionReel'
// import { setProducts } from './redux/actions/productActions';
// import { useDispatch, useSelector } from 'react-redux'

export const Home = (props) => {

    // const products = useSelector((state) => state);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const fetchData = async() => {
    //         const response = await fetch('https://fakestoreapi.com/products/');
    //         const data = await response.json();
    //         dispatch(setProducts(data));
    //     }
    //     fetchData();
    // }, [])

    return (
        <div className="site-container">
            <Slideshow />
            <ProductRow />
            <Shipping />
            {/* <FashionReel /> */}
        </div>
    )
}