// *-----------------------지도 클릭 시, 카페 정보 가져와서 뿌리기 *-----------------------
// 쿼리스트링 값 뽑아내기
let queryString = window.location.search;
// URLSearchParams 객체를 생성하여 쿼리스트링을 파싱함
let params = new URLSearchParams(queryString);

// 특정 파라미터의 값을 가져옴
let place_id = params.get('place_id');

localStorage.getItem('cafe_list');

const cafeList = JSON.parse(localStorage.getItem('cafe_list'));
console.log(cafeList);
const cafeInfo = cafeList.find((cafe) => {
  if (cafe.id === place_id) {
    return cafe;
  }
});
console.log(cafeInfo);
displayPlaceDetails(cafeInfo);

// *-----------------------장소 상세정보 *-----------------------
// 장소 상세 정보를 화면에 표시하는 함수
function displayPlaceDetails(place) {
  // 카페이름 표시
  document.getElementById('cafeName').textContent = `${place.place_name}`;
  // 주소 표시
  document.getElementById('cafeAdress').textContent = `${place.address_name}`;
  // 전화번호 표시
  document.getElementById('cafePhone').textContent = `${place.phone}`;
}
document.addEventListener('DOMContentLoaded', function () {
  const concentTagButton = document.querySelector('.tag.concent');
  const contentTextarea = document.querySelector('#content');

  // #콘센트 태그 버튼 클릭 시 내용 부분에 태그 추가
  concentTagButton.addEventListener('click', function () {
    const tagText = this.textContent; // 클릭된 버튼의 텍스트 가져오기
    const currentContent = contentTextarea.value; // 기존 내용 가져오기
    // 기존 내용에 선택된 태그 추가하여 업데이트
    contentTextarea.value = `${currentContent} ${tagText}`;
  });
});

// *----------------------- 리뷰 작성하기 *-----------------------
const reviewForm = document.getElementById('reviewForm');
const submitButton = document.getElementById('btn_write');

document.addEventListener('DOMContentLoaded', function () {
  submitButton.addEventListener('click', async function (event) {
    event.preventDefault(); // 기본 동작(폼 제출) 방지

    const userId = 'user123';
    const author = '오유리';
    const date = '2024.05.10';
    const reviews = [];

    // 각 리뷰 세트를 반복하여 처리
    document.querySelectorAll('.review-list').forEach((reviewSet) => {
      const tagInput = reviewSet.querySelector(
        'input[type="checkbox"]:checked'
      );
      const ratingInput = reviewSet.querySelector(
        'input[type="radio"]:checked'
      );
      const contentInput = reviewSet.querySelector('textarea');

      if (tagInput && ratingInput && contentInput) {
        const tag = tagInput.value;
        const rating = ratingInput.value; // 별점의 숫자 값
        const content = contentInput.value;

        reviews.push({ tag, rating, content });
      }
    });

    if (reviews.length === 0) {
      console.error('No reviews to submit');
      alert('태그선택 후 별점과 리뷰 내용 작성은 필수입니다!');
      return; // 리뷰가 없으면 종료
    }

    try {
      // 리뷰 추가
      await addReviews(userId, author, date, reviews);
      console.log('Reviews added successfully!');
      // 여기에 추가적인 성공 처리 로직을 구현할 수 있습니다.
      alert('리뷰 작성이 완료되었습니다!');

      // 리뷰 작성이 완료되면 폼을 초기화합니다.
      reviewForm.reset();
    } catch (error) {
      console.error('Error adding reviews:', error);
      // 여기에 실패 시 처리할 로직을 구현할 수 있습니다.
    }
  });
});

// api와 연결
async function addReviews(userId, author, date, reviews) {
  // CRUD CRUD 리소스 경로에 맞게 수정
  const url =
    'https://crudcrud.com/api/197fb17e4bbf4b2bb57019b6c37d372e/reviews';
  const data = {
    userId: userId,
    author: author,
    date: date,
    reviews: reviews,
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // 새 리소스 추가
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonResponse = await response.json();
    console.log('Success:', jsonResponse);
    // 성공 메시지 표시 또는 추가 로직
    fetchReviews();
  } catch (error) {
    console.error('Error:', error);
    // 실패 메시지 표시 또는 에러 로직
  }
}

// ************************** 리뷰상세
// 목데이터 화면에 표현하기
const reviewData = [
  {
    author: '홍길동',
    date: '2024.04.22',
    tags: ['#콘센트', '', '', '', '#직원 친절'],
    ratings: ['4', '', '', '', '5'],
    contents: [
      '콘센트가 자리마다 있긴 하지만 1개씩이라 아쉬워요.',
      '',
      '',
      '',
      '직원이 친절해요!',
    ],
  },
  {
    author: '이순신',
    date: '2024.04.21',
    tags: ['#콘센트', '', '#음악', '', ''],
    ratings: ['3', '', '3', '', ''],
    contents: ['콘센트 별로 없는듯', '', '음악이 시끄러움.', '', ''],
  },
  {
    author: '김유신',
    date: '2024.04.20',
    tags: ['', '', '', '#카공 분위기', ''],
    ratings: ['', '', '', '5', ''],
    contents: [
      '',
      '',
      '',
      '카공하는 사람들 위주의 카페라서 집중이 잘돼용!',
      '',
    ],
  },
  {
    author: '최지원',
    date: '2024.04.19',
    tags: ['#콘센트', '', '', '#카공 분위기', ''],
    ratings: ['2', '', '', '4', ''],
    contents: ['콘센트 부족!!!!!!', '', '', '카공 오래해도 뭐라 안합니당', ''],
  },
  {
    author: '신사임당',
    date: '2024.04.18',
    tags: ['#콘센트', '#카페공간', '#음악', '#카공 분위기', '#직원 친절'],
    ratings: ['4', '', '', '2', ''],
    contents: [
      '콘센트 각 자리마다 있는편.',
      '',
      '',
      '여기 카공족들 싫어함 ㅠ',
      '',
    ],
  },
  {
    author: '황진이',
    date: '2024.04.17',
    tags: ['#콘센트', '', '', '#카공 분위기', ''],
    ratings: ['3', '', '', '5', ''],
    contents: [
      '콘센트 그냥저냥 있어요',
      '',
      '',
      '카공 오래해도 뭐라 안합니당',
      '',
    ],
  },
];

// 필터링된 리뷰 데이터 배열
let filteredReviews = [];
const showReview = document.querySelector('.show-review');

// 리뷰 상세 정보 삽입 함수
function insertReview(reviewData, selectedTag) {
  // 별점을 HTML 형태로 변환하는 함수
  function getStarRatingHTML(rating) {
    let starHTML = '';
    // 별점에 따라 별 모양과 별빛을 문자열에 추가
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starHTML += '★'; // 별빛 추가
      } else {
        starHTML += '☆'; // 별 모양 추가
      }
    }
    return starHTML;
  }

  // 리뷰 상세 정보 삽입
  const reviewContent = `
  <div class="review-wrapper">

  <!-- 작성자 -->
  <span class="author-user">${reviewData.author}</span>
  <!-- 구분선 -->
  <span class="bg_bar"></span>
  <!-- 작성일 -->
  <span class="author-date">${reviewData.date}</span>

  <!-- 리뷰 상세 내용 컨테이너 -->
  <div class="review-content-container">
    <!-- 리뷰 상세 내용 -->
    <div class="review-contentDetail">
    <!-- 별점 및 내용 -->
    ${
      // 선택된 태그와 일치하는 리뷰 정보만 출력
      reviewData.tags.includes(selectedTag)
        ? `
          <div class="star-rating">
            ${getStarRatingHTML(
              reviewData.ratings[reviewData.tags.indexOf(selectedTag)]
            )}
          </div>
          <div class="review-content">${
            reviewData.contents[reviewData.tags.indexOf(selectedTag)]
          }</div>
        `
        : ''
    }
    </div>
  </div>
  <hr />
`;

  // 리뷰 상세 정보 삽입
  showReview.innerHTML += reviewContent;
}

// 태그 클릭 이벤트 핸들러 등록
const tagButtons = document.querySelectorAll('.tag');
tagButtons.forEach((tagButton) => {
  tagButton.addEventListener('click', (e) => {
    const selectedTag = e.target.textContent.trim(); // 선택된 태그 텍스트 추출 후 공백 제거
    filterReviews(selectedTag); // 해당 태그와 일치하는 리뷰 필터링
    console.log(selectedTag); // #콘센트
  });
});

// 리뷰 필터링 함수
function filterReviews(tag) {
  // 필터링된 리뷰 데이터 초기화
  filteredReviews.length = 0;
  filteredReviews = [];

  // 모든 리뷰 데이터 확인
  reviewData.forEach((review) => {
    console.log(review);
    // 선택된 태그와 일치하는 리뷰인 경우
    const tagIndex = review.tags.indexOf(tag);
    console.log(review.tags.includes(tag)); // true,false
    if (
      tagIndex !== -1 &&
      review.tags.includes(tag) &&
      review.ratings[tagIndex] &&
      review.contents[tagIndex]
    ) {
      // 해당 태그의 별점과 내용이 모두 존재하는지 확인
      // if (review.ratings[tagIndex] && review.contents[tagIndex]) {
      // 필터링된 리뷰 데이터에 추가
      filteredReviews.push(review);
      // }
    }
  });

  showReview.innerHTML = '';
  if (filteredReviews.length === 0) {
    // 필터링된 리뷰가 없을 때
    showReview.innerHTML = '<hr/><p>리뷰가 존재하지 않습니다.</p>';
  } else {
    // 필터링된 리뷰가 있을 때
    filteredReviews.forEach((review) => {
      insertReview(review, tag); // 선택된 태그 전달
    });
  }
}
// // *---------------------- 리뷰 작성 후 리뷰상세 화면에 표시 ----------------------------------

// // API로부터 리뷰 데이터 가져오기
// async function fetchReviews() {
//   const apiUrl =
//     'https://crudcrud.com/api/d57d36fbc5b84c3ca6a793293ad761e1/reviews'; // 실제 요청할 API의 URL로 변경해주세요.

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       // 서버로부터의 응답이 성공적이지 않을 경우 에러 처리
//       throw new Error('Network response was not ok');
//     }

//     // 응답 데이터(JSON)를 자바스크립트 객체로 변환
//     const data = await response.json();

//     // 데이터 처리 로직 (예: 화면에 표시)
//     console.log(data);
//     // 이후 데이터를 활용한 로직을 추가합니다. 예를 들어, 화면에 리뷰를 표시하는 등
//     return data; // 필요한 경우 데이터를 반환
//   } catch (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//   }
// }
// // 페이지 로드 시 리뷰 데이터 가져와서 리뷰 상세에 표시
// document.addEventListener('DOMContentLoaded', function () {
//   fetchReviews();
// });
