import React from 'react';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsImg,
  ProjectsH2,
  VisitSite,
  ProjectsP} from "./ProjectsSectionComponents";
import Img1 from "../../images/notesapp.svg";
import Img2 from "../../images/dreamycreations.svg";
import Img3 from "../../images/moments.svg";


const ProjectsSection=()=>{
  return(
   <ProjectsContainer id="projects">
   <ProjectsH1>My Projects</ProjectsH1>
   <ProjectsWrapper>
   <ProjectsCard>
   <a href="https://notesapp-reqres-cynics.herokuapp.com/" target="_blank">
   <ProjectsImg src={Img1}/>
   </a>
   <ProjectsH2>NotesApp <a href="https://notesapp-reqres-cynics.herokuapp.com/" target="_blank"><VisitSite/></a></ProjectsH2>

   <ProjectsP>Notemaker app that creates notes from your WhatsApp messages.</ProjectsP>

   </ProjectsCard>
   <ProjectsCard>
   <a href="https://the-dreamy-creations.herokuapp.com/" target="_blank">
   <ProjectsImg src={Img2}/>
   </a>
   <ProjectsH2>Dreamy Creations <a href="https://the-dreamy-creations.herokuapp.com/" target="_blank">
   <VisitSite/>
   </a></ProjectsH2>
   <ProjectsP>You Dream, We Create! Get customised, handmade gifts for your loved ones.</ProjectsP>
   </ProjectsCard>

   <ProjectsCard>
   <a href="https://socialapp-c2d1f.web.app/" target="_blank">
   <ProjectsImg src={Img3}/>
   </a>
   <ProjectsH2>Moments  <a href="https://socialapp-c2d1f.web.app/" target="_blank">
    <VisitSite/>
    </a></ProjectsH2>
   <ProjectsP>Relive the moments from your favourite sitcom F.R.I.E.N.D.S.</ProjectsP>
   </ProjectsCard>
   </ProjectsWrapper>
   </ProjectsContainer>

  )
}

export default ProjectsSection
