import { Outlet } from 'react-router-dom';
import {Header} from '../header/Header';
// eslint-disable-next-line react/prop-types
export default function Layouts({children}) {
  return (
    <div className='flex flex-col p-[5-rem] pt-4 border border-blue-900'>
        <div className="flex flex-col">
          <Header/>
          <div>{children || <Outlet/>}</div>    
        </div>
    </div>
  )
}
