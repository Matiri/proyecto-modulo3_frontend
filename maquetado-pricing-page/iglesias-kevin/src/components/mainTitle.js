import React from 'react';
import '../assets/css/styles.css';


class MainPageTitle extends React.Component{
    render(){
        return (
        <div class="padre">
            <div class="hijo">
                <p>{this.props.pageTitle}</p>
                <span>{this.props.pageDescription}</span>
            </div>
        </div>
        )
    }
}

export default MainPageTitle;