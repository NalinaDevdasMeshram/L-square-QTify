/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import GenresType from "../utilis/GenresTypes";
import Card from "../Card/Card";
import styles from './GenresSection.module.css';
import TabContext from '@mui/lab/TabContext';
import  { Box, CircularProgress, Tab } from '@mui/material';
import TabList from '@mui/lab/TabList';
import Carousel from "../Carousel/Carousel";
import TabPanel from '@mui/lab/TabPanel';
 const GenresSection= ({data, title, genreList}) =>{
    //  console.log('debugging  data', data)
    //  console.log('debugging the genres title', title)
    //  console.log('debug the generesdata', genresData)
    const [value, setValue] = useState('all')
    const [songData, setSongData] =useState(data)
    const handleChange=(event, newValue)=>{
        setValue(newValue);
    }
    useEffect(()=>{
        console.log('original data', data)
        console.log('selected genre key', value)
        const filteredData = GenresType(data, value);
        setSongData(GenresType(data, value))
        console.log('Filtered data:', filteredData);
        setSongData(filteredData);
    },[data, value])
 return(
   <div>
     <div className={styles.header}>
     <h3>{title}</h3>
     </div>
     <TabContext value={value}>
     <Box className={styles.tabWrapper}>
     <TabList onChange={handleChange} 
     aria-label="Genre Tab" 
     TabIndicatorProps={{className:styles.indicator}}>
    {
         genreList?.map((genre)=>{
            return(
                <Tab 
                className={genre.key=== value ? styles.selectedTab:styles.genreTab} 
                key={genre.key} 
                label={genre.label} 
                value={genre.key}
                />
            )
        })
    }
     </TabList>
     </Box>
     <TabPanel key={value} value={value}>
    {
     !songData?.length ?
     <CircularProgress/>
     :(
        <div className={styles.cardWrapper}>
         <Carousel 
          data={songData}
          componentRender={(ele)=><Card data={ele} type='song'/>}
         />
        </div>
     )
     }
     </TabPanel>
     </TabContext>
   </div>
 );
}
export default GenresSection;