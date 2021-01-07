import React,{useState} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {aboutSection,skillsSection} from "../components/InfoSection/Data";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const Home=()=>{
  const [isOpen,setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return(
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...aboutSection}/>
    <InfoSection {...skillsSection}/>
    <ProjectsSection/>
    <ContactSection/>
    </>
  )
}

export default Home
