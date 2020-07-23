import React from 'react';
import '../styles/navbar.css';

function NavBar(){
    return (
        <nav className="main-navBar">
            <div className="compText">
                <p>Ryan's company</p>
            </div>
            <div className="links">
                <a href="#">FEATURES</a>
                <a href="#">ENTERPRISE</a>
                <a href="#">SUPPORT</a>
                <button className="login-btn">LOGIN</button>
            </div>
        </nav>
    )
}

export default NavBar;