/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
 import styles  from "./Carousel.module.css";
import LeftNavigationBar from './LeftNavigationBar';
import RightNavigationBar from './RightNavigationBar';
import {useSwiper, Swiper, SwiperSlide} from 'swiper/react'
import {useEffect} from 'react'
import 'swiper/css';
const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(()=>{
   swiper.slideTo(0, null)
    },[data,swiper])
    return null;
}
// const Carousel =({data})=>{
//   const Controls = ({data}) => {
//    const swiper = useSwiper(data, componentRender)
//    useEffect(()=>{
//   swiper.slideTo(0, null)
//    },[data])

//   }
// }

  
  const Carousel=({data, componentRender})=>{
  return (
  <div className={styles.wrapper}>
<Swiper  
key={data.id}
initialSlide={0} 
slidesPerView={"auto"} 
spaceBetween = {40} 
allowTouchMove>
<Controls data ={data}/>
<LeftNavigationBar/>
<RightNavigationBar/>

 {
      data.map((item)=>{
          return(
            <SwiperSlide key={item.id}>
            {componentRender(item)}
            </SwiperSlide>
            )
        })
   }
   </Swiper>
  </div>
  );
}

 export default Carousel;