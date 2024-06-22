import { Box, Slider } from "@mui/material";
import styles from './SongSection.module.css';
 import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
const SongSection =()=>{
 return(
    <Box className={styles.songWrapper}>
    <button className={styles.btn}>
    <PauseCircleOutlineRoundedIcon/>;
    autoPlay={true} 
    </button>
      <Slider
          
        //   autoPlay={true}
          order="reverse"
          
        />
    </Box>
 );
}
export default SongSection;