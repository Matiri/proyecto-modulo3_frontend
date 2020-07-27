import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer class="pt-4 my-md-5 pt-md-5 border-top">
                <div class="row">
                    <div class="col-12 col-md">
                        <div class="col-6 col-md">
                            <h5>{this.props.title}</h5>
                            <ul class="list-unstyled text-small">
                                <li>
                                    <a class="text-muted" href="#">Cool stuff</a>
                                </li>
                                <li>
                                    <a class="text-muted" href="#">Random feature</a>
                                </li>
                                <li>
                                    <a class="text-muted" href="#">Team feature</a>
                                </li>
                                <li>
                                    <a class="text-muted" href="#">Stuff for developers</a>
                                </li>
                                <li>
                                    <a class="text-muted" href="#">Another one</a>
                                </li>
                                <li>
                                    <a class="text-muted" href="#">Last time</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;