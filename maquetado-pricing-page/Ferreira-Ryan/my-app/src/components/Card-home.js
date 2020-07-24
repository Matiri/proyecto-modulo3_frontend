import React from 'react';
import '../styles/cards.css';

function CardHome() {
    return(
        <div className="cards-contain">
            <div className="card-left card">
                <div  className="text-top">
                    <h3>Free</h3>
                </div>
                <div className="text-in">
                    <h1>$0/mo</h1>
                    <div className="text-in">
                        <p>
                            20 users included
                        </p>
                        <p>
                            10 GB of storage
                        </p>
                        <p>
                            Help center access
                        </p>
                        <p>
                            Priority email  support
                        </p>
                    </div>
                </div>
                <div className="btn-contain">
                    <button className="free-btn">SIGN UP FOR FREE</button>
                </div>
            </div>
            <div className="card-middle card">
                <div className="text-top">
                    <h3>Pro</h3>
                    <p>Most popular</p>
                </div>
                <div className="text-in">
                    <h1>$15/mo</h1>
                    <div className="text-in">
                        <p>
                            20 users included
                        </p>
                        <p>
                            10 GB of storage
                        </p>
                        <p>
                            Help center access
                        </p>
                        <p>
                            Priority email  support
                        </p>
                    </div>
                </div>
                <div className="btn-contain">
                    <button className="free-btn">GET STARTED</button>
                </div>
            </div>
            <div className="card-right card">
                <div className="text-top">
                    <h3>Enterprise</h3>
                </div>
                <div className="text-in">
                    <h1>$15/mo</h1>
                    <div className="text-in">
                        <p>
                            20 users included
                        </p>
                        <p>
                            10 GB of storage
                        </p>
                        <p>
                            Help center access
                        </p>
                        <p>
                            Priority email  support
                        </p>
                    </div>
                </div>
                <div className="btn-contain">
                    <button className="free-btn">CONTACT US</button>
                </div>
            </div>
        </div>
    )
}

export default CardHome;