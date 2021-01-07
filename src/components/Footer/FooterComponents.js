import styled from "styled-components";
import {Link} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";

export const FooterContainer=styled.div`
background-color:#000;
`

export const FooterWrap=styled.div`
padding:30px 24px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width:1100px;
margin:0 auto;
`

export const SocialMedia=styled.section`

max-width:1000px;
width:100%

`
export const SocialMediaWrap=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin:40px auto 0 auto;

@media screen and (max-width:820px){
  flex-direction:column;
}
`

export const MyLogo=styled(Link)`
color:#fff;
justify-self:start;
cursor:pointer;
text-decoration:none;
display:flex;
align-items:center;
margin-bottom:16px;
`

export const Text=styled.small`
color:#fff;
margin-bottom:16px;
`

export const Heart=styled(AiFillHeart)`
color:#6d2267;
font-size:15px;


`

export const SocialIcons=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:240px;
`

export const SocialIconLink=styled.a`
color:#fff;
font-size:24px;
`
