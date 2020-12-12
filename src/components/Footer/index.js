import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {animateScroll as scroll} from'react-scroll';
import  {FooterContainer, 
    FooterlinksWrapper, 
    FooterLinksContainer, 
    FooterWrap, FooterLink, 
    FooterLinkTitle, 
    FooterLinkItems, 
    SocialMedia,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterlinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>About us</FooterLinkTitle>
                               <FooterLink to='signin'>How it works</FooterLink>
                               <FooterLink to='signin'>Testimonals</FooterLink>
                               <FooterLink to='signin'>Carrer</FooterLink>
                               <FooterLink to='signin'>Term of Serviece</FooterLink> 
                      </FooterLinkItems>
                      <FooterLinkItems>
                           <FooterLinkTitle>Videos</FooterLinkTitle>
                               <FooterLink to='/'>Submit Videos</FooterLink>
                               <FooterLink  to='/'>Ambassadors</FooterLink>
                               <FooterLink  to='/'>Agency</FooterLink>
                               <FooterLink   to='/'>Influncer</FooterLink> 
                      </FooterLinkItems>                   
                   </FooterlinksWrapper>
                   <FooterlinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>Contact Us</FooterLinkTitle>
                               <FooterLink to='/'>Contact</FooterLink>
                               <FooterLink  to='/'>Support</FooterLink>
                               <FooterLink  to='/'>Destinations</FooterLink>
                               <FooterLink  to='/'>Sponsorships</FooterLink> 
                      </FooterLinkItems>
                      <FooterLinkItems>
                           <FooterLinkTitle>Social Media</FooterLinkTitle>
                               <FooterLink  to='/'>Instagram</FooterLink>
                               <FooterLink  to='/'>Facebook</FooterLink>
                               <FooterLink  to='/'>Twitter</FooterLink>
                               <FooterLink  to='/'>Youtube</FooterLink> 
                      </FooterLinkItems>                   
                   </FooterlinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
               <SocialMediaWrap>
                   <SocialLogo to='/' onClick={toggleHome}>
                       Dolla
                   </SocialLogo>
                   <WebsiteRights>
                       Dolla © {new Date().getFullYear()}
                       All Rights Reserved.
                   </WebsiteRights>
                   <SocialIcons>
                   <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                       <FaFacebook />
                   </SocialIconLink>
                   <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                       <FaInstagram />
                   </SocialIconLink>
                   <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                       <FaTwitter />
                   </SocialIconLink>
                   <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                       <FaYoutube />
                   </SocialIconLink>
                   </SocialIcons>
               </SocialMediaWrap>
               </SocialMedia>
            </FooterWrap> 
        </FooterContainer>
    )
}

export default Footer
