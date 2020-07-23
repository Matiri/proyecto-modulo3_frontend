import React from 'react';
import '../assets/css/styles.css';


class MainTitle extends React.Component{
    render(){
        return (
            <div className="main_center_title">
                <h1>{this.props.pageTitle}</h1>
                <p>{this.props.pageDescription}</p>
            </div>
        )
    }
}

export default MainTitle;