import React from "react";
import { FaBars } from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from "./NavbarComponents";
import Logo from "../../images/logo.png";
const Navbar=({toggle})=>{
  return(
  <>
  <Nav>
  <NavbarContainer>
  <NavLogo to="/"><img src={Logo} alt="logo" style={{width:100,height:80}}/></NavLogo>
  <MobileIcon onClick={toggle}>
  <FaBars/>
  </MobileIcon>
  <NavMenu>
  <NavItem>
  <NavLinks to="about">About</NavLinks>
  </NavItem>
  <NavItem>
  <NavLinks to="skills">Skills</NavLinks>
  </NavItem>
  <NavItem>
  <NavLinks to="projects">Projects</NavLinks>
  </NavItem>
  <NavItem>
  <NavLinks to="contact">Contact</NavLinks>
  </NavItem>
  </NavMenu>
  </NavbarContainer>
  </Nav>
  </>
  )
}

export default Navbar
