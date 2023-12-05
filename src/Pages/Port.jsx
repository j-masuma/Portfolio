import Sendpay from "../assets/img/SendPay.svg";
import Etect from "../assets/img/etech.svg";
import Ecom from "../assets/img/ecommerce.svg";
export function Port() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl text-blue-700  font-bold text-center p-10 ">
          My <span className=" text-blue-900 bg-opacity-100">Portfolio</span>
        </h1>
      </div>
      <div className=" flex flex-row justify-around text-purple-800">
        <div>
          <div>
            <h1 className="font-bold m-3">SendPay</h1>
          </div>
          <img src={Sendpay} alt="SendPay" />
        </div>
        <div>
          <div>
            <h1 className="font-bold font-montserrat m-3">E-Commerce</h1>
          </div>
          <img src={Ecom} alt="E-Commerce" />
        </div>
        <div>
          <div>
            <h1 className="font-bold m-3">BeatsLearning</h1>
          </div>
          <img src={Etect} alt="Etech" />
        </div>
      </div>
    </div>
  );
}
