import './Moim.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const Moim = () =>{
  return(
    <div className="Moim-container">

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
      
      <div className='moim-showType'>
        <button>전체보기</button>
        <button>관심사 보기</button>
      </div>

    </div>
  )
}

export default Moim;