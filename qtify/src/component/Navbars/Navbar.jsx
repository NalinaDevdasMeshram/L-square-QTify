//  import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import styles from'./Navbar.module.css';
import Logo from '../Logo/Logo';
// import Button from '../Navbar/Button/Button';
import { TextField } from '@mui/material';
 const Navbar = ()=> {
  return (
    <div>
    <Box >
      {/* <AppBar position="static">  */}
        <Toolbar className={styles.Navbar}>
          <Logo/>
          <TextField 
          className={styles.search}
          variant='outlined'
          Width="1500px"
          placeholder='Search a album on your choice'
          />
          <img  className ={styles.imgSrc} src='/src/assets/search-icon.svg' alt='search'/>
           <Button  className={styles.btn} variant="outlined" >Give Feedback</Button> 
          </Toolbar>
        {/* </AppBar> */}
    </Box> 
    </div>
  );
}
export default Navbar;
