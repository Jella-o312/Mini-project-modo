import './Header.css';
import logo from '../modo_logo.png';

const Header2 = () =>{
  return(
    <div className='nav Header2'>
      {/* <div><img src={logo} /></div> */}
      <div className='logo' style={{backgroundImage: 'url(' + logo + ')'}}></div>
      <a href="#">소모임</a>
      <a href="#">멘토링</a>
      <a href="#">커뮤니티</a>
      <a href="#">FAQ</a>
      </div>
  )
}

export default Header2;