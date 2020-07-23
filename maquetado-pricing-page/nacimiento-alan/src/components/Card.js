import React from "react";

class Card extends React.Component{
    render(){
        const url = 'aaa';
        return(
            <div>
                <h2>{this.props.titulo}</h2>
                <h2>{this.props.precio}</h2>
                <p>
                    {this.props.descripcion}
                </p>
                    <from>  
                        <a href={url}> {this.props.nombreBoton} </a>
                    </from>
            </div>
        )
    }        
}
export default Card;