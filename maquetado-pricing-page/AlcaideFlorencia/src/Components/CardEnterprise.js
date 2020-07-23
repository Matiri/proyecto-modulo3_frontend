import React from 'react';
import '../Styles/CardEnterprise.css';


class CardEnterprise extends React.Component{
    render(){
        return(
            <div className='container-principal'>
                <div className='container_title'>
                    <span>Enterprise</span>
                </div>
                
                <div className='containerFree'>
                        <h1 className='price-number'>$30<span className='text-diference'>/mo</span></h1>
                    
                    <div className='container-li'>
                        <li>50 users included</li>
                        <li>30 GB of storage</li>
                        <li>Help center access</li>
                        <li>Phone & email support</li>
                    </div>                
                    <button>contact us</button>
                </div>
            </div>
            
            
            
        )
    }
}
export default CardEnterprise;