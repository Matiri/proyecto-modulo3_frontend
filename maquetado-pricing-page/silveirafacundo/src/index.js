import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// IMPORTAR COMPONENTES
import MainTitle from './components/MainTitle.js';
import NavBar from './components/NavBar';
import CardFree from './components/CardFree';
import CardPro from './components/CardPro';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <MainTitle />
    <CardFree />
    <CardPro />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
