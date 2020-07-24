import React from 'react';
import '../styles/Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card text-center" id="card">
                <h5 className="card-header" id="card-title">Free</h5>
                <div className="card-body">
                    <h2 className="card-title">$0<span>/mo</span></h2>
                </div>
                <div>
                   <ul className="list-group">
                       <li>10 users included</li>
                       <li>2 GB of storage</li>
                       <li>Help center access</li>
                       <li>Email support</li>
                   </ul>
                </div>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        )
    }
}

export default Card;