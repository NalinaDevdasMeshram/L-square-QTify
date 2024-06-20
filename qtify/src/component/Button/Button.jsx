
// import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css'
 
const Button = () =>{
  //  const navigate  = useNavigate()
  //   const handlechange=()=>{
  //     navigate('/Feedback')
  //   }
  return (
    <div>
  <button className={styles.btn}>Give Feedback</button>
</div>
  )
}
export default Button;