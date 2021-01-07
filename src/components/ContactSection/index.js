import React,{useState} from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
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
  const [values,setValues]=useState({
    email:'',
    message:''
  });

  const {email,message}=values;

  const handleChange=(name)=>(event)=>{
  const value=event.target.value;
  setValues({...values,[name]:value});
}

const handleSubmit=(event)=>{
event.preventDefault();
event.target.reset();
setValues({...values});
//console.log(values);
emailjs.send('service_cvv5mmk', 'template_l47ziyu',values,'user_d5BfD2nvdSf3xlu68YMBB')
      .then((result) => {
        setValues({
    ...values,email:'',message:''
  });
  Swal.fire({
             title: 'Email Successfully Sent',
             icon: 'success'
           })
      }, (error) => {
        Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
          console.log(error.text);
      });
}
//console.log(values);

  return(
    <>
    <ContactContainer id="contact">
    <ContactWrapper>
    <ContactRow>
    <Column1 imgStart="true">
    <FormWrapper>
    <TopLine>Contact Me</TopLine>
    <FormContent>

    <Form onSubmit={handleSubmit}>
   <FormLabel htmlFor='email'>Email</FormLabel>
    <FormInput type="email" name="email" value={email} onChange={handleChange("email")} required/>
    <FormLabel htmlFor='message'>Message</FormLabel>
    <FormArea type="text" required cols="30" rows="7" name="message" value={message} onChange={handleChange("message")}/>
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
