import React from 'react'


export const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1><a href="/">Ecommerce</a></h1>
            <ul className="navbar-links">
                <li><a href="/products">Products</a></li>
                <li><a href="/rewards">Rewards</a></li>
                <li><a href="/partners">Partners</a></li>
                <li><a href="/resources">Resources</a></li>
            </ul>
        </div>
    )
}