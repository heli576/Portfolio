import styled from "styled-components";

export const ContactContainer=styled.div`
color:#fff;
background:#f9f9f9;

@media screen and (max-width:768px){
  padding:100px 0;
}
`

export const ContactWrapper=styled.div`
display:grid;
z-index:1;
height:860px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 24px;
justify-content:center;
`

export const ContactRow=styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({imgStart})=>(imgStart?`'col2 col1'`:`'col1 col2'`)};

@media screen and (max-width:768px){
  grid-template-areas:${({imgStart})=>(imgStart?`'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
}
`

export const Column1=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`

export const Column2=styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`

export const FormWrapper=styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;
`

export const FormContent=styled.div`
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:480px)
{
  padding:10px;
}
`

export const TopLine=styled.p`
color:#6d2267;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:16px;
`

export const Form=styled.form`
background:#010101;
max-width:400px;
height:auto;
z-index:1;
display:grid;
margin:0 auto;
padding:80px 32px;
border-radius:4px;
box-shadow:0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width:480px)
{
  padding:32px 32px;
}
`


export const Heading=styled.h1`
color:#fff;
font-size:20px;
font-weight:400;
margin-bottom:40px;
text-align:center;
`

export const FormLabel=styled.label`
color:#fff;
font-size:14px;
margin-bottom:8px;
`

export const FormInput=styled.input`
padding:16px 16px;
margin-bottom:32px;
border:none;
border-radius:4px;
`

export const FormArea=styled.textarea`
padding:16px 16px;
margin-bottom:32px;
border:none;
border-radius:4px;
`

export const FormButton=styled.button`
background:#6d2267;
padding:16px 0;
border:none;
border-radius:4px;
color:#fff;
font-size:20px;
cursor:pointer;
`


export const ImgWrap=styled.div`
max-width:555px;
height:100%;
`

export const Img=styled.img`
width:100%;
margin:0 0 10px 0;
padding-right:0;
@media screen and (max-width:480px){
margin-top:-125px;

}
`
