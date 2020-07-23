import React from 'react';
import '../Styles/CardFree.css';


class CardFree extends React.Component{
    render(){
        return(
            <div className='container-principal'>
                <div className='container_title'>
                    <span>Free</span>
                </div>
                
                <div className='containerFree'>
                        <h1 className='price-number'>$0<span className='text-diference'>/mo</span></h1>
                    
                    <div className='container-li'>
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Help center access</li>
                        <li>Email support</li>
                    </div>                
                    <button>Sing up for free</button>
                </div>
            </div>
            
            
            
        )
    }
}
export default CardFree;