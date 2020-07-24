import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="pt-4 my-md-5 pt-md-5 border-top">
                <h5>Company</h5>
                <ul className="list-unstyled text-small">
                    <li>
                        <a className="text-muted" href="#">Team</a>
                    </li>
                    <li>
                        <a className="text-muted" href="#">History</a>
                    </li>
                    <li>
                        <a className="text-muted" href="#">Contact Us</a>
                    </li>
                    <li>
                        <a className="text-muted" href="#">Locations</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;