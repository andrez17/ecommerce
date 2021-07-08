import './App.css';
import {Site} from './Site'
import {Navbar} from './Navbar'
import {Footer} from './Footer'
import { ProductsPage } from './ProductsPage';
import { CustomersPage } from './CustomersPage';
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
          <Route path="/customers">
            <CustomersPage />
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
