import { useEffect } from "react";
import { Header } from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
function App() {
  console.log('check the render parent');
  useEffect(()=>{
    console.log("Init");

  },[]);
  return(
    <BrowserRouter>
    <div>
    <Header/>
    <div> 
      Body
    </div>

    </div>
    </BrowserRouter>
  )
}

export default App;
