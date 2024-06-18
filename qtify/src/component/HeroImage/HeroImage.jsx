

 import styles from '../HeroImage/HeroImage.module.css';
 import heroImage from "../../assets/hero_headphones.png";

const HeroImage = () =>{
 return (
    <div className={styles.HeroImage} >
      <div>
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over thousands podcast episcode</h2>
        </div>
        <div>
        <img className={styles.imgSrc}  width={212} src={heroImage} alt="image"/>
        </div>
    </div>
 )
}
export default HeroImage;