import React from 'react';
import './../assets/styles/CardPro.css'
class CardPro extends React.Component {
    render(){
        return(
            <div className="CardPro__main-div">
                <div className="CardPro__first-div">
                    <h3 className="CardPro__title">Pro</h3>
                    <p className="CardPro__status">Most popular</p>
                </div>
                <div className="CardPro__second-div">
                    <h2 className="CardPro__per-month">$0/mo</h2>
                    <p className="CardPro__paragraph">20 users included 10 GB of storage, Help center access and Priority email support</p>
                    <form action="">
                        <button type="button" className="CardPro__button">GET STARTED</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CardPro;