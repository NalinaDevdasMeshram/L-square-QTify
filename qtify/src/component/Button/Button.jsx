import { useState } from 'react';
import styles from './Button.module.css';
 import Box from '@mui/material/Box';
 import CloseIcon from '@mui/icons-material/Close';
const Button = () =>{
  const [btnClick, setBtnClick] = useState(false);
   
   const handleClick=()=>{
    setBtnClick(!btnClick)
   }
    const handleSubmit =(event)=>{
        event.preventDefault();
       
        setBtnClick(false);
    }
    
    const handleRemove=()=>{
      setBtnClick(false)
    }
  return(
    <div>
      <div>
      <button className={styles.btn} onClick={handleClick}>
      Give Feedback</button>
      </div>
  
  { btnClick && 
  <Box className={styles.feedbackForm} >
   <form className={styles.cardWrapper} onSubmit={handleSubmit}>
     <div className={styles.remove} onClick={handleRemove}><CloseIcon/></div> 
    <h2 className={styles.heading}>Feedback</h2>
    
    <div className={styles.textname}>
     <div>
      <input type='text'  required placeholder='Full Name' name='Full name'/>
    </div>
    <div>
      <input type='email'  required placeholder='Email ID' name='Email ID'/>
    </div>
    <div>
      <input type='text' placeholder='Subject' name='subject'/>
    </div>
    <div>
      <textarea placeholder='Description' name='Description'></textarea>
    </div>
    <button type='submit' className={styles.submitbtn}>Submit Feedback</button>
    </div>
  </form>
  </Box>
  }
  </div>
  )
}
export default Button;