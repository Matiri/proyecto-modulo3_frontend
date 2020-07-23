import React from 'react';
import './../assets/styles/CardFree.css';

class CardFree extends React.Component {
    render(){
        return(
            <div className="CardFree__main-div">
                <div className="CardFree__first-div">
                    <h3 className="CardFree__title">Free</h3>
                </div>
                <div className="CardFree__second-div">
                    <h2 className="CardFree__per-month">$0/mo</h2>
                    <p className="CardFree__paragraph">10 users included 2 GB of storage, Help center access and Email support</p>
                    <form action="">
                        <button type="button" className="CardFree__button">SIGN UP FOR FREE</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CardFree;