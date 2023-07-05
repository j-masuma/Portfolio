

import Sendpay from './SendPay.svg';
import Etect from './etech.svg';
import Ecom from './ecommerce.svg';
export  function Port() {
  return (
    <div className='flex flex-col bg-gray-300'>
        <div>
            <h1 className='font-bold text-center text-2xl p-10'>My Portfolio</h1>
        </div>
        <div className=" flex flex-row justify-around">
            <div>
                <div><h1 className='font-bold'>SendPay</h1></div>
                <img src={Sendpay} alt="SendPay" />
            </div>
            <div>
                <div><h1 className='font-bold'>E-Commerce</h1></div>
                <img src={Ecom} alt="E-Commerce" />
            </div>
            <div>
                <div><h1 className='font-bold'>BeatsLearning</h1></div>
                <img src={Etect} alt="Etech" />
            </div>
        
        </div>
    </div>
  )
}
