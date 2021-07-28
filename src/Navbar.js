import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <div className="navbar-container">
            <h1><NavLink to="/"><img className="logo" src="https://img.icons8.com/ios/500/react-native--v1.png"/></NavLink></h1>
            <ul className="navbar-links">
                <li>
                    <NavLink className="inactive-nav" activeClassName="active-nav" to="/products">
                        <div className="nav-li-container">
                            <img className="search" src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"/>
                            Products
                        </div>
                    </NavLink></li>
                <li>
                    <NavLink className="inactive-nav" activeClassName="active-nav" to="/rewards">
                        <div className="nav-li-container">
                            <img className="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
                            Sign-In
                        </div>
                    </NavLink></li>
                <li>
                    <NavLink className="inactive-nav" activeClassName="active-nav" to="/partners">
                        <div className="nav-li-container">
                            <img className="partners" src="https://static.thenounproject.com/png/2171-200.png"/>
                            Partners
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="inactive-nav" activeClassName="active-nav" to="/stores">
                        <div className="nav-li-container">
                            <img alt="" className="stores" src="https://cdn.iconscout.com/icon/free/png-256/shop-2853363-2376777.png"/>
                            Stores
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}