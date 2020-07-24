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
                    <p>$0/mo</p>
                    <div><p>20 users included</p></div>
                    <div><p>10 GB of storage</p></div>
                    <div><p>Help center access</p></div>    
                    <div><p>Priority email  support</p></div>
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
                    <p>$15/mo</p>
                    <div><p> 20 users included</p></div>
                    <div><p>10 GB of storage</p></div>
                    <div><p>Help center access</p></div>
                    <div><p>Priority email  support</p></div>
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
                    <p>$15/mo</p>
                    <div><p>20 users included</p></div>
                    <div><p>10 GB of storage</p></div>
                    <div><p>Help center access</p></div>
                    <div><p>Priority email  support</p></div>
                </div>
                <div className="btn-contain">
                    <button className="free-btn">CONTACT US</button>
                </div>
            </div>
        </div>
    )
}

export default CardHome;