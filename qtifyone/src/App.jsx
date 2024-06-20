import { useEffect, useState } from "react";
import styles from './App.module.css'
import CardGridSection from "./component/CardGridSection/CardGridSection";
import HeroImage from "./component/HeroImage/HeroImage";
 import Navbars from "./component/Navbars/Navbar";
 import Card from "./component/Card/Card";
 import GenreSection from "./component/GenreSection/GenreSection";
  import {fetchTopAlbums, fetchNewAlbums, genres, fetchSongs} from './component/Api/ApiCall';
  function App() {
   const [topAlbums, setTopAlbums] = useState([]);
   const [newAlbums, setNewAlbums] = useState([]);
   const [songsData, setSongsData] = useState([]);
   const [genresList, setGenresList] = useState([]);
   const generateData = async()=>{
     const topAlbumData = await fetchTopAlbums();
       console.log('top albums data', topAlbumData);
     setTopAlbums(topAlbumData);
     const newAlbumsData = await fetchNewAlbums();
     console.log("new Albums data", newAlbumsData);
     setNewAlbums(newAlbumsData);
     const genresData = await genres();
     console.log('genres data', genresData);
     setGenresList(genresData)

     const songs = await fetchSongs();
     setSongsData(songs);
     
  }
  useEffect(()=>{
    generateData();
  },[])
  return (
    <div className="App">
       <Navbars/> 
      <HeroImage/>
      <Card/>
      <div style={{marginBottom: '30px'}}>
        <CardGridSection data={topAlbums} title="Top Albums" />
      </div>
      <div style={{marginBottom: '30px'}}>
        <CardGridSection data={newAlbums} title="New Albums" />
      </div>
      <div >
        <hr className={styles.divider}/>
      </div>
      <div>
        <GenreSection data={genresList} title="genres" genresList={genresList} />
      </div>
      <div style={{marginBottom: '30px'}}>
      <CardGridSection data={songsData} title="songs"/>
      </div>
    </div>
  )
}
export default App;
