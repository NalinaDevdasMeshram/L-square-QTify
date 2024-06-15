// import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar =()=>{
    
 return(
 <div className={styles.SearchInput}>
 <button className={styles.searchButton}>
     <img src="./src/assets/search-icon.svg" alt="search-icon"/>
    </button>
 </div>
 );
 }
 export default SearchBar;