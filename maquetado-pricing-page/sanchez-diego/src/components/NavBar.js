import React from 'react';
import '../style/NavBar.css';

class NavBar extends React.Component {
    render(){
        return(
            <div>
                <h1>
                    Company Name
                </h1>
                <a href="#">FEATURES</a>
                <a href="#">ENTERPRISE</a>
                <a href="#">SUPPORT</a>
                <form>
                    <input type="button" value="LOGIN"></input>
                </form>
            </div>
        )
    }
}

export default NavBar;