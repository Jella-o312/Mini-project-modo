import './Join-Login.css';
import React, { useState, useEffect } from 'react';

const Join = () => {

  const [isAllChecked, setAllChecked] = useState(false);
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
    const newAllChecked = !isAllChecked;
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


  const [joinInfo, setJoinInfo] = useState(
    {
      name : '',
      id : '',
      password : ''
    });

  const [ck,setCk] = useState('');

  function aaa(e) {
    alert(e.target.checked);
  }
  console.log(joinInfo.name , joinInfo.id, joinInfo.password);
  console.log('클릭', ck);

  return (

    <div className="join-container">

      <h3 className="join-title">모도에 온것을 환영해요!</h3>
      
      <div className="join-box">
        <div className="join-box-inner">
          <span className='join-box-inner-title'>이름</span>
          <input id='join-name-txt' type="text" placeholder="이름(실명)을 입력해주세요" 
            onChange={(e)=> {
              setJoinInfo({...joinInfo, name : e.target.value})}}/> {/* 글자가 바뀔때마다 joinInfo 스테이트에 name값 갱신 */}
        </div>

        <div className="join-box-inner">
          <span className='join-box-inner-title'>아이디</span>
          <input id='join-id-txt' type="text" placeholder="영문 혹은 영문+숫자 조합 6자 이상 입력해주세요"
            onChange={(e)=> {
            setJoinInfo({...joinInfo, id : e.target.value})}}/> {/*  id값 갱신 */}
        </div>
        
        <div className="join-box-inner">
          <span className='join-box-inner-title'>비밀번호</span>
          <input id='join-pass-txt' type="password" placeholder="영문+숫자 조합 8자 이상 입력해주세요"
            onChange={(e)=> {
              setJoinInfo({...joinInfo, password : e.target.value})}}/> {/*  pass값 갱신 */}
        </div>
        

        {/* 체크박스 컨테이너*/}
        <div className="join-check-container">
         
          {/* 전체 체크박스 */}
          <div className="join-all-chaeck-box">
            <input
              type="checkbox"
              value="true"
              id="join-allCheck"
              checked={isAllChecked}
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
                onClick={(e)=> { aaa(e) }}                
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
        <button className='join-button'>회원가입</button>
        
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

