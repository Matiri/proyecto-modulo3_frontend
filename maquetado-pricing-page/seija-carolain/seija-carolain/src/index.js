import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar';
import './assets/css/NavBar.css'
import MainTitle from './components/MainTitle';
import './assets/css/MainTitle.css';

ReactDOM.render(
  <React.StrictMode>
    <NavBar 
    name ="Company name"
    />
    <MainTitle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
