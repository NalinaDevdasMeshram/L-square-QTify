import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from './Carousel.module.css';
import LeftArrow from '../../assets/LeftArrow.svg';
const LeftNavigation = () =>{
 const swiper = useSwiper();
 const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
 useEffect(()=>{
    const handleLeftChange =()=>{
        setIsBeginning(swiper.isBeginning)
      }
      swiper.on('slideChanges', handleLeftChange);
      return()=>(
        swiper.off('slideChange', handleLeftChange)
      ) 
   },[swiper])

  return(
 <div className={styles.leftNavigation}>
 {
  isBeginning && <img src ={LeftArrow} alt="left arrow" onClick={()=>swiper.slidePrev()}/>
 }
 </div>
  );
}
export default LeftNavigation;