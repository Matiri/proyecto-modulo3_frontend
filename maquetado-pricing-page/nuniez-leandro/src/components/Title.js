import React from 'react';
import '../styles/Title.css'

class Title extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-7 text-center" id="hola">
                    <h1 id="titulo"><b>Pricing</b></h1>
                    <p id="content">Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.</p>
                </div>
            </div>
        )
    }
}

export default Title;