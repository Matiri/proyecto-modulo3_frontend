import React from 'react';
import '../style/Footer.css';
import CardList './CardList.js';

class Footer extends React.Component {
    render(){
        return(
            <div>
                <CardList />
                <CardList />
                <CardList />
                <CardList />
                <p>Copyright <a href="https://material-ui.com/">© Your Website</a> 2020.</p>
            </div>
        )
    }
}

export default Footer;