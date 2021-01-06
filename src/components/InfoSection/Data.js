import AboutImage from "../../images/svg1.svg";
import SkillImage from "../../images/svg2.svg";
export const aboutSection={
  id:'about',
  lightBg:false,
  lightText:true,
  lightTextDesc:true,
  topLine:'About Me',
  headLine:"I'm Computer Science Undergraduate from IIIT Surat",
  description:"I enjoy creating web apps from scratch with a little fusion of creativity and code. When I am not coding, you'd probably find me hogging over food or listening to some songs. Sipping coffee and traveling is ultimate love.",
  buttonLabel:'Skills',
  buttonLocation:'skills',
  imgStart:false,
  img:AboutImage,
  alt:'About',
  dark:true,
  primary:true,
  darkText:false
}

export const skillsSection={
  id:'skills',
  lightBg:true,
  lightText:false,
  topLine:'My Skills',
  headLine:"I'm a Full Stack Web Developer.",
  description:"I mainly work on MERN Stack. Apart from web development I do competitive coding and currently a newbie to UI/UX designing. Here are my technical skills. Checkout my latest web development projects.",
  buttonLabel:'My Projects',
  buttonLocation:'projects',
  imgStart:true,
  img:SkillImage,
  alt:'Skills',
  dark:false,
  primary:false,
  darkText:true
}
