import React from 'react';
import '../Styles/CardFree.css';


class CardFree extends React.Component{
    render(){
        return(
            <div className='containerFree'>
                <div className='container_title'>
                    <h1 className='title_free'>Free</h1>
                </div>
            
            
                    <h1>$0</h1>/mo
                
                <div className='container-li'>
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Help center access</li>
                    <li>Email support</li>
                </div>                
                <button>Sing up for free</button>
            </div>

        )
    }
}
export default CardFree;