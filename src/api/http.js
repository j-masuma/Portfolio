import axios from 'axios';

const url='https://64a6a427096b3f0fcc8031cc.mockapi.io/Home/2';
export const getAllNotes=()=>{
    return axios.get(url)
    .then((response)=>{  
        return response.data;
    })
    .catch(error=>console.error(`Error : ${error}`));
    
}
