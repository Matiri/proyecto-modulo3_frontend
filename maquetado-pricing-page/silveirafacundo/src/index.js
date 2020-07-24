import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// IMPORTAR COMPONENTES
import MainTitle from './components/MainTitle.js';
import NavBar from './components/NavBar';
import Card from './components/Card';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <MainTitle />
    <Card title="Free" price="$0/mo" paragraph="10 users included 2 GB of storage, Help center access and Email support" button="SIGN UP FOR FREE"/>
    <Card title="Pro" MostPopular="Most Popular" price="$15/mo" paragraph="20 users included 10 GB of storage, Help center access and Priority email support" button="GET STARTED"/>
    <Card title="Enterprise" price="$30/mo" paragraph="50 users included 30 GB of storage, Help center access, Phone & email support" button="CONTACT US"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
