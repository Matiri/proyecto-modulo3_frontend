import React from 'react';
import './../assets/styles/NavBar.css'

class NavBar extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <div className="main__NavBar-div">
                        <ul>
                            <li className="NavBar__first-element ">Company Name</li>
                            <div className="NavBar__last-elements-div">
                                <li className="NavBar__last-elements ">FEATURES</li>
                                <li className="NavBar__last-elements ">ENTERPRICE</li>
                                <li className="NavBar__last-elements ">SUPPORT</li>
                                <li>
                                    <form action="" className="NavBar__form ">
                                        <button type="button" className="NavBar__button">LOGIN</button>
                                    </form>
                                </li>
                            </div>
                        </ul>
                        <hr></hr>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default NavBar;