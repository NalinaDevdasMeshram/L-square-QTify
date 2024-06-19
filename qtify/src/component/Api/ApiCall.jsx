 import axios from 'axios'
 const BACKEND_ENDPOINT = `https://qtify-backend-labs.crio.do`;
  export const  fetchTopAlbums = async()=>{
try{
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    // console.log('Api response', response);
    return response.data;

 }
  catch(e){
    console.log("error fetching top albums", e)
    return [];
  }
 
 };

 export const fetchNewAlbums =async()=>{
  try{
    const res = await axios .get(`${BACKEND_ENDPOINT}/albums/new`);
    //  console.log('Api response', res)
    return res.data;
  }
  catch(e){
     console.log("error fetching new albums", e)
     return [];
  }
 }
 
 