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

 export const fetchgenres = async ()=>{
   try{
      const ObjAll={
         key:'all',
         label:'all'
      }
        const response = await axios.get(`${BACKEND_ENDPOINT}/genres`)
         const genresData =  response.data.data;
          genresData.unshift(ObjAll)
         //   console.log('fetch genres', genresData); // getting list of songs navbar 
          return genresData;
   }
   catch(e){
      console.log('fetch the genres data', e)
      return []
   }
 }

 export const fetchSongs = async ()=>{
   try{
      const response = await axios.get(`${BACKEND_ENDPOINT}/songs`)
      //  console.log('Api response of fetch songs', response)
      return response.data
   }
   catch(e){
      console.log('fetch the songs error', e)
   }
 }