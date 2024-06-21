 import HeroImage from "./component/HeroImage/HeroImage";
 import Navbars from "./component/Navbars/Navbar";
 import { useEffect, useState } from "react";
 import { fetchTopAlbums, fetchNewAlbum } from "./component/Api/ApiCall";
import Section from "./component/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
   const [newAlbums, setNewAlbums] = useState([]);
   const generateData =async()=>{
    const topAlbumData = await  fetchTopAlbums();
     console.log(topAlbumData);
     setTopAlbums(topAlbumData)
     const newAlbumsData = await fetchNewAlbum();
    console.log(newAlbumsData)
     setNewAlbums(newAlbumsData);
  }
  useEffect(()=>{
    generateData();
   },[])
  return (
    <div className="App">
       <Navbars/> 
      <HeroImage/>
      <div style={{marginBottom: '30px'}}>
      <Section data={topAlbums} title="Top Albums"/>
      </div>
      <div style={{marginBottom: '30px'}}>
      <Section data={newAlbums} title="New Albums"/>
      </div>
      </div>
  )
}
export default App;