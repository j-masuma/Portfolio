import git from './Git.svg';
import email from './Email.svg';
import { Link } from "react-router-dom";

function Contact(){
    return(
        <div className="flex flex-col">
        <div>
        <h1 className='text-2xl text-blue-700  font-bold text-center p-10 '>Contact <span className=" text-blue-900 bg-opacity-100">Me</span></h1>
        </div>
            
            <div className="flex flex-row justify-around">
                <div >
                    
                    <Link to="https://github.com/j-masuma">
                        <img src={git} alt="Git Hub Account" />
                    </Link>
                </div>
                <div>
                    <Link to="mailto:javariamasooma.bscssef20@ibasuk.edu.pk">
                        <img src={email} alt="Email" />
                        </Link>
                </div>

                <div >
                    
                    <Link to="https://github.com/j-masuma">
                        <img src={git} alt="Git Hub Account" />
                    </Link>
                </div>
                <div>
                    <Link to="mailto:javariamasooma.bscssef20@ibasuk.edu.pk">
                        <img src={email} alt="Email" />
                        </Link>
                </div>


                
            </div>
        </div>
    );

}

export default Contact;