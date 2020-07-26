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
                        <Card />
                    </div>
                    <div className="m-3">
                        <Card />
                    </div>
                    <div className="m-3">
                        <Card />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Page;