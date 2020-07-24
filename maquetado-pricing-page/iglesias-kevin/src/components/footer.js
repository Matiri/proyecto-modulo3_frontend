import React from 'react';
import '../assets/css/styles.css';
/* boostrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class Footer extends React.Component{
    render(){
        return (
            <footer class="page-footer font-small">
                <div class="container text-center fixed-bottom main-footer">
                    <div class="row">
                        <div class="col-md-3 mx-auto">
                             <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>
                             <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Team</a>
                                </li>
                                <li>
                                    <a href="#!">History</a>
                                </li>
                                <li>
                                    <a href="#!">Contact us</a>
                                </li>
                                <li>
                                    <a href="#!">Locations</a>
                                </li>
                            </ul>
                        </div>
                        <hr class="clearfix w-100 d-md-none"></hr>
                        <div class="col-md-3 mx-auto">
                             <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Features</h5>
                             <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Cool stuff</a>
                                </li>
                                <li>
                                    <a href="#!">Random feature</a>
                                </li>
                                <li>
                                    <a href="#!">Team feature</a>
                                </li>
                                <li>
                                    <a href="#!">Developer stuff</a>
                                </li>
                                <li>
                                    <a href="#!">Another one</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 mx-auto">
                             <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Resources</h5>
                             <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Resource</a>
                                </li>
                                <li>
                                    <a href="#!">Resource name</a>
                                </li>
                                <li>
                                    <a href="#!">Another resource</a>
                                </li>
                                <li>
                                    <a href="#!">Final resource</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 mx-auto">
                             <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Legal</h5>
                             <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="#!">Terms of use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="main-page-copy">Copyright © <a href="">Your Website</a> 2020.</p>
                </div>
            </footer>
        )
    }
}

export default Footer;


