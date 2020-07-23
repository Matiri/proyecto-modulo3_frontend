import React from 'react';
import '../Styles/CardPro.css';



class CardPro extends React.Component{
    render(){
        return(
            <div className='container-principal'>
                <div className='container_title'>
                    <span>Pro</span>
                    <p>Most popular</p>
                    
                </div>
                
                <div className='containerFree'>
                        <h1 className='price-number'>$15<span className='text-diference'>/mo</span></h1>
                    
                    <div className='container-li'>
                        <li>20 users included</li>
                        <li>10 GB of storage</li>
                        <li>Help center access</li>
                        <li>Priority email support</li>
                    </div>                
                    <button>get started</button>
                </div>
            </div>
            
            
            
        )
    }
}
export default CardPro;