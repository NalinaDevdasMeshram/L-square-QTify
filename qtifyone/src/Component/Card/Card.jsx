import { Chip, Tooltip } from '@mui/material';
import styles from './Card.module.css';
const Card = ({data, type})=>{
 const getCard =(type)=>{
  switch(type){
    case 'album':{
 const{image, follows, title, songs,} = data;
 return(
  <Tooltip title={`${songs.length} songs`} placement='top' arrow>
    <div className={styles.innerCard}>
      <div className={styles.imgSrc}>
          <img src={image} alt='albums songs'/>
          <div className={styles.banner}>
          <Chip className={styles.chip} label={`${follows} Follows`} size="small" />
          </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{title}</p>
        </div>
    </div>
  </Tooltip>
 )
    }
    case 'song' :{
      const {image, likes, title} = data;
     return(
       
        <div className={styles.innerCard}>
          <div className={styles.imgSrc}>
          <img src={image} alt='cover songs'/>
          <div className={styles.banner}>
          <Chip className={styles.chip} label={`${likes} Follows`} size="small" />
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
 return getCard (type);
}
export default Card;