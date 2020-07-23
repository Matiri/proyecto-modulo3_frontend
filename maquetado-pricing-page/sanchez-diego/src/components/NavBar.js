import React from 'react';
import '../styles/NavBar.css'

class NavBar extends React.Component {
    render(){
        return(
            <div className="navBar">
                <h1 className="navBar__companyName">
                    Company Name
                </h1>
                <a className="navBar__navigation" href="#">FEATURES</a>
                <a className="navBar__navigation" href="#">ENTERPRISE</a>
                <a className="navBar__navigation" href="#">SUPPORT</a>
                <form>
                    <input className="navBar__button" type="button" value="LOGIN"></input>
                </form>
            </div>
        )
    }
}

export default NavBar;