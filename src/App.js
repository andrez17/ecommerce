import './App.css';
import {Site} from './Site'
import {Navbar} from './Navbar'
import {Footer} from './Footer'
import { ProductsPage } from './ProductsPage';
import { RewardsPage } from './RewardsPage';
import { PartnersPage } from './PartnersPage';
import { ResourcesPage } from './ResourcesPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return ( 
    <div className="App">
      <Router>
        {/* <Switch> */}
          <Navbar />
          <Route exact path="/">
            <Site />
          </Route>
          <Route path="/products">
            <ProductsPage />
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
        {/* </Switch> */}
        <Footer />      
      </Router>
      </div>
  );
}

export default App;
