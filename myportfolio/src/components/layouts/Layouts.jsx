import { Outlet } from 'react-router-dom';
import {Header} from '../header/Header';

// eslint-disable-next-line react/prop-types
export default function Layouts({childern}) {
  return (
    <div className="flex flex-col bg-green-500">
        <Header/>
    
    <div>{childern || <Outlet/>}</div>
    
    </div>
  )
}
