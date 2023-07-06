
import { homeData } from '../../data/data';
import HeroImg from './heroImg 1.svg';

export function Hero() {
  return (
    <div className="flex flex-row justify-between">
        <div className="flex flex-col font-bold gap-4 text-blue-900 bg-opacity-100"> 
            <div className='text-3xl font-Poppins '>
                <h1>Hi!</h1>
                <h2 className=''>I am {homeData.title}. <br/> 
                    A Front-End Developer. </h2></div>
                <div className='text-sm border '>
                    <p className=' m-3'>
                    {homeData.description}
                       </p>
                </div>
            </div>

            <div className='object-fill w-56 flex-shrink-0 mr-10'>
              <img src={HeroImg} alt="aaa" />
            </div>

    </div>
  )
}
