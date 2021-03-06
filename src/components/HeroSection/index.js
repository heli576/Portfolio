import React,{useState} from "react";
import {HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  //HeroH1Highlight,
  HeroP,
  //HeroPHighlight,
  HeroBtnWrapper,
  ArrowDownward,
  ArrowDown
} from "./HeroSectionComponents";
import Video from "../../videos/video2.mp4";
import {Button} from '../ButtonComponents';

const HeroSection=()=>{
  const [hover,setHover]=useState(false);
  const onHover=()=>{
    setHover(!hover);
  }
  return(
    <HeroContainer>
    <HeroBg>
    <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
   </HeroBg>
   <HeroContent>
   <HeroH1>Bonjour! I'm Heli Vakharia.</HeroH1>
   <HeroP>I'm a Full Stack Developer.</HeroP>
   <HeroBtnWrapper>
   <Button to="about"
   onMouseEnter={onHover}
   onMouseLeave={onHover}
   primary="true"
   dark="true"
   smooth={true}
   duration={500}
   spy={true}
   exact='true'
   offset={-80}
   >About Me {hover?<ArrowDownward/>:<ArrowDown/>}</Button>
   </HeroBtnWrapper>
   </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
