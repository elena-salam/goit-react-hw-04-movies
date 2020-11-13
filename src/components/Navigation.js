import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
// import routes from '../routes'

const NavItem = styled.li`
margin-right: 20px;
&:last-child{
    margin-right:0;
}
list-style:none;
font-size: 30px;
font-weight: 700;
`
const NavBox = styled.ul`
padding: 0;
width: 200px;
display: flex;
text-decoration: none;
`
const activeClassName = 'nav-item-active'

const NavigationLink = styled(NavLink).attrs({activeClassName})`
text-decoration: none;
color: black;
&.${activeClassName}{
    color:red;
}`;


const Navigation =() =>(
    
    <NavBox>
        <NavItem>
            <NavigationLink exact to ="/">
            Home
            </NavigationLink>
        </NavItem>
        <NavItem>
            <NavigationLink to ="/movies">
            Movies
            </NavigationLink>
        </NavItem>
    </NavBox>
    
    
)
export default Navigation;