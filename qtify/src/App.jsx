import { useEffect, useState } from "react";
import CardGridSection from "./component/CardGridSection/CardGridSection";
import HeroImage from "./component/HeroImage/HeroImage";
 import Navbars from "./component/Navbars/Navbar";
  import {fetchTopAlbums, fetchNewAlbums} from './component/Api/ApiCall';
 
 

  
 function App() {
 const [topAlbums, setTopAlbums] = useState([]);
 const [newAlbums, setNewAlbums] = useState([]);
  const generateData = async()=>{
     const topAlbumData = await fetchTopAlbums();
       console.log('top albums data', topAlbumData);
     setTopAlbums(topAlbumData);
     const newAlbumsData = await fetchNewAlbums();
     console.log("new Albums data", newAlbumsData);
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
        <CardGridSection data={topAlbums} title="Top Albums" />
      </div>
      <div style={{marginBottom: '30px'}}>
        <CardGridSection data={newAlbums} title="New Albums" />
      </div>
    </div>
  )
}
export default App;