import { Outlet } from 'react-router-dom';
import {Header} from '../header/Header';
import {Hero} from '../hero/Hero';
import {Passion} from '../passions/Passion';
import {Port} from '../port/Port';
import Contact from '../../Pages/contact/Contact';

// eslint-disable-next-line react/prop-types
export default function Layouts({children}) {
  return (
    <div className='flex flex-col md:space-x-3 p-4 border border-blue-900'>
        <div className="flex flex-col">
          <Header/>
          <div>{children || <Outlet/>}</div>    
        </div>

        <div>
          <Hero/>
        
        </div>

        <div>
          <Passion/>
        </div>

        <div>
          <Port/>
        </div>

        <div>
          <Contact/>
        </div>

    </div>
  )
}
