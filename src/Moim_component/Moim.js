
import './Moim.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Moim = ({ moimContentText }) => {

  const navigate = useNavigate();

  
  // 체크박스 안에 들어갈 카테고리 목록
  const moimCategories = ['공모전', '디자인', '이직·취업', '운동', '글쓰기', '한잔', '기타'];
  
  
  
  // 전체버튼 누를때 마다 setMoimContentText2 해서 moimContentText 값 받기
  const moimShowType = ['전체보기', '카테고리'];
  const [moimBtnActive, setMoimBtnActive] = useState('전체보기');
  const [moimContentText_Show, setMoimContentText_Show] = useState(moimContentText);  // 모임 데이터 값 받아옴
  

  // 카테고리 버튼 눌렀을때 어떤 버튼이 눌렸는지 버튼value값 반환해주는 코드
  const moimPushButton = (e) => {
    setMoimBtnActive(e.target.value);
  };
  
  
  
  // ⭐ 전체보기 버튼 눌렀을때 moimChecked_title 스테이트에 moimCategories 값을 넣어주는 기능
  useEffect(() => {
    if (moimBtnActive === '전체보기') {
      setMoimContentText_Show(moimContentText);
    } else if (moimBtnActive === '카테고리') {
      setMoimChecked_title([]);   // 카테고리 눌렀을때는 체크목록 저장하는 배열 비워줌
    }
  }, [moimBtnActive])  // 작동 기준은 moimBtnActive가 랜더링됐을때 마다
  





  // ⭐ 체크박스 눌렀을때 기능 (배열에 사용자가 누른 카테고리명을 추가, 삭제)
  const [moimChecked_title, setMoimChecked_title] = useState([]);   // 체크된 카테고리 값 저장 (목록)

  const toggleCheckbox = (data) => {
    if (moimChecked_title.includes(data)) { //배열에 이미 값이 있는 경우 (제거)
      setMoimChecked_title(moimChecked_title.filter(item => item !== data)); // 배열에서 현재 아이템 제거
  } else {  // 배열에 체크한 카테고리 값이 없는 경우 (추가)
    setMoimChecked_title([...moimChecked_title, data]); // 배열에 현재 아이템 추가
    }
  };


  // ⭐ 카테고리에 있는 체크박스 눌렀을때 보여지는 화면(뿌려줄 데이터값 설정)
  let add = [...moimContentText]; // 임시로 데이터를 저장해주는 변수
  
  useEffect(() => {
      if(moimChecked_title.length !== 0) {
        add = [];
         moimChecked_title.forEach((title) => { // 선택된 카테고리 목록 값을 한개씩 뿌려줌
          add=[...add , ...moimContentText.filter(data => data.category === title)];  // 임시 데이터 저장 변수 add에 ,probs로 받아온 전체 모임 데이터 카테고리 값과, 선택한 카테고리 값이 같은 것만 추가해줌
          console.log(add);
          
        })
      } else {
        add= [...moimContentText];
      }
      setMoimContentText_Show(add);
  }, [moimChecked_title] )
  


  return (
    <div className="Moim-container">

      {/* 배너(배경이미지), 문구, 검색창 */}
      <div className="moim-banner">
        {/* <img className='moim-banner-img' src={bannerImg}/> */}
        <div className='moim-banner-search'>
          <h2 className='moim-banner-search-title'>소모임에 오신걸 환영해요!</h2>

          <form className='moim-banner-search-inner'>
            <input type='search' placeholder='관심주제를 검색해주세요'
              onKeyDown={(e) => {
                e.preventDefault();
                if (e.key === 'Enter')
                  alert(e.target.value);
                e.value = ''; // ???? 기능을 안함
              }} />
            {/* enter이벤트 -> 기본동작막고 -> 페이지 이벤트
              기본동작 (새로고침 막기) */}
            {/* 검색창은 enter로도 작동되고, 돋보기 아이콘 클릭했을때도 검색되어야함 */}
            {/* enter이벤트 설정 -> 해당 인풋에 입력한 내용을 토대로 네비게이트 시키ㄱ, 검색 내용이 url파라미터로 받게, 검색해서 보이는 화면은 파라미터값으로 거른다음에 보여줌 */}
            {/* 컴파운드 만들고, 컴파운드 안에는 내가 검색 한 것만 나오게 조건걸기 */}
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '20px', color: '#828282' }} />
            </span>
          </form>
        </div>
      </div>

      {/* 배너를 제외한 body 부분 */}
      <div className='moim-body-container'>

        {/* ⭐ 컨텐츠 카테고리 버튼 */}
        <div className='moim-showType'>
          {
            moimShowType.map((title, i) => {
              return (
                <button
                  key={i}
                  value={title}
                  className={`moim-showType-button${title === moimBtnActive ? ' moim-active' : ''}`}  //moimBtnActive에 저장된 값과 현재 버튼의 값이 같다면 보여줄 배경 색 기능 
                  // className={'moim-showType-button' + (i == moimBtnActive ? ' active' : '')} 
                  onClick={moimPushButton}
                >{title}</button>
              );
            })
          }
        </div>


        {/* ⭐ 카테고리 버튼 눌렀을때 보여줄 카테고리 박스 */}
        {
          moimBtnActive === '카테고리' && (
            <div className='moim-show-categories'>
              {
                moimCategories.map((data, i) => {
                  return (
                    <label key={i} className='mioim-check-box'>
                      <input type='checkbox' value={data}
                        onChange={()=> {toggleCheckbox(data)}} />
                      {/* ↑ 체크박스 클릭 시 토글함수?에 카테고리 이름 보내줌 */}
                      <div>{data}</div>
                    </label>
                  );
                })
              }
            </div>
          )
        }




        {/* ⭐ 컨텐츠 보여줄 공간 */}
        {/* ⛔ 여기  moimChecked_title(체크된 카테고리 목록) 과 같은 것만 뿌리는 기능은 어려울까? */}
        <div className='moim-content-container'> {/* ← 얘가 grid */}
          {
            moimContentText_Show.map((data) => {
              return (
                <div className='moim-content-box' key={data.id} onClick={() => navigate(`/moim/detail/${data.id}`)}>
                  <div className='moim-content-box-img'
                    style={{
                      backgroundImage: `url(https://raw.githubusercontent.com/Jella-o312/modo-image/main/moim-img/${data.id}.png)`
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
        </div>

      </div>


    </div>
  )
}

export default Moim;