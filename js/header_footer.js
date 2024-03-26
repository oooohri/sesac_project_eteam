document.querySelector('header').innerHTML = `<section id="sidebar">
  <a href="../html/main.html" class="brand">
    <i class="bx bxs-coffee"></i>
    <span class="text">카페로</span>
  </a>
  <ul class="side-menu main">
  
    <li data-li="info" class="active">
      <a href="../html/map.html">
        <svg class="bx bxs-map" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
        </svg>
        <span class="text">지도에서 카페찾기 </span>
      </a>
    </li>

    <li data-li="table-data">
      <a href="../html/mypage.html">
      <svg class="bx bxs-mypage" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
        <span class="text">마이페이지</span>
      </a>
    </li>



    <li data-li="post">
    <a href="#">
    <svg class="bx bxs-map" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    </svg>
      <span class="text">카페 인터뷰</span>
    </a>
  </li>

  <li data-li="table-data">
    <a href="#">
    <svg class="bx bxs-question" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-lg" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"/>
    </svg>
      <span class="text">Q&A</span>
    </a>
  </li>

  <li data-li="table-data">
    <a href="../html/make_adv.html">
    <svg class="bx bxs-adv" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-raised-hand" viewBox="0 0 16 16">
      <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"/>
      <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
    </svg>
      <span class="text">혹시 사장님이세요?</span>
    </a>
  </li>

  </ul>

  
  <ul class="side-menu">

    <li>
      <a href="../html/login.html" class="logout">
      <svg class="bx bxs-login" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
      </svg>
        <span class="text">로그인</span>
      </a>
    </li>
  </ul>
  </section>

  <section id="content">
  <nav>
    <svg class="bx bx-menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
    <a href="#" class="nav-link"></a>
    <form action="#">
      <div class="form-input">
        <input type="search" placeholder="Search..." />
        <button type="submit" class="search-btn">
          <i class="bx bx-search"></i>
        </button>
      </div>
    </form>
    <input type="checkbox" id="switch-mode" hidden />
    <label for="switch-mode" class="switch-mode"></label>


  </nav>
  </section>`;

document.querySelector('footer').innerHTML = `
  <div class="footer-container">
  <div class="row">
      <!-- Notice , FAQ, Service center cols -->
      <div class="col-3 align-items-center">
          <div class="row p-2 text-start">
                  <a class="no-decoration underline-hover" href="#">공지사항</a>
          </div>
          <div class="row p-2 text-start">
                  <a class="no-decoration underline-hover" href="#">자주 묻는 질문</a>
          </div>
          <div class="row p-2 text-start">
                  <a class="no-decoration underline-hover" href="#">고객센터</a>
          </div>
      </div>
      <!-- Service center, privacy cols-->
      <div class="col-3">
          <div class="row p-2 text-start">
                  <a class="no-decoration underline-hover" href="/html/term.html">서비스 이용약관</a>
          </div>
          <div class="row p-2 text-start">
                  <a class="no-decoration underline-hover" href="/html/privacy.html">개인정보처리발침</a>
          </div>
      </div>
      <div class="col-4">
            <a href="https://www.facebook.com/" target="_blank" class="axo bkw"><img src="/img/logo_facebook.svg"/></a>
            <a href="https://www.instagram.com/" target="_blank" class="axo bkw"><img src="/img/logo_insta.svg"/></a>                       
            <a href="https://www.google.com/" target="_blank" class="axo bkw"><img src="/img/logo_gmail.svg"/></a>
            <a href="https://www.naver.com/" target="_blank" class="axo bkw"><img src="/img/logo_naver.svg"/></a>
      </div>
  </div>
  <hr aria-hidden="true" class="sb-rule mt-4" />
  <div class="border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
      <p class="text-xs leading-5 text-white">&copy; 2024 Cafero, Inc. All rights reserved.</p>
  </div>
  </div>`;

const allSideMenu = document.querySelectorAll('#sidebar .side-menu li a');

// 사이드메뉴
allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener('click', function () {
    allSideMenu.forEach((i) => {
      i.parentElement.classList.remove('active');
    });
    li.classList.add('active');
  });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
  sidebar.classList.toggle('hide');
});

const searchButton = document.querySelector(
  '#content nav form .form-input button'
);
const searchButtonIcon = document.querySelector(
  '#content nav form .form-input button .bx'
);
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle('show');
    if (searchForm.classList.contains('show')) {
      searchButtonIcon.classList.replace('bx-search', 'bx-x');
    } else {
      searchButtonIcon.classList.replace('bx-x', 'bx-search');
    }
  }
});

if (window.innerWidth < 768) {
  sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
  searchButtonIcon.classList.replace('bx-x', 'bx-search');
  searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
  if (this.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
  }
});

const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
