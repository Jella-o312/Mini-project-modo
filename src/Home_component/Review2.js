import imsiImg from './Imsi.png';
import './Review2.css';

const Review2 = () =>{
  return(
    <div className='review2-container'>
      <div class="slide-container">
          <span class="slider-span" id="slider-span1"></span>
          <span class="slider-span" id="slider-span2"></span>
          <span class="slider-span" id="slider-span3"></span>

          <div class="image-slider">
              <div class="slides-div" id="slide-1">
                  <img src={imsiImg} alt="" class="img" id="img1"/>
                  <a href="#slider-span1" class="button" id="button-1"></a>
              </div>
              <div class="slides-div" id="slide-2">
                  <img src={imsiImg} alt="" class="img" id="img2"/>
                  <a href="#slider-span2" class="button" id="button-2"></a>
              </div>
              <div class="slides-div" id="slide-3">
                  <img src={imsiImg} alt="" class="img" id="img3"/>
                  <a href="#slider-span3" class="button" id="button-3"></a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Review2;