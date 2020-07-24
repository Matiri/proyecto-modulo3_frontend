import React from 'react';
import Card from './components/Card';
import favImg from './img/fav.png';
import './App.css';

const card1 = { title: "Free", imgsrc:"", text1: "", price: "0", text2: "10 users included 2 GB of storage Help center access Email support", button: "SIGN UP FOR FREE" }
const card2 = { title: "Pro", imgsrc:{favImg}, text1: "Most Pupular", price: "15", text2: "20 users included 10 GB of storage Help center access Priority email support", button: "GET STARTED" }
const card3 = { title: "Enterprise", imgsrc:"", text1: "", price: "30", text2: "50 users included 30 GB of storage Help center access Email support", button: "CONTACT US" }

function App() {
  return (
    <div>
      <header>
        <p>Company name</p>
        <a><p>FEATURES</p></a>
        <a><p>ENTERPRISE</p></a>
        <a><p>SUPPORT</p></a>
        <input type="button" value="LOGIN" href="#"></input>
      </header>
      <h1>Pricing</h1>
      <h2>Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.</h2>
      <Card title={card1.title} price={card1.price} text2={card1.text2} button={card1.button}/>
      <Card title={card2.title} imgsrc={card2.imgsrc} price={card2.price} text1={card2.text1} text2={card2.text2} button={card2.button}/>
      <Card title={card3.title} price={card3.price} text2={card3.text2} button={card3.button}/>
      <footer>
        <h3>Company</h3>
        <ul>
          <a href="#"><li>Team</li></a>
          <a href="#"><li>History</li></a>
          <a href="#"><li>Contact us</li></a>
          <a href="#"><li>Locations</li></a>
        </ul>
        <h3>Features</h3>
        <ul>
          <a href="#"><li>Cool stuff</li></a>
          <a href="#"><li>Random feature</li></a>
          <a href="#"><li>Team feature</li></a>
          <a href="#"><li>Developer stuff</li></a>
          <a href="#"><li>Another one</li></a>
        </ul>
        <h3>Resources</h3>
        <ul>
          <a href="#"><li>Resource</li></a>
          <a href="#"><li>Resource name</li></a>
          <a href="#"><li>Another resource</li></a>
          <a href="#"><li>Final resource</li></a>
        </ul>
        <h3>Legal</h3>
        <ul>
          <a href="#"><li>Privacy policy</li></a>
          <a href="#"><li>Terms of use</li></a>
        </ul>
        <p>Copyright © <a href="#">Your Website</a> 2020.</p>
      </footer>
    </div>
    );
}

export default App;
