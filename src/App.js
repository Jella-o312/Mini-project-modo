import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Home_part/Main';
import Header from './Home_part/Header';
import Footer from './Home_part/Footer';




function App() {
  return (
    <div className="App">
      <Header/>
      <Main /> 



      {/* 여기에 main */}
      <Routes>
        <Route path='/'/>

      </Routes>


      <Footer />
    </div>
  );
}

export default App;
