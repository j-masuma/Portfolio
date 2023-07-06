import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import Contact from "../../Pages/contact/Contact";
const menulist = [
    {
      id: 1,
      title: "Home",
      path:'/',
    },
    {
      id: 2,
      title: "About",
      path:'/About',
    },
    {
      id: 3,
      title: "Services",
      path:'/Services',
    }
    
  ];
export function Header(){
        const [theme, setTheme]= useState('green');
        console.log('check the render' , theme);
        useEffect(()=>{
            console.log("Init", theme);
        
          },[theme]);
      return (
        <div className="flex flex-row justify-between content-center">
          <div>
            <h2 className="text-blue-900 text-center font-poppins text-25 font-bold tracking-wider" onClick={()=>setTheme('red')}>
              Javaria <span className="text-blue-700">Masooma</span>
            </h2>
          </div>
     
          <div className="flex gap-4 font-poppins">
            {menulist && menulist.map((item) => (
              <div key={item.id}>
                <Link to={item.path} className=" hover:border-[1px] border-green-800 rounded-full px-3 py-1 cursor-pointer">
                  {item.title}
                </Link>
            
              </div>
            ))}
            <div className="text-white text-center font-poppins w-25 tracking-wide p-1 rounded-full bg-blue-500 hover:bg-blue-700">
                <Link to='/Contact'><p>Contact Me</p></Link>
            </div>
          </div>
        </div>
      );
}