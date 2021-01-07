import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  Column2,
  FormWrapper,
  FormContent,
  Form,
  FormLabel,
  FormInput,
  FormArea,
  FormButton,
  TopLine,
  Heading,
  ImgWrap,
  Img
} from "./ContactSectionComponents";

import Contact from "../../images/svg3.svg";

const ContactSection=({imgStart})=>{
  return(
    <>
    <ContactContainer id="contact">
    <ContactWrapper>
    <ContactRow>
    <Column1 imgStart="true">
    <FormWrapper>
    <TopLine>Contact Me</TopLine>
    <FormContent>

    <Form method="post" action="mailto:helivakharia@gmail.com" enctype="text/plain">
   <FormLabel htmlFor='email'>Email</FormLabel>
    <FormInput type="email" name="email" required/>
    <FormLabel htmlFor='message'>Message</FormLabel>
    <FormArea type="text" required cols="30" rows="7" name="message"/>
    <FormButton type="submit">Send</FormButton>
    </Form>
    </FormContent>
    </FormWrapper>
    </Column1>
    <Column2>
    <ImgWrap>
    <Img src={Contact} alt="contact"/>
    </ImgWrap>
    </Column2>
    </ContactRow>
    </ContactWrapper>
    </ContactContainer>
    </>
  )
}

export default ContactSection
