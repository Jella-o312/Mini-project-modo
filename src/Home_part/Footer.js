import './Footer.css';

const Footer = () =>{
  return(
    <div className="footer-container">
      <div className='footer-box'>
        <div className='footer-info'>
          <div className='footer-info-text'>
            <div className='footer-info-text-inner1'>1599-7855</div>
            <div className='footer-info-text-inner2'>평일 10:00 - 18:00<br/>(점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</div>
          </div>
          <div className='footer-info-app'>
            <div className='footer-info-app-inner'><i class="fa-brands fa-apple fa-xl" />&nbsp; App store</div>
            <div className='footer-info-app-inner'><i class="fa-solid fa-play fa-lg" />&nbsp; Goole play</div>
          </div>
        </div>
        
        <div className='footer-nav'>

          <ul className='footer-nav-inner'>
            <li id='footer-nav-title'>About us</li>
            <li>회사 소개</li>
            <li>채용 안내</li>
            <li>엔터프라이즈</li>
          </ul>

          <ul className='footer-nav-inner'>
            <li id='footer-nav-title'>소모임안내</li>
            <li>서비스 안내</li>
            <li>방장 가이드</li>
            <li>참가자 가이드</li>
            <li>공유공간 가이드</li>
          </ul>

          <ul className='footer-nav-inner'>
            <li id='footer-nav-title'>멘토링안내</li>
            <li>서비스 안내</li>
            <li>멘티 가이드</li>
            <li>멘토 가이드</li>
            <li>멘토 등록</li>
          </ul>

          <ul className='footer-nav-inner'>
            <li id='footer-nav-title'>고객센터</li>
            <li>공지사항</li>
            <li>자주묻는 질문</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>

      </div>

      <div className='ect-info'>
        <span>(주)모도 ┃ 서울특별시 강서구 화곡로 149 3층 ┃ 대표: 최예원 ┃ 개인정보관리 책임자: Jella ┃ 사업자등록번호 : 123-12-12345 ┃ 고객센터 : 1599-7855 ┃ 이메일 : dpdnjs0312@gamil.com</span>
        <span></span>
        <div>Copyright ©2023 Modo Inc. All Rights Reserved.</div>
      </div>
      
    </div>
  )
}

export default Footer;

