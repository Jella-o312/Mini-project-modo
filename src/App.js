import './App.css';
import Header from './page/Header';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './component/Main';



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/> 
      {/* 배너 이미지 넣기 */}



      {/* 여기에 main */}
      <Routes>
        <Route path='/'/>

      </Routes>
    </div>
  );
}

export default App;
