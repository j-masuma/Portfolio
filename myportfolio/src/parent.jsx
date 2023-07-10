import axios from 'axios';
import { useEffect, useState } from 'react';

const url='https://64a6a427096b3f0fcc8031cc.mockapi.io/Home/2';
export default function Parent() {
  const [homeData ,setHomeData] = useState();
    useEffect(() => {
      getAllNotes();
    }, [])
    
    const getAllNotes=()=>{
        axios.get(url)
        .then((response)=>{  
            setHomeData(response.data);
        })
        .catch(error=>console.error(`Error : ${error}`));
    }

    console.log('response' , homeData);
    return (
    <div className='flex flex-col gap-4'>
     <p>Title</p>
      {
         <div>
          {homeData?.description ?? 'Hhhh'}
         </div>
      }
    </div>
  )
}
