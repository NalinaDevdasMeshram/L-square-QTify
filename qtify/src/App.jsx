import { useEffect, useState } from "react";
import CardGridSection from "./component/CardGridSection/CardGridSection";
import HeroImage from "./component/HeroImage/HeroImage";
 import Navbars from "./component/Navbars/Navbar";
  import {fetchTopAlbums} from './component/Api/ApiCall';
 
 

  
 function App() {
 const [topAlbums, setTopAlbums] = useState([])
  const generateData = async()=>{
     setTopAlbums(await fetchTopAlbums());
  }
  useEffect(()=>{
    generateData;
  },[])
  return (
    <div className="App">
       <Navbars/> 
      <HeroImage/>
      <div style={{marginBottom: '30px'}}>
        <CardGridSection data={topAlbums} title="Top Albums" />
      </div>
    </div>
  )
}
export default App;