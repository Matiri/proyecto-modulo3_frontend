import React from 'react';
import MainTitle from './componentes/MainTitle';
import Card from './componentes/Card';
import NavBar from './componentes/NavBar';
import CardList from './componentes/cardList';
import Footer from './componentes/footer';

class Page extends React.Component{
    render(){
        return(
            <div>
                {<MainTitle 
                    mainTitle=" Pricing "
                />}
                    {/* <Card precio=" 14 " user="10" storage="2" support="" button="sign up for free" titleCard="FREE" /> */}
    {<NavBar
    companyName=" Company Name " 
    navFeatures=" features " 
    navEnterprise=" enterprise " 
    navSupport=" support " 
    navButtonText=" login "/>}
    
    {<Footer copyright="Your Website"/>}
            </div>
        )
    }
}
export default Page;