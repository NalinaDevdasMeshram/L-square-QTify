import HeroImage from "./component/HeroImage/HeroImage";
 import Navbars from "./component/Navbars/Navbar";
 import Cards from "./component/Card/Cards";

  // eslint-disable-next-line react-refresh/only-export-components
  // export const config = {
  //    endpoint :`https://qtify-backend-labs.crio.do/albums/top`,
  // };
export default function App() {
  return (
    <div className="App">
       <Navbars/> 
      <HeroImage/>
      <Cards/>
    </div>
  )
}
