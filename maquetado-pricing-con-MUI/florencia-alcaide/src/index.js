import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar';
import MainTitle from './Components/MainTitle'
import Page from './Components/Page'

ReactDOM.render(
  <React.StrictMode>
    <Navbar title='Company name'/>
    <MainTitle/>
  
    <Page/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

