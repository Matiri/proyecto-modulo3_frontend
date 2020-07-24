import React from 'react';
import '../styles/Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card m-3 text-center" id="card">
                <h5 className="card-header" id="card-title">Free</h5>
                <div className="card-body">
                    <h2 className="card-title">$0<span>/mo</span></h2>
                </div>
                <div>
                   <ul className="list-unstyled mt-3 mb-4">
                       <li>10 users included</li>
                       <li>2 GB of storage</li>
                       <li>Help center access</li>
                       <li>Email support</li>
                   </ul>
                </div>
                <button type="button" class="btn btn-outline-primary"><b>SING UP FOR FREE</b></button>
            </div>
        )
    }
}

export default Card;