import git from "../assets/img/github.png";
import email from "../assets/img/mail.png";
import { Link } from "react-router-dom";
import ln from "../assets/img/linkedIn.png";

function Contact() {
  return (
    <div className="flex flex-col p-10">
      <div>
        <h1 className="text-2xl text-blue-700  font-bold text-center p-10 ">
          Contact <span className=" text-blue-900 bg-opacity-100">Me</span>
        </h1>
      </div>

      <div className="flex flex-row justify-around pt-5 mr-10 ml-10">
        <div>
          <Link to="https://github.com/j-masuma">
            <img height={75} width={75} src={git} alt="Git Hub Account" />
          </Link>
        </div>
        <div>
          <Link to="mailto:javariamasooma.bscssef20@ibasuk.edu.pk">
            <img height={75} width={75} src={email} alt="Email" />
          </Link>
        </div>

        <div>
          <Link to="www.linkedin.com/in/javaria-masooma-54a9b423b">
            <img height={75} width={75} src={ln} alt="LinkedIn Account" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
