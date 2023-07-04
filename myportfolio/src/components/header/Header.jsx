import { useEffect, useState } from "react";

const menulist = [
    {
      id: 1,
      title: "HOME",
    },
    {
      id: 2,
      title: "ABOUT",
    },
    {
      id: 3,
      title: "SERVICES",
    },
    {
      id: 4,
      title: "CONATACT",
    },
  ];
export function Header(){
        const [theme, setTheme]= useState('green');
        console.log('check the render' , theme);
        useEffect(()=>{
            console.log("Init", theme);
        
          },[theme]);
      return (
        <div className="flex justify-between w-screen h-screen bg-green-700">
          <div>
            <h2 className="text-[24px] font-bold text-white" onClick={()=>setTheme('red')}>
              JAVARIA <span className="text-red-800">MASOOMA {theme}</span>
            </h2>
          </div>
    
          <div className="flex gap-4">
            {menulist && menulist.map((item) => (
              <div key={item.id}>
                <h2 className="text-white hover:border-[1px] border-green-800 rounded-full px-3 py-1 cursor-pointer">
                  {item.title}
                </h2>
              </div>
            ))}
            <h2 className="text-white hover:border-[1px] h-8 border-green-800 rounded-full px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to bg-red-900">
              HIRE ME
            </h2>
          </div>
        </div>
      );
}