/* eslint-disable no-unused-vars */
 import { useSwiper} from "swiper/react"
 import styles from './Carousel.module.css';
 // eslint-disable-next-line no-unused-vars
import LeftArrow from '../../../src/assets/LeftArrow.svg';
 import { useEffect, useState } from "react";
 const LeftNavigationBar =()=>{
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning)
    useEffect(() => {
         const handleslideChanges  =()=>{
            setIsBeginning(swiper.isBeginning);
         }
        swiper.on("slideChange", handleslideChanges)
    // eslint-disable-next-line react-hooks/exhaustive-deps
     return () =>{
        swiper.off("slideChange", handleslideChanges)
     }
    }, [swiper])
    return(
        <div className={styles.LeftNavigationBar}>
           {! isBeginning && < img src ={LeftArrow} alt="left Arrow" onClick={() => swiper.slidePrev()}/>}
        </div>
    );
 
 }
 export default LeftNavigationBar;