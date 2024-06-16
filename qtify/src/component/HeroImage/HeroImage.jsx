
import Box from '@mui/material/Box';
 import styles from '../HeroImage/HeroImage.module.css';
const HeroImage = () =>{
 return (
    <div className={styles.HeroImage}>
        <Box className={styles.Container}>
        <img className={styles.imgSrc} src="./src/assets/hero_headphones.png" alt="iamge"/>
        <Box className={styles.TextContainer}>
          <h2 className={styles.Text1}>100 Thousand Songs,ad-free</h2>
          <h2 className={styles.Text}>Over thousands podcast episcode</h2>
        </Box>
        </Box>
    </div>
 )
}
export default HeroImage;