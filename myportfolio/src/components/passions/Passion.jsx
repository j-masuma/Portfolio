
import Frontend from './front.svg';
import Backend from './backend.svg';
import UiUx from './UiUx.svg';
export function Passion() {
  return (
    <div className="flex flex-col bg-red-200">
        <div>
            <h1 className='text-2xl  font-bold text-center p-10 '>Additional Passions</h1>
        </div>
        <div className="flex flex-row justify-around">
            <div>
            <img src={Frontend} alt="Front-End Developer" />
            <div>
                <h3 className='font-bold'>Front-End Developer</h3>
                <p> Html, Bootstrap, Tailwind</p>
            </div>
            </div>
            <div>
                <img src={Backend} alt="Back-End Developer" />
                <div>
                   <h3 className='font-bold'>Back-End Developer</h3>
                   <p> NodeJS, React</p>
                </div>
            </div>
            <div>
            <img src={UiUx} alt="UiUx Designer" />
            <div>
                <h3 className='font-bold'>UI/UX Designer</h3>
                <p> Figma, ...</p>
            </div>
            </div>
        </div>
    </div>
  )
}
