
import HeroImg from './heroImg 1.svg';
export function Hero() {
  return (
    <div className="flex flex-row justify-between bg-green-200">
        <div className="flex flex-col font-bold"> 
            <div className='text-3xl font-Poppins'>
                <h1>Hi!</h1>
                <h2>I am Javaria. <br/> 
                    A Front-End Developer. </h2></div>
                <div className='text-sm'>
                    <p>Front-End developer based in Bekasi, Indonesian <br/>
                        I’am coding with a clean and beautiful problem <br/>
                        solving in mind.</p>
                </div>
            </div>

            <div className='object-fill w-56'>
              <img src={HeroImg} alt="aaa" />
            </div>

    </div>
  )
}
