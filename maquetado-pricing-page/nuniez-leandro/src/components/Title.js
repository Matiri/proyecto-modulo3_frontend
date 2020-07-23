import React from 'react';
import '../styles/Title.css'

class Title extends React.Component {
    render(){
        return(
            <div className="text-center">
                <h1 id="titulo">Pricing</h1>
                <p id="content">Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.</p>
            </div>
        )
    }
}

export default Title;