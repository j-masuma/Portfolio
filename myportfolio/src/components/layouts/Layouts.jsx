import { Outlet } from 'react-router-dom';
import {Header} from '../header/Header';
import {Hero} from '../hero/Hero';
import {Passion} from '../passions/Passion';
import {Port} from '../port/Port';

// eslint-disable-next-line react/prop-types
export default function Layouts({childern}) {
  return (
    <div className='flex flex-col md:space-x-3 p-16'>
        <div className="flex flex-col bg-green-500 h-20 ">
          <Header/>
          <div>{childern || <Outlet/>}</div>    
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

    </div>
  )
}
