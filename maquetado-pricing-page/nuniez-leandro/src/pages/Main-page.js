import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Card from '../components/Card';
import Footer from '../components/Footer';

class MainPage extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Title />
                <div className="row justify-content-center m-0">
                    <div className="col-2.5">
                        <Card />
                    </div>
                    <div className="col-2.5">
                        <Card />
                    </div>
                    <div className="col-2.5">
                        <Card />
                    </div>
                </div>
                <div className="row justify-content-center m-0">
                    <div className="col-2 p-0">
                        <Footer />
                    </div>
                    <div className="col-2 p-0">
                        <Footer />
                    </div>
                    <div className="col-2 p-0">
                        <Footer />
                    </div>
                    <div className="col-2 p-0">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;