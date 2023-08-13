import ca2 from './ca2.png';

const cateImsi = [1,2,3,4,5,6,7];
const moim = ['공모전', '디자인', '이직·취업', '운동', '글쓰기', '한잔', '기타'];
const mentoring = ['프로그래밍', '디자인', '영상편집', '언어', '마케팅', '신입OJT', '기타'];

const Categories = () =>{
  return(
    <div className="categories-container" >
      <div className="categories-title">소모임 카테고리</div>
      <div className='categories-box'> {/* ← 얘가 grid*/}
          {
            moim.map ((title,i)=>{
              return(
                <div className='categories-innerBox' key={i}>
                  <img className='cate-img' src={`https://raw.githubusercontent.com/Jella-o312/modo-image/main/categoris/somoim/moim${i+1}.svg`}/>
                  <p className='cate-text'>{title}</p>
                </div>
              );
            })
          }
      </div>
      

      <div className="categories-title">멘토링 카테고리</div>
      <div className='categories-box'> {/* ← 얘가 grid*/}
          {
            mentoring.map ((title,i)=>{
              return(
                <div className='categories-innerBox' key={i}>
                  <img className='cate-img' src={`https://raw.githubusercontent.com/Jella-o312/modo-image/main/categoris/mentoring/metoring${i+1}.svg`}/>
                  <p className='cate-text'>{title}</p>
                </div>
              );
            })
          }
      </div>
      
      

    </div>
)
}

export default Categories;


