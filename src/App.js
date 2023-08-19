import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Home_part/Header';
import Footer from './Home_part/Footer';
import Main from './Home_part/Main';
import Join from './Home_component/Join';
import Login from './Home_component/Login';
import Moim from './Moim_component/Moim';
import { useState } from 'react';
import { moimContent } from './content_list/moim-content';
import JoinAfter from './Home_component/JoinAfter';


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
  

  return (
    <div className="App">
      <Header imsiName = {imsiName} /* 헤더에 이름띄워주기위함 */
              isLogin = {isLogin}
              setIsLogin = {setIsLogin}/> {/* 로그인 값 바꿔줘야함 */}


      <Routes>
        {/*💛 페이지 세팅 */}
        <Route path ='/'element={<Main />}/> 
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/join' element={<Join setImsiName = {setImsiName} /* 회원가입 시 임시로 받아둘 이름 set */
                                             setIsLogin = {setIsLogin}/>}/> {/* 회원 가입 후 로그인 상태 변경 */} 
        <Route path = '/moim' element={<Moim moimContentText = {moimContentText}/>}/>
        {/* <Route path = '/join/welcome' element={<JoinAfter/>}/> */}

        {/* 💛 예외 페이지 세팅
        '*' 는 위에 세팅해둔 페이지 이외에 모든 url 세팅 ex) www.fruit.com/lkjlkj   */}
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>




      <Footer />
    </div>
  );
}

export default App;


