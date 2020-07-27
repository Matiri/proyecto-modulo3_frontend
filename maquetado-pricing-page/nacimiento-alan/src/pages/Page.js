import React from 'react';
import Card from "../components/Card"
import Titulo from '../components/Titulo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Page extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Titulo Titulo="Pricing" Descripcion="Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."/>
                <div className="row justify-content-center">
                    <div className="m-3">
                        <Card category="Free" price="0" numero="10" gigas="2" contact="Email support" button="SING UP FOR FREE"/>
                    </div>
                    <div className="m-3">
                        <Card category="Pro" price="15" numero="20" gigas="10" contact="Priority email support" button="GET STARTED"/>
                    </div>
                    <div className="m-3">
                        <Card category="Enterprise" price="30" numero="50" gigas="30" contact="Phone & email support" button="CONTACT US"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2 p-0">
                        <Footer/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;