import React from 'react';
import '../styles/Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card m-3 text-center" id="card">
                <h5 className="card-header" id="card-title">{this.props.title}</h5>
                <div className="card-body">
                    <h2 className="card-title">{this.props.price}<span>/mo</span></h2>
                </div>
                <div>
                   <ul className="list-unstyled mt-3 mb-4">
                       <li>{this.props.users} users included</li>
                       <li>{this.props.gigas} GB of storage</li>
                       <li>Help center access</li>
                       <li>{this.props.email} support</li>
                   </ul>
                </div>
                <button type="button" class="btn btn-outline-primary"><b>{this.props.content}</b></button>
            </div>
        )
    }
}

export default Card;