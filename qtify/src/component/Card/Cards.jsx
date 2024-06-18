
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import {Card,CardMedia,CardActionArea, Typography, CardContent} from "@mui/material";
import styles from './Card.module.css'
   const Cards =()=>{
    return(
        <div className={styles.MainContainer}>
            <h5>Top Albums</h5>
        <div className={styles.subContainer}>
        <Card className={styles.CardContainer}>
        <CardActionArea className={styles.innerContainer}>
          <CardMedia
            component="img"
            image="https://images.pexels.com/photos/4962458/pexels-photo-4962458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="title"
          />
          </CardActionArea>
            <Stack  className={styles.btn}>
            <Chip  label=" 100 Follows"/>
            </Stack>
            <CardContent>
            <Typography  className ={styles.text} variant="h6" component="div">New English Songs</Typography>
            </CardContent>
          </Card>
          </div>
      </div>
   );
}
export default Cards;