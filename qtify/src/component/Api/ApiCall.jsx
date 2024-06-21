 import axios from 'axios';
const BACKEND_ENDPOINT = `https://qtify-backend-labs.crio.do`;
 export const fetchTopAlbums =async()=>{
    try{
      const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
      
       return response.data;
    }
    catch(e){
        console.log('fetch top album error', e)
        return [];
    }
 }

 export const fetchNewAlbum = async() =>{
   try{
      const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`)
      return response.data;
   }
   catch(e){
      console.log('fetch new Albums error', e)
      return [];
   }
 }