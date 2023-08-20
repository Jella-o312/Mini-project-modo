import { useNavigate } from 'react-router-dom';
import './Join-Login.css';
import React, { useState } from 'react';

const Login = ({ userInfo, setIsLogin, setImsiName }) => {
  
  const navigate = useNavigate();
  
  const [id, setId] = useState(''); // 고객이 정보 입력하고 로그인 버튼 눌렀을때 저장되는 값
  const [password, setPassword] = useState('');

  const handleLogin = () => { // matchingUser 스테이트를 만들어서 userInfo에 저장된 값과 고객이 로그인창에 입력한 값을 비교해 같은 값이 있는 객체를 반환
    const matchingUser = userInfo.find((data) => data.id === id && data.password === password);

    if (matchingUser) {
      setIsLogin(true); // 로그인 성공상태로 변경해서 APP에 보내주면 상단 헤더 메뉴가 로그아웃으로 바뀜
      setImsiName(matchingUser.name); // 이름 정보 APP에 보내줘서 로그인 성공시 상단에 이름 띄움
      // alert(`${matchingUser.name}님 로그인 되었습니다.`); // 로그인 알람(필요없을듯)
      navigate('/');  // 로그인 성공시 홈페이지 메인으로 이동
    } else {
      alert('아이디나 비밀번호가 일치하지 않습니다.');  // 불일치 알람
    }
  };

  return (
    <div className="login-container">
      <h3 className="login-title">로그인</h3>
      <div className='login-box'>
        <div className='login-box-inner'>
          <span className='login-box-inner-title'>아이디</span>
          <input id='id-txt' type="text" placeholder="아이디를 입력해주세요"
            onChange={(e) => setId(e.target.value)} // 글자가 입력될때마다 id state에 값 갱신
          />
        </div>

        <div className='login-box-inner'>
          <span className='login-box-inner-title'>비밀번호</span>
          <input id='id-pass' type='password' placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button className="login-button" onClick={handleLogin}>로그인</button>  {/* 로그인핸들러 기능 작동해서 userinfo정보와 비교함 */}
        





        <div className='find-login'>
          <a href=''>아이디 찾기</a>
          <div className='login-line'></div>
          <a href=''>비밀번호 찾기</a>
          <div className='login-line'></div>
          <a className='' onClick={()=>{navigate('/join')}} style={{cursor: 'pointer'}}>회원가입</a>
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