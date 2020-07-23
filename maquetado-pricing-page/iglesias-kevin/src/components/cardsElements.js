import React from 'react';
import '../assets/css/styles.css'


class Cards extends React.Component{
    render(){
        return(
            <body>
        <div className="card">
            <div className="card-title"><h1>{this.props.cardTitle}</h1></div>
            <div className="card-text">
            <span className="price"></span>
                <h2>{this.props.cardPrice}</h2>
                <ul>
                    <li>{this.props.totalUsers}</li>
                    <li>{this.props.totalStorage}</li>
                    <li>{this.props.centerAccess}</li>
                    <li>{this.props.emailSupport}</li>
                </ul>
            </div>
             <div className="card-stats">
                <button className="card-button">{this.props.buttonMSJ}</button>
            </div> 
        </div>
        </body>
        )
    }
}

export default Cards;