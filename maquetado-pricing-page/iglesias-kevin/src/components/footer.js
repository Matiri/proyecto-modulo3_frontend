import React from 'react';
import '../assets/css/styles.css';


class Footer extends React.Component{
    render(){
        return (
            <footer>
                    <div className="main-footer">
                        <ul>
                            <p>Company</p>
                            <li><a href="">Team</a></li>
                            <li><a href="">History</a></li>
                            <li><a href="">Contact us</a></li>
                            <li><a href="">Locations</a></li>
                        </ul>
                        <ul>
                            <p>Features</p>
                            <li><a href="">Cool Stuff</a></li>
                            <li><a href="">Random feature</a></li>
                            <li><a href="">Team feature</a></li>
                            <li><a href="">Developer stuff</a></li>
                            <li><a href="">Another one</a></li>
                        </ul>
                        <ul>
                            <p>Resources</p>
                            <li><a href="">Resource</a></li>
                            <li><a href="">Resource name</a></li>
                            <li><a href="">Another resourse</a></li>
                            <li><a href="">Final resource</a></li>
                        </ul>
                        <ul>
                            <p>Legal</p>
                            <li><a href="">Privacy policy</a></li>
                            <li><a href="">Terms of use</a></li>
                        </ul>
                    </div>
                    
            </footer>
        )
    }
}

export default Footer;
