import React from "react";
import Logo from "../../images/logo.png";
import {GrMail,GrLinkedin,GrGithub} from "react-icons/gr";
import {FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  MyLogo,
  Text,
  Heart,
  SocialIcons,
  SocialIconLink
} from "./FooterComponents";
import {animateScroll} from "react-scroll";
const Footer=()=>{
  const goHome=()=>{
    animateScroll.scrollToTop();
  }
  return(
    <FooterContainer>
   <FooterWrap>
    <SocialMedia>
   <SocialMediaWrap>
    <MyLogo onClick={goHome}>
    <img src={Logo} alt="logo" style={{width:100,height:80}}/>
    </MyLogo>
    <Text>Made with <Heart/> by  Heli Vakharia.</Text>
    <SocialIcons>
    <SocialIconLink href="mailto:helivakharia@gmail.com" aria-label="Mail"><GrMail/></SocialIconLink>
    <SocialIconLink href="https://www.linkedin.com/in/heli-vakharia-a624451a2/" target="_blank" aria-label="linkedin"><GrLinkedin/></SocialIconLink>
    <SocialIconLink href="https://github.com/heli576" target="_blank" aria-label="github"><GrGithub/></SocialIconLink>

    </SocialIcons>
   </SocialMediaWrap>
    </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
