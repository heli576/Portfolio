import React from "react";
import {IconContext} from "react-icons/lib";
import { FaBars } from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from "./NavbarComponents";
import Logo from "../../images/logo.png";
import {animateScroll} from "react-scroll";
const Navbar=({toggle})=>{

  const goHome=()=>{
    animateScroll.scrollToTop();
  }
return(
  <>
  <IconContext.Provider value={{color:'#fff'}}>
  <Nav>
  <NavbarContainer>
  <NavLogo onClick={goHome}><img src={Logo} alt="logo" style={{width:100,height:80}}/></NavLogo>
  <MobileIcon onClick={toggle}>
  <FaBars/>
  </MobileIcon>
  <NavMenu>
  <NavItem>
  <NavLinks to="about"
  smooth={true}
  duration={500}
  spy={true}
  exact='true'
  offset={-80}
  >About</NavLinks>
  </NavItem>
  <NavItem>
  <NavLinks to="skills"
  smooth={true}
  duration={500}
  spy={true}
  exact='true'
  offset={-80}
  >Skills</NavLinks>
  </NavItem>
  <NavItem>
  <NavLinks to="projects"
  smooth={true}
  duration={500}
  spy={true}
  exact='true'
  offset={-80}
  >Projects</NavLinks>
  </NavItem>
  <NavItem>
  <NavLinks to="contact"
  smooth={true}
  duration={500}
  spy={true}
  exact='true'
  offset={-80}
  >Contact</NavLinks>
  </NavItem>
  </NavMenu>
  </NavbarContainer>
  </Nav>
  </IconContext.Provider>
  </>
  )
}

export default Navbar
