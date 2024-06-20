import Box from '@mui/material/Box';
import styles from './SearchBar.module.css';
import InputBase from '@mui/material/InputBase';
import search from '../../assets/search-icon.svg';
// import { useState } from 'react';
const SearchBar =()=>{
    // const [searchData, SetsearchData] = useState(' ')
 return(
    <Box className={styles.searchContainer}> 
    <InputBase className={styles.search}
    placeholder="Search a album of your choice"
    />
     <button className={styles.textSrc}>
     <img src={search} alt='search'
      /> 
  </button>
  </Box>
 );
 }
 export default SearchBar;