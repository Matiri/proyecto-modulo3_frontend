import React from 'react';
import '../styles/cards.css';

function CardHome() {
    return(
        <div className="cards-contain">
            <div className="card-left">
                <div>
                    <h3>Free</h3>
                </div>
                <div>
                    <h1>$0/mo</h1>
                    <p>
                        10 users included
                        2 GB of storage
                        Help center access
                        Email support
                    </p>
                </div>
                <div className="btn-contain">
                    <button className="free-btn">SIGN UP FOR FREE</button>
                </div>
            </div>
            <div className="card-middle">
                <div>
                    <h3>Pro</h3>
                </div>
                <div>
                    <h1>$15/mo</h1>
                    <p>
                        20 users included
                        10 GB of storage
                        Help center access
                        Priority email support
                    </p>
                </div>
                <div className="btn-contain">
                    <button className="free-btn">GET STARTED</button>
                </div>
            </div>
            <div className="card-right">
                <div>
                    <h3>Enterprise</h3>
                </div>
                <div>
                    <h1>$15/mo</h1>
                    <p>
                        50 users included
                        30 GB of storage
                        Help center access
                        Phone & email support
                    </p>
                </div>
                <div className="btn-contain">
                    <button className="free-btn">GET STARTED</button>
                </div>
            </div>
        </div>
    )
}

export default CardHome;