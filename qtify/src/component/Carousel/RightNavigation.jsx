 import { useSwiper } from 'swiper/react';
import RightArrow from '../../assets/RightArrow.svg';
import styles from './Carousel.module.css';
import { useEffect, useState } from 'react';
const RightNavigation =()=>{
 const swiper = useSwiper();
 const [isEnd, setIsEnd] = useState(swiper.isEnd);

 useEffect(()=>{
    const handleRightChange =()=>{
        setIsEnd(swiper.isEnd)
    }
    swiper.on('slideChange', handleRightChange)
  return ()=>{
    swiper.off('slideChange', handleRightChange)
  }
},[swiper])
return(
    <div className={styles.rightNavigation}>
       {!isEnd && < img src ={RightArrow} alt= "RightArrow"  onClick={()=>swiper.slideNext()}/>}
    </div>
)
}
export default RightNavigation;