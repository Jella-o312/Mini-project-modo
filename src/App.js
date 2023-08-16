import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Home_part/Header';
import Footer from './Home_part/Footer';
import Main from './Home_part/Main';
import Join from './Home_component/Join';
import Login from './Home_component/Login';
import Moim from './Moim_component/Moim';

// import { useState } from 'react';


// 로그인 기능 구현할때 사용예정
// const [state, setState] = useState({
//   id : '',
//   pw : '',
//   name :'',
//   소모임 : []

// });


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Main />  */}



      <Routes>
        {/*💛 페이지 세팅 */}
        <Route path ='/'element={<Main/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/join' element={<Join/>}/>
        <Route path = '/moim' element={<Moim/>}/>

        {/* 💛 예외 페이지 세팅
        '*' 는 위에 세팅해둔 페이지 이외에 모든 url 세팅 ex) www.fruit.com/lkjlkj   */}
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>




      <Footer />
    </div>
  );
}

export default App;


