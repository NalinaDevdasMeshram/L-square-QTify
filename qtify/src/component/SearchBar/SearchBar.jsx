/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box';
import styles from './SearchBar.module.css';
import InputBase from '@mui/material/InputBase';
import search from '../../assets/search-icon.svg';
import { useState, useEffect } from 'react';
import  debounce  from './lodash.debounce';

const SearchBar =()=>{
   const [searchData, setSearchData] = useState('');
   const handleSearch = debounce(()=>{
   setSearchData(searchData)
  },500)

  useEffect(()=>{
    if(searchData){
      handleSearch(searchData)
    }
    // return ()=>{
    //  handleSearch.cancel();
    //   };
    },[searchData])
   
   const handleChange = (event)=>{
    setSearchData(event.target.value)
   }
 return(
    <Box className={styles.searchContainer}> 
    <InputBase className={styles.search}
    placeholder="Search a album of your choice"
    value={searchData}
     onChange={handleChange}
  />

     <button className={styles.textSrc} >
     <img src={search} alt='search'
      /> 
  </button>
  </Box>
 );
 }
 export default SearchBar;