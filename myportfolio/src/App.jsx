import { useEffect } from "react";
//import { Header } from "./components/header/Header";


import { Route, Routes } from "react-router";

import Contact from './Pages/contact/Contact';
import  Services  from "./Pages/services/Services";
import  Home  from "./Pages/home/Home";
import  About  from "./Pages/about/About";
import Layouts from "./components/layouts/Layouts";

function App() {
  console.log('check the render parent');
  useEffect(()=>{
    console.log("Init");

  },[]);
  return(

 
         <Routes>
          <Route element={<Layouts/>}>
          <Route exact path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Contact" element={<Contact/>} />
          </Route>
          </Routes>
          
  );
}

export default App;
