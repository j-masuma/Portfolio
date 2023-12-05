import { Route, Routes } from "react-router";

//import  Services  from "./Pages/services/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layouts from "./components/Layouts";
import Contact from "./Pages/contact";
import { Passion } from "./Pages/Passion";
import { Port } from "./Pages/Port";

const App = () => (
  <Routes>
    <Route element={<Layouts />}>
      <Route exact path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Passion" element={<Passion />} />
      <Route path="/Port" element={<Port />} />
      <Route path="/Contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default App;
