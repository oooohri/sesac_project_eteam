const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
const inputName1 = document.getElementById('name1');

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
      console.log(JSON.parse(localStorage.getItem('userProfile')).userName);
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

const form = document.getElementById('myForm'),
  imgInput = document.querySelector('.img'),
  file = document.getElementById('imgInput'),
  userName = document.getElementById('name'),
  email = document.getElementById('email'),
  phone = document.getElementById('phonenumber'),
  sDate = document.getElementById('sDate'),
  sLocation = document.getElementById('slocation'),
  submitBtn = document.querySelector('.submit'),
  userInfo = document.getElementById('readData'),
  modal = document.getElementById('userForm'),
  modalTitle = document.querySelector('#userForm .modal-title'),
  newUserBtn = document.querySelector('.newUser');

let getData = localStorage.getItem('userProfile')
  ? JSON.parse(localStorage.getItem('userProfile'))
  : [];

// let isEdit = false,
//   editId;
// showInfo();

const button = document.querySelector('button');

function setInputValue() {
  const input = document.getElementById('name1');
}
submitBtn.addEventListener('click', () => {
  // submitBtn.innerText = '저장';
  // modalTitle.innerText = 'Fill the Form';
  console.log(userName.value);
  isEdit = false;
  imgInput.src = 'Profile Icon.webp';
  localStorage.setItem(
    'userProfile',
    JSON.stringify({ userName: userName.value })
  );
  console.log(localStorage.getItem('userProfile'));
  form.reset();
});

file.onchange = function () {
  if (file.files[0].size < 1000000) {
    // 1MB = 1000000
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      imgUrl = e.target.result;
      imgInput.src = imgUrl;
    };

    fileReader.readAsDataURL(file.files[0]);
  } else {
    alert('This file is too large!');
  }
};

function readInfo(pic, name, age, city, email, phone, post, sDate) {
  (document.querySelector('.showImg').src = pic),
    (document.querySelector('#showName').value = userNameData),
    (document.querySelector('#showAge').value = age),
    (document.querySelector('#showCity').value = city),
    (document.querySelector('#showEmail').value = email),
    (document.querySelector('#showPhone').value = phone),
    (document.querySelector('#showPost').value = post),
    (document.querySelector('#showsDate').value = sDate);
}

function editInfo(index, pic, name, Age, City, Email, Phone, Post, Sdate) {
  isEdit = true;
  editId = index;
  imgInput.src = pic;
  userName.value = name;
  age.value = Age;
  city.value = City;
  (email.value = Email),
    (phone.value = Phone),
    (post.value = Post),
    (sDate.value = Sdate);

  submitBtn.innerText = 'Update';
  modalTitle.innerText = 'Update The Form';
}

function deleteInfo(index) {
  if (confirm('Are you sure want to delete?')) {
    getData.splice(index, 1);
    localStorage.setItem('userProfile', JSON.stringify(getData));
    showInfo();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const information = {
    picture:
      imgInput.src == undefined ? './image/Profile Icon.webp' : imgInput.src,
    employeeName: userName.value,
    employeeAge: age.value,
    employeeCity: city.value,
    employeeEmail: email.value,
    employeePhone: phone.value,
    employeePost: post.value,
    startDate: sDate.value,
  };

  if (!isEdit) {
    getData.push(information);
  } else {
    isEdit = false;
    getData[editId] = information;
  }

  localStorage.setItem('userProfile', JSON.stringify(getData));

  submitBtn.innerText = 'Submit';
  modalTitle.innerHTML = 'Fill The Form';

  showInfo();

  form.reset();

  imgInput.src = './image/Profile Icon.webp';

  // modal.style.display = "none"
  // document.querySelector(".modal-backdrop").remove()
});
