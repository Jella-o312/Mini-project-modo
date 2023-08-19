import './Join-Login.css';

const Login =() =>{
  return(
    <div className="login-container">
      <h3 className="login-title">로그인</h3>
      <div className='login-box'>
        <div className='login-box-inner'>
          <span className='login-box-inner-title'>아이디</span>
          <input id='id-txt' type="text" placeholder="아이디를 입력해주세요"/>
          {/* <p class="id_input_check"></p>  정규식 넣은 문구*/}

        </div>

        <div className='login-box-inner'>
          <span className='login-box-inner-title'>비밀번호</span>
          <input id='id-pass' type='password' placeholder="비밀번호를 입력해주세요"/>
          {/* <p class="pass_input_check"></p>  정규식 넣은 문구*/}
        </div>

        <button class="login-button" >로그인</button>
        
        <div className='find-login'>
          <a href=''>아이디 찾기</a>
          <div className='login-line'></div>
          <a href=''>비밀번호 찾기</a>
          <div className='login-line'></div>
          <a href='' className=''>회원가입</a>
        </div>


        {/* ↓ 기능 없음 */}
        <button className='login-kakao'>
          <img src="https://assets.cdn.soomgo.com/icons/icon-login-kakaotalk-btn.svg" alt="카카오 로그인" />
          <span>카카오로 시작</span>
        </button>

        <button className='login-naver'>
          <img src="https://assets.cdn.soomgo.com/icons/icon-login-naver-btn.svg"/>
          <span> 네이버로 시작 </span>
        </button>

      </div>
    </div>
  )
}

export default Login;