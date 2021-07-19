import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from './redux/actions/categoryAction';

export const ProductRow = (props) => {
    const dispatch = useDispatch();

    return (
        <div className="productRowContainer">
            <div onClick={() => {
                dispatch(setCategory("shirts"))              
                window.location.href="/products"
                }}>
                <img key={1} src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="img"/>
                <h2>Shirts</h2>
            </div>
            <div onClick={() => window.location.href="/products"}>
                <img key={1} src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="img"/>
                <h2>Pants</h2>
            </div>
            {/* <div>
                <img key={1} src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="img"/>
                <h2>Shoes</h2>
            </div> */}
            <div onClick={() => window.location.href="/products"}>
                <img key={1} src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt="img"/>
                <h2>Jackets</h2>
            </div>
            <div onClick={() => window.location.href="/products"}>
                <img key={1} src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="img"/>
                <h2>Accessories</h2>
            </div>
        </div>
    )
}