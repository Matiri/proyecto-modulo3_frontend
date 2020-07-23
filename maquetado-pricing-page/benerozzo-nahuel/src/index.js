import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import MainTitle from './componentes/MainTitle';
import Card from './componentes/Card'

ReactDOM.render(
  <React.StrictMode>
    <Card precio=" 14 " user="10" storage="2" support="" button="sign up for free" titleCard="FREE" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
