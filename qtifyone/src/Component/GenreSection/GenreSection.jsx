/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from './GenreSection.module.css';
import GenresType from '../utilis/GenresType';
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Card} from "@mui/material";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
const GenreSection=({data, title, genresList})=>{
const[value, setValue] = useState('all');
const [songData, setSongData] = useState(data);
const handleChange =(event, newValue)=>{
 setValue(newValue);
}
useEffect(()=>{
    setSongData(GenresType(data, value))
},[data, value])
 return(
  <div>
    <div className={styles.header}>
    <h3>{title}</h3>
    </div>
    <TabContext value={value}>
    <Box className={styles.tabWrapper}>
        <TabList onChange={handleChange} arai-label ='Genre Tsb' TabIndicatorProps={{className:styles.indicator}}>
         {
            genresList?.map((genre)=>
            {
            return(
                    <Tab className={genre.key==value?styles.selectedTab:styles.genreTab} key={genre.key} label={genre.label} value={genre.key}/>
                )
            })
         }
        </TabList>
        </Box>
        <TabPanel key={value} value={value}>
        {
             !songData?.length ?
             <CircularProgress />
             : (
                <div className={styles.cardWrapper}>
                <Carousel
                data={songData}
                componentRender={(ele) => <Card data={ele} type="song" />}
                />
            </div>

             )

            }
        </TabPanel>
    </TabContext>
  </div>
 );
 
}
export default GenreSection;