import { Route, Routes } from "react-router";

//import  Services  from "./Pages/services/Services";
import  Home  from "./Pages/home/Home";
import  About  from "./Pages/about/About";
import Layouts from "./components/layouts/Layouts";
import Contact from "./Pages/contact/contact";
import { Passion } from "./Pages/passions/Passion";
import { Port } from "./Pages/port/Port";

const App=() =>(
         <Routes>
          <Route element={<Layouts/>}>
            <Route exact path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Passion" element={<Passion/>} />
            <Route path="/Port" element={<Port/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Route>
          </Routes>
  );

export default App;
