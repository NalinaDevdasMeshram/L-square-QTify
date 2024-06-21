/* eslint-disable react/prop-types */
import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from './Section.module.css';
import  Card from '../Card/Card';
import { CircularProgress } from "@mui/material";
const Section =({data, title})=>{
     console.log("debugging data", data);
     console.log("debegging title", title);
      const [toggleData, setToggleData] = useState(true)
      const handletoggleData =()=>{
      setToggleData(!toggleData)
      };
 return(
     <div>
        <div className={styles.header}>
        <h4>{title}</h4>
        {title && 
        <h4 className={styles.toggleData} onClick={handletoggleData}>
        {toggleData ? 'Show All' : 'Collapse All'}
        </h4>}
      </div>
       {
        !data?.length?
            <CircularProgress/>
        :(
            <div className={styles.cardWrapper}>
            {!toggleData ?
              
                <div className={styles.wrapper}>
                  {data.map((item)=>
                    <Card key={item.id} data={item} type='album'/>
                    )}
                </div>
              :(
                <Carousel 
              data ={data}
            componentRender ={(ele)=><Card data={ele} type='albums'/>}
          />
              )}
            </div>
        )}
    </div>
    )

}
export default Section;