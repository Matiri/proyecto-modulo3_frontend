import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Card from '../components/Card';

class MainPage extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Title />
                <Card />
            </div>
        )
    }
}

export default MainPage;