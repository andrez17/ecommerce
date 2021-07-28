import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1><NavLink to="/"><img className="logo" src="https://img.icons8.com/ios/500/react-native--v1.png"/></NavLink></h1>
            <ul className="navbar-links">
                <li><NavLink to="/products"><img className="search" src="https://www.pinclipart.com/picdir/big/3-38128_computer-icons-search-box-magnifying-glass-download-search.png"/>Products</NavLink></li>
                <li><NavLink to="/rewards"><img className="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>Sign-In</NavLink></li>
                <li><NavLink to="/partners"><img className="partners" src="https://static.thenounproject.com/png/2171-200.png"/>Partners</NavLink></li>
                <li><NavLink to="/stores"><img alt="" className="stores" src="https://cdn.iconscout.com/icon/free/png-256/shop-2853363-2376777.png"/>Stores</NavLink></li>
            </ul>
        </div>
    )
}