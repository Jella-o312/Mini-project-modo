const MoimComponent ({moimBtnActive, moimContentText_Show, imsi})= {
  
    if(moimBtnActive === '전체보기'){

      {
        moimContentText_Show.map((data, i) => {
          return (
            <div className='moim-content-box' key={i}>
              <div className='moim-content-box-img'
                style={{
                  backgroundImage: `url(https://raw.githubusercontent.com/Jella-o312/modo-image/main/moim-img/moim${i}.png)`
                  , opacity: '0.85'
                }}>
                <span className='moim-content-box-categoty'>{data.category}</span>
              </div>

              <div className='moim-content-box-info'>
                <div className='moim-contnent-box-title'>{data.title}</div>
                <span>{data.promotion}</span>
                <span className='moim-content-box-info-member'>{data.area} ┃ {data.member} 명</span>
              </div>
            </div>
          );
        })
      }

    }else{
      {
        imsi.map((data, i) => {
          return (
            <div className='moim-content-box' key={i}>
              <div className='moim-content-box-img'
                style={{
                  backgroundImage: `url(https://raw.githubusercontent.com/Jella-o312/modo-image/main/moim-img/moim${i}.png)`
                  , opacity: '0.85'
                }}>
                <span className='moim-content-box-categoty'>{data.category}</span>
              </div>

              <div className='moim-content-box-info'>
                <div className='moim-contnent-box-title'>{data.title}</div>
                <span>{data.promotion}</span>
                <span className='moim-content-box-info-member'>{data.area} ┃ {data.member} 명</span>
              </div>
            </div>
          );
        })
      }
    }
  
}

export default MoimComponent;