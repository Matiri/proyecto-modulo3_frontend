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
                    <div className="p-3">
                        <Card title="Free" price="0" users="10" gigas="2" email="Email" content="SING UP FOR FREE"/>
                    </div>
                    <div className="p-3">
                        <Card title="Pro" price="15" users="20" gigas="10" email="Priority email" content="GET STARTED" id="button"/>
                    </div>
                    <div className="p-3">
                        <Card title="Enterprise" price="30" users="50" gigas="30" email="Phone & email" content="CONTACT US"/>
                    </div>
                </div>
                <div className="row justify-content-center m-0">
                    <div className="col-2 p-0">
                        <Footer title="Company"/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer title="Features"/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer title="Resource"/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer title="Legal"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;