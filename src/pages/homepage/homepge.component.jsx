import React from 'react';

import Header from '../../components/header/header.component';
import About from '../../components/about/about.component';
import Solution from '../../components/solution/solution.component';
import Team from '../../components/team/team.component';
import AwardWinning from '../../components/award-winning/award-winning.component';
import Client from '../../components/client/client.component';
import Footer from '../../components/footer/footer.component';

const HomePage = () => {
    return (
        <>
            <Header /> 
            <About />  
            <Solution /> 
            <Team /> 
            <AwardWinning /> 
            <Client />   
            <Footer />   
        </>
    )
}

export default HomePage
