import React from 'react'
import { useDispatch } from 'react-redux'
// import { setCategory } from './redux/actions/categoryAction';
import { NavLink } from 'react-router-dom'

export const ProductRow = (props) => {
    const dispatch = useDispatch();

    return (
        <div className="productRowContainer">
            <NavLink className="inactive" activeClassName="active" to="/products/shirts">
                <div className="product-image">
                    <img key={1} src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="img"/>
                </div>
                <h2>Shirts</h2>
            </NavLink>
            <NavLink className="inactive" activeClassName="active" to="/products/jewelery">
                <div className="product-image">
                    <img key={1} src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="img"/>
                </div>
                <h2>Jewelery</h2>
            </NavLink>
            <NavLink className="inactive" activeClassName="active" to="/products/jackets">
                <div className="product-image">
                    <img key={1} src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt="img"/>
                </div>
                <h2>Jackets</h2>
            </NavLink>
            <NavLink className="inactive" activeClassName="active" to="/products/electronics">
                <div className="product-image">
                    <img key={1} src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="img"/>
                </div>
                <h2>Misc</h2>
            </NavLink>
        </div>
    )
}