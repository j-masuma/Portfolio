import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const menulist = [
    {
      id: 1,
      title: "HOME",
      path:'/',
    },
    {
      id: 2,
      title: "ABOUT",
      path:'/About',
    },
    {
      id: 3,
      title: "SERVICES",
      path:'/Services',
    },
    {
      id: 4,
      title: "CONATACT",
      path:'/Contact',
    },
  ];
export function Header(){
        const [theme, setTheme]= useState('green');
        console.log('check the render' , theme);
        useEffect(()=>{
            console.log("Init", theme);
        
          },[theme]);
      return (
        <div className="flex justify-between ">
          <div>
            <h2 className="text-[24px] font-bold text-white" onClick={()=>setTheme('red')}>
              JAVARIA <span className="text-red-800">MASOOMA {theme}</span>
            </h2>
          </div>
    
          <div className="flex gap-4">
            {menulist && menulist.map((item) => (
              <div key={item.id}>
                <Link to={item.path} className="text-white hover:border-[1px] border-green-800 rounded-full px-3 py-1 cursor-pointer">
                  {item.title}
                </Link>
              </div>
            ))}
            <Link to='www.google.com' className="text-white hover:border-[1px] h-8 border-green-800 rounded-full px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to bg-red-900">
              HIRE ME
            </Link>
          </div>
        </div>
      );
}