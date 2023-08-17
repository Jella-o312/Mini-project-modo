import './Moim.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Moim = ({moimContentText}) =>{

  const moimShowType = ['전체보기', '카테고리'];
  const [moimBtnActive,setMoimBtnActive] = useState('');
  // 전체버튼 누를때 마다 setMoimContentText2 해서 moimContentText 값 받기
  // 카테고리 버튼 눌렀을때 화면에 카테고리 체크박스 버튼 보이게 하기


  const [moimContentText2,setMoimContentText2] = useState(moimContentText);
  const [moimCheckBox, setMoimCheckBox] = useState('');

  // 체크박스 눌렀을때 해당 값을 moimcheckbox에 담아야함
  // useEffect 사용해서 moimcheckbox가 바뀔때만 작동되게 (setMoimContentText2) -> 모임체크에 들어있는 값을 필터작업해서 setMoimcontent set하기

  // 버튼 작업 참고 링크
  // https://velog.io/@boyfromthewell/React-%EA%B0%81%EA%B0%81%EC%9D%98-%EB%B2%84%ED%8A%BC-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%83%89%EC%83%81-%EB%B3%80%EA%B2%BD-map%EC%9C%BC%EB%A1%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%ED%95%9C-%EA%B2%BD%EC%9A%B0
  const moimPushButton = (e)=> {
    setMoimBtnActive((prev)=>{
      return e.target.value;
    });
  }






  return(
    <div className="Moim-container">

      {/* 배너(배경이미지), 문구, 검색창 */}
      <div className="moim-banner">
        <div className='moim-banner-search'>
          <h2 className='moim-banner-search-title'>소모임에 오신걸 환영해요!</h2>
          
            <form className='moim-banner-search-inner'>
              <input type='search' placeholder='관심주제를 검색해주세요'
              onKeyDown={(e)=>{
                e.preventDefault();
                if(e.key === 'Enter')
                  alert(e.target.value);
                  e.value = ''; // ???? 기능을 안함
              }}/>
              {/* enter이벤트 -> 기본동작막고 -> 페이지 이벤트
              기본동작 (새로고침 막기) */}
                {/* 검색창은 enter로도 작동되고, 돋보기 아이콘 클릭했을때도 검색되어야함 */}
                {/* enter이벤트 설정 -> 해당 인풋에 입력한 내용을 토대로 네비게이트 시키ㄱ, 검색 내용이 url파라미터로 받게, 검색해서 보이는 화면은 파라미터값으로 거른다음에 보여줌 */}
                {/* 컴파운드 만들고, 컴파운드 안에는 내가 검색 한 것만 나오게 조건걸기 */}
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: '20px', color:'#828282'}}/>
                </span>
            </form>
        </div>        
      </div>

      {/* 배너를 제외한 body 부분 */}
      <div className='moim-body-container'>
        
        {/* ⭐ 컨텐츠 카테고리 버튼 */}
        <div className='moim-showType'>
          {
            moimShowType.map ((title,index)=>{
              return(
                <button 
                  value={index}
                  className={`moim-showType-button${index === Number(moimBtnActive) ? ' moim-active' : ''}`}
                  // className={'moim-showType-button' + (i == moimBtnActive ? ' active' : '')} 
                  onClick={moimPushButton}
                >{title}</button>
              );
            })
          }
        </div>


        {/* ⭐ 카테고리 버튼 눌렀을때 보여줄 화면 */}
        <div className='moim-show-categories'> 
            {
              moimContentText.map((data,i)=>{
                return(  
                  <>
                  <input className={`moim-show-categories-button${i}`} type='checkbox'/> {data.category}
                  {/* <button> className= {`moim-show-categories-button${i}`}>{data.category}</button> */}
                  </>   
                )
              })
            }
        </div>



        {/* ⭐ 컨텐츠 보여줄 공간 */}
        <div className='moim-content-container'> {/* ← 얘가 grid */}
          {
          moimContentText.map((data, i)=>{
            return(
            <div  className='moim-content-box' key={i}>
              <div className='moim-content-box-img'
               style={{backgroundImage: `url(https://raw.githubusercontent.com/Jella-o312/modo-image/main/moim-img/moim${i}.png)`
               , opacity: '0.85'
               }}>
                <span className='moim-content-box-categoty'>{data.category}</span>
                {/* <i class="fa-regular fa-star"/>  별모양 체크로 즐겨찾기 기능하고 싶었는데 포★기*/}
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