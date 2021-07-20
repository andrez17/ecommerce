import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ProductsPage } from './ProductsPage'
import { RewardsPage } from './RewardsPage'
import { PartnersPage } from './PartnersPage'
import { ResourcesPage } from './ResourcesPage'
import { useDispatch } from 'react-redux'
import { setProducts } from './redux/actions/productActions';
import { ShirtsPage } from './ShirtsPage'
import { JeweleryPage } from './JeweleryPage'
import { JacketsPage } from './JacketsPage'
import { ElectronicsPage } from './MiscPage'

export const Site = () => {
    // const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    // const products = useSelector((state) => state);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            dispatch(setProducts(data));
        }
        fetchData();
    }, [])


    return (
            <Router>         
                <Navbar />
                {/* <main> */}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/products/shirts">
                            <ShirtsPage />
                        </Route>
                        <Route path="/products/jewelery">
                            <JeweleryPage />
                        </Route>
                        <Route path="/products/jackets">
                            <JacketsPage />
                        </Route>
                        <Route path="/products/electronics">
                            <ElectronicsPage />
                        </Route>
                        <Route path="/products">
                            <ProductsPage category={category}/>
                        </Route>

                        <Route path="/rewards">
                            <RewardsPage />
                        </Route>
                        <Route path="/partners">
                            <PartnersPage />
                        </Route>
                        <Route path="/resources">
                            <ResourcesPage />
                        </Route>
                    </Switch>
                    {/* </main> */}
                <Footer />      
            </Router>
    )
}
