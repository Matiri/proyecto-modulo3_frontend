import React from 'react';
import '../styles/CardList.css';

class CardList extends React.Component {
    render(){
        return(
            <div>
                <ul className="cardList__box">
                    <h5>{this.props.cardList__title}</h5>
                    <li><a href="#"></a>{this.props.cardList1}</li>
                    <li><a href="#"></a>{this.props.cardList2}</li>
                    <li><a href="#"></a>{this.props.cardList3}</li>
                    <li><a href="#"></a>{this.props.cardList4}</li>
                    <li><a href="#"></a>{this.props.cardList5}</li>
                </ul>
            </div>
        )
    }
}

export default CardList;