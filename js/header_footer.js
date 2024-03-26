document.querySelector('header').innerHTML = `<section id="sidebar">
<a href="#" class="brand">
  <i class="bx bxs-coffee"></i>w
  <span class="text">카페로</span>
</a>
<ul class="side-menu top">
  <li data-li="info" class="active">
    <a href="#">
      <i class="bx bxs-user"></i>
      <span class="text">내 정보 </span>
    </a>
  </li>
  <li data-li="post">
    <a href="#">
      <i class="bx bxs-pen"></i>
      <span class="text">내 글 올리기</span>
    </a>
  </li>
  <li data-li="table-data">
    <a href="#">
      <i class="bx bxs-doughnut-chart"></i>
      <span class="text">할 일 목록 </span>
    </a>
  </li>
</ul>
<ul class="side-menu">
  <li data-li="fix">
    <a href="#">
      <i class="bx bxs-cog"></i>
      <span class="text">내 정보 변경</span>
    </a>
  </li>
  <li>
    <a href="#" class="logout">
      <i class="bx bxs-log-out-circle"></i>
      <span class="text">로그아웃</span>
    </a>
  </li>
</ul>
</section>

<section id="content">
<nav>
  <i class="bx bx-menu"></i>
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
  <a href="#" class="notification">
    <i class="bx bxs-bell"></i>
    <span class="num">8</span>
  </a>
  <a href="#" class="profile">
    <img src="/img/people.png" />
  </a>
</nav>
</section>`;

document.querySelector('footer').innerHTML = `<div class="footer-container">
<div class="row">
    <!-- Notice , FAQ, Service center cols -->
    <div class="col-3 align-items-center ">
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

const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

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

document.querySelector('.info').style.display = 'block';
let li_elements = document.querySelectorAll('.side-menu li');
let item_elements = document.querySelectorAll('.item');
for (let i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener('click', function () {
    li_elements.forEach(function (li) {
      li.classList.remove('active');
    });
    this.classList.add('active');
    let li_value = this.getAttribute('data-li');
    item_elements.forEach(function (item) {
      item.style.display = 'none';
      console.log(li_value);
    });
    if (li_value == 'info') {
      document.querySelector('.' + li_value).style.display = 'block';
      inputName1.value = JSON.parse(
        localStorage.getItem('userProfile')
      ).userName;
    } else if (li_value == 'post') {
      document.querySelector('.' + li_value).style.display = 'block';
    } else if (li_value == 'table-data') {
      document.querySelector('.' + li_value).style.display = 'block';
    } else if (li_value == 'fix') {
      document.querySelector('.' + li_value).style.display = 'block';
    } else {
      console.log('boli');
    }
  });
}
