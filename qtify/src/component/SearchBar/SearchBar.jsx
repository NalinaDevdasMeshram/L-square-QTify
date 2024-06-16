// import React from 'react';
import Box from '@mui/material/Box';
import styles from './SearchBar.module.css';
import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
import search from '../../assets/search-icon.svg';
const SearchBar =()=>{
    
 return(
    <Box className={styles.searchContainer}> 
    <InputBase className={styles.search}
    placeholder="Search a album of your choice"
    />
     <button className={styles.textSrc}>
     <img   
      src={search}
      alt='search'
      /> 
  </button>
  </Box>
 );
 }
 export default SearchBar;