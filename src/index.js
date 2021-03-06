import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import { Provider } from 'react-redux'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);