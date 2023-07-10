import Parent from "../../parent";
import About from "../about/About";
import Contact from "../contact/contact";
import { Passion } from "../passions/Passion";
import { Port } from "../port/Port";

function Home(){
    return(
        <div className="">
            <Parent />
            <About/>
            <Passion/>
            <Port/>
            <Contact/>

        </div>
    )
}
export default Home;