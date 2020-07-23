import React from 'react';
import '../style/Card.css';

class Card extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <h1>Free</h1>
                </div>
                <h2>$0/mo</h2>
                <p>10 users included 2 GB of storage Help center access Email support</p>
                <form>
                    <input type="button" value="SIGN FOR FREE"/>
                </form>
            </div>
        )
    }
}

export default Card;