import React,{useState,useEffect,Fragment} from "react";
import './App.css';
import Home from "./pages";

import {BrowserRouter as Router} from "react-router-dom";
import { SpinnerInfinity } from 'spinners-react';



function App() {
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[]);

  return (
   <Fragment>
   {
     loading?(
       <div style={{backgroundColor:"#505050",height:"100%",width:"100%",position:"absolute",display:"flex",alignItems:"center"}}>
       <SpinnerInfinity  size="15%" thickness={145} speed={77} color="rgba(109, 34, 103, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" style={{margin:"auto"}}/>
       </div>
     ):(
       <Router>
   <Home />
   </Router>
     )
   }

    </Fragment>

);
}

export default App;
