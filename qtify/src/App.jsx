 import styles from './App.module.css';
 import HeroImage from "./component/HeroImage/HeroImage";
 import Navbars from "./component/Navbars/Navbar";
 import { useEffect, useState } from "react";
 import { fetchTopAlbums, fetchNewAlbum, fetchgenres, fetchSongs} from "./component/Api/ApiCall";
import Section from "./component/Section/Section";
import GenresSection from './component/GenresSection/GenresSection'
import FAQs from './component/FAQs/FAQs';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
   const [newAlbums, setNewAlbums] = useState([]);
   const [songs, setSongs] = useState([]);
   const [genreList, setGenreList] = useState([]);
    const generateData =async()=>{
    const topAlbumData = await  fetchTopAlbums();
    //  console.log(topAlbumData);
     setTopAlbums(topAlbumData)
     const newAlbumsData = await fetchNewAlbum();
    // console.log(newAlbumsData)
     setNewAlbums(newAlbumsData);
      const genresres = await fetchgenres();
      console.log('genresres', genresres); // store the list to genresres variable 
      setGenreList(genresres)
   const songsAlbums = await fetchSongs();
    // console.log('songsAlbums', songsAlbums)
    setSongs(songsAlbums)

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
      <div>
        <hr className={styles.partitionLine}/>
      </div>
      <div style={{marginBottom: '30px'}}>
      <Section data={newAlbums} title="New Albums"/>
      </div>
      <hr className={styles.partitionLine}/>
      <div>
      <GenresSection data={songs} title='Songs' genreList={genreList}/>
      </div>
      <div>
      <hr className={styles.partitionLine}/>
      </div>
      <FAQs/>
      </div>
  )
}
export default App;