import React from 'react';
import Title from '../components/mainTitle.js';
import Navbar from '../components/navBar.js';
import Footer from '../components/footer.js';
import '../assets/css/styles.css'

function App() {
  return (
    <body>
        <navbar>
            <Navbar/>
        </navbar>
        <section>
            <Title pageTitle="Pricing" pageDescription="Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."/>
        </section>
        <footer>
            <Footer/>
        </footer>
    </body>
  );
}

export default App;
