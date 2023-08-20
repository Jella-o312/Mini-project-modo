import Banner from "../Home_component/Banner";
import Categories from "../Home_component/Categories";
import Review from "../Home_component/Review";
import './Main.css';
import motivation from './motivation.svg';

const Main = () =>{
  
  return(
    <div className="main-container">
      <Banner/>
      <Categories/>

      {/* 홍보 이미지 */}
      <div className="service-key-point">
      <img className='main-motivation-img' src={motivation} alt=''/>
      </div>
      
      <Review />



      <button className="apply-mentor"><span>⭐ 멘토로 등록하기 ⭐</span></button>
  
      
    </div>
  )
}

export default Main;