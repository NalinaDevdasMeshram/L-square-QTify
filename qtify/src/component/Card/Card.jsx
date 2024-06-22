// import Tooltip from '@mui/material/Tooltip';
import styles from './Card.module.css';
import { Chip,Tooltip } from '@mui/material';
const Card =({data, type})=>{
 const getCard =(type)=>{
    switch(type){
         case 'album':{
            const {image, follows, title, songs} = data;
            return(
                <Tooltip title={`${songs?.length||0}songs`} placement='top' arrow>
                    <div className={styles.card}>
                        <div className={styles.imgSrc}>
                        <img src={image} alt='album cover'/>
                        <div className={styles.banner}>
                         <Chip className={styles.Chip} label={`${follows} Follows`} size='small'/>
                          </div>
                         </div>
                         <div className={styles.titleWrapper}>
                          <p>{title}</p>
                         </div>
                    </div>
                </Tooltip>
             )

         }
         case 'song':{
             const {image, likes, title} = data;
             return(
                <div className={styles.card}>
                <div className={styles.imgSrc}>
                <img src={image} alt='cover song'/>
                <div className={styles.banner}>
                 <Chip className={styles.Chip} label={`${likes} Likes`} size='small'/>
                  </div>
                 </div>
                 <div className={styles.titleWrapper}>
                  <p>{title}</p>
                 </div>
            </div>
             )
         }
       default:<></>
    }
    
 }
 return getCard(type);

}
export default Card;