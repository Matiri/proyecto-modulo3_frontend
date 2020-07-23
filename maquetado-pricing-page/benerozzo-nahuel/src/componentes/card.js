import React from 'react';
import './../styles/cardStyle.css';

class Card extends React.Component{
    render(){
        return(
            <div className=" mainCardDiv ">
                <div className="centerCard">
                <div className=" titleCard ">
                    <h1>
                        {this.props.titleCard}
                    </h1>
                </div>
                <div className=" cardContent ">
                    <h1>$ {this.props.precio}</h1>
                    <ul>
                        <li>{this.props.user} users included</li>
                        <br></br>
                        <li>{this.props.storage} GB of storage</li>
                        <br></br>
                        <li>Help center access</li>
                        <br></br>
                        <li>{this.props.support} email support</li>
                    </ul>
                </div>
                <a className="buttonLink" href="#"><input className="cardButton" type="button" value={this.props.button} /></a>
                </div>
            </div>
        )
    }
}
export default Card;