import axios from 'axios';

const url='https://64a6a427096b3f0fcc8031cc.mockapi.io/Home';


export const addNewNote = (newNoteData) => {
    return axios.post(url, newNoteData)
      .then((response) => {
        console.log('New note added:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error(`Error adding new note: ${error}`);
        throw error; 
      });
  };

// const newNoteData={
//     "name":"Javaria Masooma","model":" I’am coding with a clean and beautiful problem solving in mind.","availability":false,"id":"57","availablility":"yes"
// };
// addNewNote(newNoteData); Added a new data


export const getAllNotes=()=>{
    return axios.get(`${url}/57`)
    .then((response)=>{  
        return response.data;
    })
    .catch(error=>console.error(`Error : ${error}`));
    
}
