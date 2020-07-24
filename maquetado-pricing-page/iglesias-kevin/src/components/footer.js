import React from 'react';
import '../assets/css/styles.css';


class Footer extends React.Component{
    render(){
        return (
            <footer>
                    <div className="main-footer">
                        <ul>
                            <p>Company</p>
                            <li>Team</li>
                            <li>History</li>
                            <li>Contact us</li>
                            <li>Locations</li>
                        </ul>
                        <ul>
                            <p>Features</p>
                            <li>Cool stuff</li>
                            <li>Random feature</li>
                            <li>Team feature</li>
                            <li>Developer stuff</li>
                            <li>Another one</li>
                        </ul>
                        <ul>
                            <p>Resources</p>
                            <li>Resource</li>
                            <li>Resource name</li>
                            <li>Another resource</li>
                            <li>Final resource</li>
                        </ul>
                        <ul>
                            <p>Legal</p>
                            <li>Privacy policy</li>
                            <li>Terms of use</li>
                        </ul>
                    </div>
            </footer>
        )
    }
}

export default Footer;
