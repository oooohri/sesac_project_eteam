const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const sign_in_btn2 = document.querySelector('#sign-in-btn2');
const idIput = document.querySelector('#idField input');
console.log(idIput);

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});
sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

const users = [
  {
    id: 'admin',
    password: '123',
  },
];

// redirectToMyPage();

document.getElementById('signIn').addEventListener('click', myFunction);
function myFunction() {
  let id = idIput.value;
  let password = document.querySelector('#passwordField input').value;
  let myPage = 'mypage.html';
  console.log(myPage);
  fetch(myPage)
    .then((response) => response.text())
    .then((html) => {
      let parser = new DOMParser();
      let myPageDOM = parser.parseFromString(html, 'text/html');
      let idElement = myPageDOM.getElementById('div#output1');
      // output1.innerHTML = id.value;
      // console.log(output1);
    })
    .catch((error) => {
      console.error('Error ', error);
    });

  if (id === 'admin' && password === '123') {
    Swal.fire({
      title: '로그인 되었습니다!',
      icon: 'success',
    });
  } else {
    alert('아이디나 비밀번호를 확인하세요!');
  }

  //   if (id === 'admin' && password === '123') {
  //   Swal.fire({
  //     title: '로그인 되었습니다!',
  //     icon: 'success',
  //   });
  //   window.location.assign('/sesac_project_eteam/html/mypage.html');
  // } else {
  //   alert('아이디나 비밀번호를 확인하세요!');
  // }
}

function checkNum(event) {
  var key = event.key;
  console.log(key);
  if (key.trim() == !'' || key.includes(' ')) {
    alert('잘 못 입력했습니다');
  }
  if (event.target.value === ' ') {
    idIput.value = '';
  }
}
// // 맨 앞과 뒤의 공백을 제거한 후 빈 값인지 확인
// if (id.trim() === '') {
//   return false; // 빈 값인 경우
// } else {
//   id.preventDefault;
// }

// // 공백이 포함되어 있는지 확인
// if (id.includes(' ')) {
//   return false; // 공백이 포함된 경우
// }

// // 영어와 숫자 두 가지 타입이 모두 포함되었는지 확인
// let hasLetter = /[a-zA-Z]/.test(id); // 영어 확인
// let hasNumber = /\d/.test(id); // 숫자 확인
// if (!(hasLetter && hasNumber)) {
//   return false; // 영어와 숫자 두 가지 타입 중 하나라도 포함되지 않은 경우
// }

// // 한글이 포함되어 있는지 확인
// let hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(id);
// if (hasKorean) {
//   return false; // 한글이 포함된 경우
// }

// return true; // 모든 조건을 통과한 경우 유효한 아이디
// }
