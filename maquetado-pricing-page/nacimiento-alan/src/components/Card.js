import React from "react";
import "../styles/Card.css"
class Card extends React.Component{
    render(){
        const url = 'aaa';
        return(
            <div className="Tarjeta">
                <h3>{this.props.titulo}</h3>
                <h1>{this.props.precio}</h1> <h5>/mo</h5>
                <p>
                    {this.props.descripcion}
                </p>
                    <from>  
                        <a href={url} className="btn"> {this.props.nombreBoton} </a>
                    </from>
            </div>
        )
    }        
}
export default Card;
