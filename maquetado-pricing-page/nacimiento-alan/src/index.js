import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  Card from "./components/Card"

ReactDOM.render(
  <Card 
        titulo="Pro"
        precio="$0" 
        descripcion = 
        "10 users included 
        2 GB of storage
        Help center access
        Email support"
        nombreBoton = "SING UP FOR FREE" 
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
   serviceWorker.unregister();
