import logo from './logo.svg';
import './App.css';
import Header from './page/Header';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header2 from './page/Header2';


function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Header2 />



      {/* 여기에 main */}
      <Routes>
        <Route path='/'/>

      </Routes>
    </div>
  );
}

export default App;
