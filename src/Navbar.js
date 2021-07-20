import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1><NavLink to="/">Ecommerce</NavLink></h1>
            <ul className="navbar-links">
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/rewards">Rewards</NavLink></li>
                <li><NavLink to="/partners">Partners</NavLink></li>
                <li><NavLink to="/stores">Stores</NavLink></li>
            </ul>
        </div>
    )
}