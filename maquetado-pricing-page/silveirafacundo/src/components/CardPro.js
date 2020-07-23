import React from 'react';

class CardPro extends React.Component {
    render(){
        return(
            <div className="CardPro__main-div">
                <div className="CardFree__first-div">
                    <h3 className="CardFree__title">Pro</h3>
                    <p className="CardPro__paragraph">Most popular</p>
                </div>
                <div className="CardFree__second-div">
                    <h2 className="CardFree__per-month">$0/mo</h2>
                    <p className="CardFree__paragraph">20 users included 10 GB of storage, Help center access and Priority email support</p>
                    <form action="">
                        <button type="button" className="CardFree__button">SIGN UP FOR FREE</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CardPro;