import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarRoute, SidebarLink, SidebarBtnWrap, SidebarMenu } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon  />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SidebarBtnWrap>
                <SidebarRoute to='/signin'>
                    Sign In
                </SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
