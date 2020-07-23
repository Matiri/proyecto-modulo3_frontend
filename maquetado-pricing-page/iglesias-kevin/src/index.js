import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
/*  MY IMPORTS */
import Navbar from '../src/components/navBar.js';
/* import Cards from '../src/components/cardsElements.js'; */
import Title from '../src/components/mainTitle.js';


ReactDOM.render(
  <React.StrictMode>
      <Navbar/>  
      <Title pageTitle="Pricing" pageDescription="Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
