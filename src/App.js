import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Home_part/Header';
import Footer from './Home_part/Footer';
import Main from './Home_part/Main';
import Join from './Home_component/Join';
import Login from './Home_component/Login';
import Moim from './Moim_component/Moim';
import { useEffect, useState } from 'react';
import { moimContent } from './content_list/moim-content';
import Sorry from './Sorry/Sorry';
import MoimDetail from './Moim_component/MoimDetail';


// 로그인 기능 구현할때 사용예정
// const [state, setState] = useState({
//   id : '',
//   pw : '',
//   name :'',
//   소모임 : []

// });


function App() {
  
  const [moimContentText, setMoimContentText] = useState(moimContent);  // 소모임 컨텐츠 state
  const [imsiName, setImsiName] = useState('');
  const [userInfo, setUserInfo] = useState([]); // 유저 정보 받을 state
  const [isLogin, setIsLogin]  = useState(false);  // 로그인 상태 기본값은 false임
  

  // ⭐ 업데이트(마운트?)될 때 로컬스토리지에 있는 값을 userInfo에 저장
  useEffect(() => {
    const storage_UserInfo = localStorage.getItem('회원정보');  // 임시 저장 변수에 로컬스토리지 정보 받아옴
    if (storage_UserInfo) { // 임시 저장 변수에 받아온 값이 있을때만 작동 (저장된게 없으면 작동 X)
      setUserInfo(JSON.parse(storage_UserInfo));  // 임시 저장 변수에 값이 있으면 해당 값을 userInfo에 옮김
    }
  }, []); 
  
  
  
  console.log(userInfo);

  return (
    <div className="App">
      <Header imsiName = {imsiName} /* 헤더에 이름띄워주기위함 */
              isLogin = {isLogin}
              setIsLogin = {setIsLogin}/> {/* 로그인 값 바꿔줘야함 */}


      <Routes>
        {/*💛 페이지 세팅 */}
        <Route path ='/'element={<Main />}/> 
        <Route path = '/login' element={<Login userInfo = {userInfo} 
                                               setIsLogin = {setIsLogin}
                                               setImsiName = {setImsiName}/>}/>
        <Route path = '/join' element={<Join userInfo = {userInfo}  /* 로컬스토리지에 받아둔 유저정보 보내기 (유저정보를 계속 추가하기 위함)*/
                                              setUserInfo = { setUserInfo}
                                             setImsiName = {setImsiName} /* 회원가입 시 임시로 받아둘 이름 set */
                                             setIsLogin = {setIsLogin}  /* 회원 가입 후 로그인 상태 변경 */ 
                                             />}/> 
        <Route path = '/moim' element={<Moim moimContentText = {moimContentText}/>}/>
        <Route path = '/moim/detail/:id' element={<MoimDetail moimContentText = {moimContentText}/>}/>
        <Route path = '/sorry' element={<Sorry/>}/>

        {/* 💛 예외 페이지 세팅
        '*' 는 위에 세팅해둔 페이지 이외에 모든 url 세팅 */}
        <Route path='*' element={<div style={{height: '400px', display: 'flex', alignItems: 'center', fontSize: '20px'}}>Page not found</div>} />
      </Routes>




      <Footer />
    </div>
  );
}

export default App;


