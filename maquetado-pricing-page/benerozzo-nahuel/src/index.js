import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import MainTitle from './componentes/MainTitle';
// import Card from './componentes/Card';
// import NavBar from './componentes/NavBar';
// import CardList from './componentes/cardList';
// import Footer from './componentes/footer';
import Page from './pages/pages.js';
ReactDOM.render(
  <React.StrictMode>
    {/* <Card precio=" 14 " user="10" storage="2" support="" button="sign up for free" titleCard="FREE" /> */}
    {/* {<NavBar
    companyName=" Company Name " 
    navFeatures=" features " 
    navEnterprise=" enterprise " 
    navSupport=" support " 
    navButtonText=" login "/>} */}
    {/* {<CardList
  cardListTitle="Company"
  cardFirstList="Team"
  cardSecondList=" History "
  cardThirdList=" Contact us "
  cardFourthList=" location "
  cardFifthList="" />} */}
  {<Page />}
  {<Footer copyright="Your Website"/>}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
