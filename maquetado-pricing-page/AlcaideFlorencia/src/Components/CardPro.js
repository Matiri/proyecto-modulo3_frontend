import React from 'react';
import '../Styles/CardPro.css';


class CardPro extends React.Component{
    render(){
        return(
            <div className='container-principal-cardPro'>
                    
                <div className='extra'>
                            <span>{this.props.titPro}</span>
                            <p>{this.props.subtitlePro}</p>
                </div>
                    
                </div>
                
                <div className='containerFree-Pro'>
                        <h1 className='price-number'>{this.props.price}<span className='text-diference'>{this.props.priceMed}</span></h1>
                    
                    <div className='container-li'>
                        <li>{this.props.ContentOne}</li>
                        <li>{this.props.ContentTwo}</li>
                        <li>{this.props.ContentThre}</li>
                        <li>{this.props.ContentFour}</li>
                    </div>                
                    <button>{this.props.ContentButton}</button>
                </div>
            </div>  
            
        
            
            
            
        )
    }
}
export default CardPro;