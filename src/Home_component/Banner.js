import Carousel from 'react-bootstrap/Carousel';

const banner = [1,2,3,4];

function Banner() {

  return(
    // 배너 github파일 반복문 돌려서 넣기
    <div className='banner-container'>
      <Carousel fade className='banner-carousel'>
        {
          banner.map((num, i)=>{
            return(
              <Carousel.Item key={i} className='banner-carousel-item'>
                {/* <ExampleCarouselImage text="First slide" /> */}
                {/* <img src={bannerImg1}/> */}
                <img src={`https://raw.githubusercontent.com/Jella-o312/modo-image/main/banner/banner${num}.svg`}/>
              </Carousel.Item>
            );
        })
        }
      </Carousel>
    </div>
  );
}

export default Banner;


