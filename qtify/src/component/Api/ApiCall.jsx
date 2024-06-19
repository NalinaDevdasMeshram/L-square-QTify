 import axios from 'axios'
 const BACKEND_ENDPOINT = `https://qtify-backend-labs.crio.do`;
 const  fetchTopAlbums = async()=>{
try{
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    console.log('Api response', response);
    return response.data;

 }
  catch(e){
    console.log("something went wrong", e)
    return [];
  }
 
 };
 
 export{ fetchTopAlbums}