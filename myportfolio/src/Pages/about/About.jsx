import { useEffect, useState } from 'react';
import { homeData } from '../../data/data';
import HeroImg from './heroImg 1.svg';
import { getAllNotes } from '../../api/http';
function About(){
    const [aboutData, setAboutData]=useState('');
    useEffect(()=>{
        getAllNotes().then(response=>{
            setAboutData(response);
        });
    },[]);
          
    return (
        <div className="flex flex-row justify-between pl-8">
            <div className="flex flex-col font-bold gap-4 text-blue-900 bg-opacity-100"> 
                <div className='text-3xl font-Poppins '>
                    <h1>Hi!</h1>
                    <h2 className=''>I am {aboutData.last_name}. <br/> 
                        A Front-End Developer. </h2></div>
                    <div className='text-sm border '>
                        <p className=' m-3'>
                        {aboutData.description}
                           </p>
                    </div>
                </div>
    
                <div className='object-fill w-56 flex-shrink-0 mr-10'>
                  <img src={HeroImg} alt="aaa" />
                </div>
    
        </div>
      )
}

export default About;