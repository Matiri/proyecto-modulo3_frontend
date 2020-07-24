import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import  Card from "./components/Card"
import Titulo from './components/Titulo';
import Navbar from './components/Navbar';

ReactDOM.render(
  <Navbar />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
   serviceWorker.unregister();
