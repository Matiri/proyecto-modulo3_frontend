import React from 'react';
import ReactDOM from 'react-dom';
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//CSS
import './index.css';
import App from './App';
//JSX with HTML
import MainTitle from './components/MainTitle';
import NavBar from './components/NavBar';
import Card from './components/Card';
//SERVICEWORKER
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <MainTitle />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
