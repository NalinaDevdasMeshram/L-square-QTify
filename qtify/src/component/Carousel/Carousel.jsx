/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "./Carousel.module.css";
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";
const Carousel =({data, componentRender}) => {
     const Controls =({data})=>{
     const swiper = useSwiper(data, componentRender);
    
     useEffect(()=>{
        swiper.slideTo(0, null)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [data]);
     }
    console .log("data", data)
    console.log("componentRender", componentRender)
    return(
        <div className={styles.wrapper}>
        <Swiper  className={styles.swiperwrapper}
        style={{padding:'0px 10px'}}
         initialSlide={0} 
         slidesPerView={7} 
         spaceBetween ={40} 
          allowTouchMove  
       > 
       <Controls data={data}/>
       <LeftNavigation/>
       <RightNavigation/>
        {
          data.map((item)=>{
          return(
            <SwiperSlide className={styles.SwiperSlide} key={item.id}>{componentRender(item)}
            </SwiperSlide>
        
            )
        })
   } 
    </Swiper>
    </div>
    )
}
export  default Carousel;