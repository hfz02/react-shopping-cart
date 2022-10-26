import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import store from './redux-sc/redux/store';
import { store } from './simple-sc/store';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// window.React = require('react')
//   console.log(window.React.Children.count())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
          <App />
      </Provider>
    </Router>
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
