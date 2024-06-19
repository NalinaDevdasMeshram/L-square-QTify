/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
 import Carousel from "../Carousel/Carousel";
 import { useState } from "react";
import styles from "./CardGridSection.module.css";
const CardGridSection=({ data, title})=>{
const [carouselToggle, SetCarouselToggle] = useState(true);
const handleToggle =()=>{
  SetCarouselToggle(!carouselToggle);
 }
  return(
  <div>
    <div className={styles.header}>
      <h3>{title}</h3>
      {title && <h4 className={styles.toggleText} onClick={handleToggle}>
      
      {carouselToggle? 'ShowAll' : 'Collapse All'}
      </h4>}
    </div>
    {
      !data ?.length ?
      <CircularProgress/>
      :(
        <div className={styles.cardWrapper}>
         {!carouselToggle ? 
         <div className={styles.wrapper}>
          {data.map((item)=><Card key={item.id} data={item} type='album'/>)}
         </div>
         :
         <Carousel 
          data ={data}
          componentRender ={(ele)=><Card data={ele}  type='albums'/>}
          />
        }
        </div>
      )
    }
  </div>
  )

}
export default CardGridSection;