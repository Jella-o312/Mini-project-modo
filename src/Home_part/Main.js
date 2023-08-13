import Banner from "../component/Banner";
import Categories from "../component/Categories";
import './Main.css';

const Main = () =>{
  return(
    <div className="main-container">
      <Banner/>
      <Categories/>

      {/* 홍보 이미지 */}
      <div className="service-key-point">
        <img />
        <span>이미지 + 관련 어필 문구</span>
      </div>

      
      
    </div>
  )
}

export default Main;