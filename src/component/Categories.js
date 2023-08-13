import ca2 from './ca2.png';

const cateImsi = [1,2,3,4,5,6,7];


const Categories = () =>{
  return(
    <div className="categories-container" >
      <div className="categories-title">소모임 카테고리</div>
      <div className='categories-box'> {/* ← 얘가 grid*/}
          {
            // 8번째에는 기타 혹은 더보러가기로 넣기
            cateImsi.map ((data,i)=>{
              return(
                <div className='categories-innerBox' key={data}>
                  <img className='cate-img' src={ca2}/>
                  <p className='cate-text'>카테고리 {cateImsi[i]}</p>
                </div>
              );
            })
          }
      </div>
      

      <div className="categories-title">멘토링 카테고리</div>
      <div className='categories-box'> {/* ← 얘가 grid*/}
          {
            // 8번째에는 기타 혹은 더보러가기로 넣기
            cateImsi.map ((data,i)=>{
              return(
                <div className='categories-innerBox' key={data}>
                  <img className='cate-img2' src={ca2}/>
                  <p className='cate-text'>카테고리 {cateImsi[i]}</p>
                </div>
              );
            })
          }
      </div>
      
      

    </div>
)
}

export default Categories;


