import Frontend from "../../assets/img/front.svg";
import Backend from "../../assets/img/backend.svg";
import UiUx from "../../assets/img/UiUx.svg";
export function Passion() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl text-blue-700  font-bold text-center p-10 ">
          Additional{" "}
          <span className=" text-blue-900 bg-opacity-100">Passions</span>
        </h1>
      </div>
      <div className="flex flex-row justify-around">
        <div className="bg-white shadow-md rounded-lg">
          <img src={Frontend} alt="Front-End Developer" />
          <div className="text-center">
            <h3 className="font-bold">Front-End Developer</h3>
            <p> Html, Bootstrap, Tailwind</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg">
          <img src={Backend} alt="Back-End Developer" />
          <div className="text-center">
            <h3 className="font-bold">Back-End Developer</h3>
            <p> NodeJS, React</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg">
          <img src={UiUx} alt="UiUx Designer" />
          <div className="text-center">
            <h3 className="font-bold">UI/UX Designer</h3>
            <p> Figma, ...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
