import React from 'react';
import '../assets/css/styles.css';
/* boostrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class Cards extends React.Component{
    render(){
        return (
        <div className="row">
            <div className="card bg-dark">
                <div className="card-body">
                <h5 className="card-title">{this.props.cardType}</h5>
                </div>
                    <ul className="list-group list-group-flush">
                    <h1 className="list-group">{this.props.cardPrice}</h1>
                    <li className="list-group">{this.props.totalUsers}</li>
                    <li className="list-group">{this.props.totalSpace}</li>
                    <li className="list-group">{this.props.haveAssistence}</li>
                    <li className="list-group">{this.props.emailSupp}</li>
                    <div className="card-body list-group">
                        <button className="registerButton">SIGN UP FOR FREE</button>
                    </div>
                </ul>
            </div>
        </div>
        )
    }
}

export default Cards;