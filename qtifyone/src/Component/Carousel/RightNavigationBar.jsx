import { useSwiper } from "swiper/react";
import RightArrow from '../../../src/assets/RightArrow.svg';
import { useEffect, useState } from "react";
const RightNavigationBar=()=>{
    const swiper = useSwiper();
    // eslint-disable-next-line no-unused-vars
    const[isEnd, setIsEnd] = useState(swiper.isEnd)
    useEffect(()=>{
         const handleSlideRightChanges =()=>{
            setIsEnd(swiper.isEnd)
         }
        swiper.on("slideChange", handleSlideRightChanges)
    // eslint-disable-next-line react-hooks/exhaustive-deps
     return () =>{
        swiper.off("slideChange", handleSlideRightChanges)
     }
    },[swiper])
 return(
 <div>
    {!isEnd && < img src ={RightArrow} alt= "RightArrow"  onClick={()=>swiper.slideNext()}/>}
 </div>
 );
}
export default RightNavigationBar;