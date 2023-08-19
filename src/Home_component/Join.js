import { useNavigate } from 'react-router-dom';
import './Join-Login.css';
import React, { useState, useEffect } from 'react';

const Join = ({setImsiName, setIsLogin}) => {

  const navigate = useNavigate();

  const [AllChecked, setAllChecked] = useState(false);
  const [eachChecked, setEachChecked] = useState({
    check1: false,
    check2: false,
    check3: false
  });

  useEffect(() => {
    if (eachChecked.check1 && eachChecked.check2 && eachChecked.check3) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [eachChecked]);

  const handleAllCheckChange = () => {
    const newAllChecked = !AllChecked;
    setAllChecked(newAllChecked);

    const newEachChecked = {
      check1: newAllChecked,
      check2: newAllChecked,
      check3: newAllChecked
    };
    setEachChecked(newEachChecked);
  };

  const handleEachCheckChange = (e) => {
    const { id, checked } = e.target;
    setEachChecked(data => ({
      ...data,
      [id]: checked
    }));
  };


  // ⭐⭐⭐회원가입 정규식⭐⭐⭐
  const regName = /^[a-zA-Z가-힣]{2,10}$/; // 이름: 2글자 ~ 10글자 내 
  const regexId = /^\w{6,20}$/; // 아이디: 8글자 ~ 20글자 내
  const regexPw = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,20}$/;  // 비밀번호: 영문, 숫자 조합 8글자~20글자 내


  // ⭐⭐⭐앞에 정규식 3개에 대한 상태 ⭐⭐⭐
  //  boolean형태로 값이 반환될 예정이지만, 첫 화면에서는 정규식 답변이 뜨면 안되기 때문에 ''값으로 넣음
  const [isRegexs, setIsRegexs] = useState({
    Rname : '',
    Rid :'',
    Rpassword :''
  });

  // ⭐⭐ 회원가입 버튼 활성화를 위한 함수 ⭐⭐ 
  //isRegexs와 Allchecked 값이 한개라도 false면 flase로 저장되고, 전체가 true일때만 true가됨 (논리연산 기반)
  const joinAllTrue = isRegexs.Rname && isRegexs.Rid && isRegexs.Rpassword && AllChecked;
  
  
  
  
  const [joinInfo, setJoinInfo] = useState(
    {
      name : '',
      id : '',
      password : ''
    });
    
    
  // 회원가입 버튼 클릭 시 작동
  const joinButtonClick = () => {
    let showName = joinInfo.name; // 회원가입할때 이름 받아옴
    setImsiName(showName);  // APP에 있는 스테이트에 이름 보냄
    setIsLogin(true); //회원가입 완료 시 로그인 상태로 바꿈
    navigate('/');  // 홈화면으로 이동
  }
  
 
  return (

    <div className="join-container">

      <h3 className="join-title">모도에 온것을 환영해요!</h3>
      
      <div className="join-box">

        {/* 회원가입 - 이름 */}
        <div className="join-box-inner">
          <span className='join-box-inner-title'>이름</span>
          <input id='join-name-txt' type="text" placeholder="이름(실명)을 입력해주세요" 
            onChange={(e)=> {
              setJoinInfo({...joinInfo, name : e.target.value}) // 글자가 바뀔때마다 joinInfo 스테이트에 name값 갱신 
              
              /* ⭐ 여기에 정규식 확인해서 상태 확인⭐ */
                if(regName.test(e.target.value)){
                  setIsRegexs({...isRegexs, Rname: true}) // 정규식에 부합할때 확인 값 true로 바꿈                   
                }else{
                  setIsRegexs({...isRegexs, Rname: false});
                }               
              }}
              />

          {/* 조건식이 안맞을때만 안내 문구 뜨는 삼항연산자 넣음 */}
          {isRegexs.Rname === false ? <p className="join_input_regexTxt">*2글자 이상 입력해주세요</p> : null}
        </div>

        {/* 회원가입 - 아이디 */}
        <div className="join-box-inner">
          <span className='join-box-inner-title'>아이디</span>
          <input id='join-id-txt' type="text" placeholder="영문 혹은 영문+숫자 조합 6자 이상 입력해주세요"
            onChange={(e)=> {
              setJoinInfo({...joinInfo, id : e.target.value})

                if(regexId.test(e.target.value)){
                  setIsRegexs({...isRegexs, Rid: true}) // 정규식에 부합할때 확인 값 true로 바꿈                   
                }else{
                  setIsRegexs({...isRegexs, Rid: false});
                }               
              }}
              />
            
          {isRegexs.Rid === false ? <p className="join_input_regexTxt">*영문 혹은 영문+숫자 조합 6자 이상 입력해주세요</p> : null}
            
        </div>
        
        {/* 회원가입 - 비밀번호 */}
        <div className="join-box-inner">
          <span className='join-box-inner-title'>비밀번호</span>
          <input id='join-pass-txt' type="password" placeholder="영문+숫자 조합 8자 이상 입력해주세요"
            onChange={(e)=> {
              setJoinInfo({...joinInfo, password : e.target.value})  
              if(regexPw.test(e.target.value)){
                setIsRegexs({...isRegexs, Rpassword: true}) // 정규식에 부합할때 확인 값 true로 바꿈                   
              }else{
                setIsRegexs({...isRegexs, Rpassword: false});
              }               
            }}
            />
        
        {isRegexs.Rpassword === false ? <p className="join_input_regexTxt">*영문+숫자 조합 8자 이상 입력해주세요</p> : null}
          
        </div>
        

        {/* 체크박스 컨테이너*/}
        <div className="join-check-container">
         
          {/* 전체 체크박스 */}
          <div className="join-all-chaeck-box">
            <input
              type="checkbox"
              value="true"
              id="join-allCheck"
              checked={AllChecked}
              onChange={handleAllCheckChange}
            />
            <label className="join-all-label" htmlFor="join-allCheck">
              <span className="checkbox-icon"><i className="fas fa-check fa-sm"></i></span>
              <span className="all-check-label">전체동의</span>
            </label>
          </div>
          
          {/* 개별 체크박스 */}
          <div className="join-each-chaeck-box">
            <div className="checkbox-each-group">
              <input
                type="checkbox"
                value="true"
                id="check1"
                checked={eachChecked.check1}
                onChange={handleEachCheckChange}
                // onClick={(e)=> { aaa(e) }}                
              />
              <label className="join-each-label" htmlFor="check1">
                <span className="checkbox-icon"><i className="fas fa-check fa-sm"></i></span>
                <span className="join-each-check-label">(필수) 이용약관 동의</span>
              </label>
            </div>

            <div className="checkbox-each-group">
              <input
                type="checkbox"
                value="true"
                id="check2"
                checked={eachChecked.check2}
                onChange={handleEachCheckChange}
              />
              <label className="join-each-label" htmlFor="check2">
                <span className="checkbox-icon"><i className="fas fa-check fa-sm"></i></span>
                <span className="join-each-check-label">(필수) 개인정보 수집 및 이용 동의</span>
              </label>
            </div>
            
            <div className="checkbox-each-group">
              <input
                type="checkbox"
                value="true"
                id="check3"
                checked={eachChecked.check3}
                onChange={handleEachCheckChange}
              />
              <label className="join-each-label" htmlFor="check3">
                <span className="checkbox-icon"><i className="fas fa-check fa-sm"></i></span>
                <span className="join-each-check-label">(필수) 14세 이상입니다</span>
              </label>
            </div>
          </div>

        </div>





        {/* 회원가입 버튼 ↓ 얘만 기능하게 함*/}
        {/* ① className에 disabled 붙느냐에 따라 스타일 조정 */}
        {/* ② disabled는 Allchecked(값입력, 전체동의 여부) 상태에 따라 변경됨 */}
        <button className={`join-button ${joinAllTrue ? '': 'disabled'}`} 
                disabled={!joinAllTrue}
                onClick={joinButtonClick}>회원가입</button>
        

        <button className='join-kakao'>
          <img src="https://assets.cdn.soomgo.com/icons/icon-login-kakaotalk-btn.svg" alt="카카오 로그인" />
          <span>카카오로 회원가입</span>
        </button>

        <button className='join-naver'>
          <img src="https://assets.cdn.soomgo.com/icons/icon-login-naver-btn.svg"/>
          <span> 네이버로 회원가입</span>
        </button>

        <button className='join-mentor'>멘토로 가입하시나요?</button>

      </div>

    </div>
  );
}

export default Join;

