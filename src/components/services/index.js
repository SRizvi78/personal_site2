import React from 'react';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='contact'>
            <ServicesH1>Contact Me</ServicesH1>
            <ServicesWrapper>
                <ServicesCard href='https://www.facebook.com/Syedintekhabrizvi/' target='_blank' title='Open Facebook'>
                    <ServicesIcon  src='images/facebook.svg'/>
                    <ServicesH2>Facebook</ServicesH2>
                    <ServicesP>Checkout My Facebook ID Anything interesting Knock me</ServicesP>
                </ServicesCard>
                <ServicesCard href='https://www.instagram.com/srizvi78/' target='_blank' title='Open Instagram'>
                    <ServicesIcon  src='images/instagram.svg'/>
                    <ServicesH2>Instagram</ServicesH2>
                    <ServicesP>Checkout My Instagram ID</ServicesP>
                </ServicesCard>
                <ServicesCard href='https://github.com/SRizvi78' target='_blank' title='Open Github'>
                    <ServicesIcon  src='images/github.svg'/>
                    <ServicesH2>Github</ServicesH2>
                    <ServicesP>Checkout My Github Repositories. See my works.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
