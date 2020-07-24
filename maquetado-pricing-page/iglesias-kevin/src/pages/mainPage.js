import React from 'react';
import Title from '../components/mainTitle.js';
import Navbar from '../components/navBar.js';
import Footer from '../components/footer.js';
import '../assets/css/styles.css'

function App() {
  return (
    <body>
      <section className="div-container">
        <Navbar/>
        <Title pageTitle="Pricing" pageDescription="Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."/>
        <Footer/>
      </section>
    </body>
  );
}

export default App;
