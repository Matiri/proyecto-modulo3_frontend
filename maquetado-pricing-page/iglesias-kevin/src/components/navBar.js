import React from 'react';
import '../assets/css/styles.css';


class NavBar extends React.Component{
    render(){
        return (
        <header className="navBar-header">
            <div className="navBar-div">
                <p>Company Name</p>
                <nav>
                    <ul>
                        <li><a href="#">FEATURES</a></li>
                        <li><a href="#">ENTERPRISE</a></li>
                        <li><a href="#">SUPPORT</a></li>
                        <li><a href="#"><button className="login-btn">LOGIN</button></a></li>                   
                    </ul> 
                </nav>
            </div>
        </header>
        )
    }
}

export default NavBar;