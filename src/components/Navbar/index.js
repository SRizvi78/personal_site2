import React, {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import {IconContext } from 'react-icons/lib';
import  {animateScroll as scroll} from 'react-scroll';

const Navbar = (props) => {

    const [scrollNav, setScrollNav] = useState();

    useEffect(() => {
        changeNav();
    }, []);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    window.addEventListener('scroll', changeNav);


    return (    
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    SRizvi
                </NavLogo>
                <MobileIcon onClick={props.toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='project'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        
                        >
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Contact
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>  
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
