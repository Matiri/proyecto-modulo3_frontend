import React from 'react';
import '../styles/Card.css';

class Card extends React.Component {
    render(){
        return(
            <div className="card">
                <div className="card__title-box">
                    <h1 className="card__title">{this.props.cardTitle}</h1>
                </div>
                <h2 className="card__descrition">$0/mo</h2>
                <p className="card__paragraph">10 users included 2 GB of storage Help center access Email support</p>
                <form>
                    <input className="card__button" type="button" value="SIGN UP FOR FREE"/>
                </form>
            </div>
        )
    }
}

export default Card;