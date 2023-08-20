import { useNavigate, useParams } from 'react-router-dom';
import './MoimDetail.css';

const MoimDetail = ({moimContentText}) =>{

  const navigate = useNavigate();

  // APP에서 지정한 url → /moim/detail/:id 변수이름을 'id'로 저장해야 url파라미터 값을 제대로 가져올 수 있음
  const {id} = useParams(); // URL 파라미터인 id 값을 가져옴 (반환되는 값이 객체형태여서 객체 형태인 {id로 받아줘야함})
  
  const detailDB = moimContentText.find(data => data.id === id);  // moimContentText(데이터)에 있는 id와 같은지 확인해서 반환
  
  console.log(id, detailDB);

  return(
    <div className='moimDetail-container'>

      <div className='moimDetail-header'>
        <button onClick={() => navigate('/moim')}>카테고리</button>
        <h3 className='moimDetail-title'> ▸ {detailDB.category} ▸ {detailDB.title}</h3>
      </div>

      <hr />

      <div className='moimDetail-box'>
        <div className='moimDetail-box-img'>
          <img src={`https://raw.githubusercontent.com/Jella-o312/modo-image/main/moim-img/${detailDB.id}.png`} alt="Moim Image" />
        </div>


        <div className='moimDetail-box-info'>

          <div className='moimDetail-box-info-title'>
            <h4>{detailDB.title}</h4>
          </div>

          <div className='moimDetail-box-info-promotion'>
            <span>{detailDB.promotion}</span>
          </div>

          <div className='moimDetail-box-info-mini'>
            <div className='moimDetail-box-info-area'>
              <span>지 역</span> <p>{detailDB.area}</p>        
            </div>
            
            <div className='moimDetail-box-info-member'>
              <span>멤버 수</span> <p>{detailDB.member} 명</p>        
            </div>
          </div>

          <div className='moimDetail-box-info-content'>
            <span>{detailDB.content}</span>                  
          </div>

        </div>

      </div>
    </div>
  )
}

export default MoimDetail;
