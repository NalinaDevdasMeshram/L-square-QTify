//  import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import styles from'./Navbar.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
const Navbar = ()=> {
  return (
    <div>
    <Box >
     <Toolbar 
     className={styles.Navbar}>
          <Logo/>
          <SearchBar/>
      <Button/>
    </Toolbar>   
   </Box>
    </div>
  );
}
export default Navbar;
