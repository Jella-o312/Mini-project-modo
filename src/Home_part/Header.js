import './Header.css';
import mogdoLogo from '../modo-logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
{/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#828282",}} /> */}
const Header = () =>{
  return(
    <div className='header-container'>
      <div className='header-nav'>

        <div className='modoLogo'>
            <img className='nav-logo' src={mogdoLogo} alt=''/>
        </div>

        <nav>
          <div>소모임</div>
          <div>멘토링</div>
          <div>커뮤니티</div>
          <div>FAQ</div>
        </nav>

        <search>
          <form>
            <input type='search' placeholder='관심사 검색하기'
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
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize: '18px', color:'#828282'}}/>
              </span>
          </form>
        </search>  

        <div className='nav-login'>
          <button className='join'>회원가입</button>
          <button className='login'>로그인</button>
        </div>

      </div>
    </div>
                  
  )
}

export default Header;



{/* <div className='logo' style={{backgroundImage: 'url(' + logo + ')'}}></div> */}
{/* <div className='nav Header'>
<div className='nav Header'>
  <div><a href="#">소모임</a></div>
  <div><a href="#">멘토링</a></div>
  <div><a href="#">커뮤니티</a></div>
  <div><a href="#">FAQ</a></div> */}