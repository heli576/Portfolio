import React from "react";
import {SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu
} from "./SidebarComponents";

const Sidebar=({isOpen,toggle})=>{
  return(
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
  <Icon onClick={toggle}>
  <CloseIcon/>
  </Icon>
  <SidebarWrapper>
  <SidebarMenu>
  <SidebarLink to="about">
  About
  </SidebarLink>
  <SidebarLink to="skills">
  Skills
  </SidebarLink>
  <SidebarLink to="projects">
  Projects
  </SidebarLink>
  <SidebarLink to="contact">
  Contact Me
  </SidebarLink>
  </SidebarMenu>
  </SidebarWrapper>
  </SidebarContainer>
  )
}

export default Sidebar
