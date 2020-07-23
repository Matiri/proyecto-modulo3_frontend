import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Title from './components/mainTitle.js';
import Cards from './components/cardsElements.js';

ReactDOM.render(
  <React.StrictMode>
    <Cards cardTitle="Free" cardPrice="$0/mo" totalUsers="10 users included" totalStorage="2 GB of storage" centerAccess="Help center access" emailSupport="Email support" buttonMSJ="SIGN UP FOR FREE"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
