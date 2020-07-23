import React from 'react';
import '../styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a id="" className="navbar-brand" href="#">Company name</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link titulo" href="#"> <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FEATURES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ENTERPRISE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SUPPORT</a>
                        </li>
                        <li className="nav-item">
                            <button type="button" class="btn btn-light">LOGIN</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;