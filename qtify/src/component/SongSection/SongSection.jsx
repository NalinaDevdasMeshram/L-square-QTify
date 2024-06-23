/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import styles from './SongSection.module.css';
import Slider from '@mui/material/Slider';
import PauseButton from '../../assets/music.svg';

const SongSection =()=>{
 return(
    <Box className={styles.songWrapper}>
    <button className={styles.btn}>
     <img src={PauseButton} alt="pauseButton"/>
     </button>
     <Slider defaultValue={40} aria-label="Default" valueLabelDisplay="auto" />
     
    </Box>
 );
}
export default SongSection;