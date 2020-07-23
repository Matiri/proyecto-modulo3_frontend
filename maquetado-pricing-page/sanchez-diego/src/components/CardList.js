import React from 'react';
import '../style/CardList.css';

class CardList extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <h3>Company</h3>
                    <li><a href="#">Team</a></li>
                    <li><a href="#"></a>History</li>
                    <li><a href="#"></a>Contact us</li>
                    <li><a href="#"></a>Locations</li>
                </ul>
            </div>
        )
    }
}

export default CardList;