import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1><NavLink to="/ecommerce"><img className="logo" src="https://img.icons8.com/ios/500/react-native--v1.png"/></NavLink></h1>
            <ul className="navbar-links">
                <li>
                    <NavLink className="inactive-nav" activeClassName="active-nav" to="/products">
                        <div className="nav-li-container">
                            <img className="search" src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"/>
                            <a>Products</a>
                        </div>
                    </NavLink></li>
                <li>
                    <NavLink className="inactive-nav" activeClassName="active-nav" to="/rewards">
                        <div className="nav-li-container">
                            <img className="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
                            <a>Sign-In</a>
                        </div>
                    </NavLink></li>
                <li>
                    <NavLink className="inactive-nav" activeClassName="active-nav" to="/partners">
                        <div className="nav-li-container">
                            <img className="partners" src="https://static.thenounproject.com/png/2171-200.png"/>
                            <a>Partners</a>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="inactive-nav" activeClassName="active-nav" to="/stores">
                        <div className="nav-li-container">
                            <img alt="" className="stores" src="https://cdn.iconscout.com/icon/free/png-256/shop-2853363-2376777.png"/>
                            <a>Stores</a>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}