// * 지도 클릭 시, 카페 정보 가져와서 뿌리기
// 쿼리스트링 값 뽑아내기
let queryString = window.location.search;
// URLSearchParams 객체를 생성하여 쿼리스트링을 파싱함
let params = new URLSearchParams(queryString);

// 특정 파라미터의 값을 가져옴
let place_id = params.get('place_id');

// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 서울시청 좌표
    level: 7, // 지도의 확대 레벨
  };

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(map);

// 카테고리로 카페를 검색합니다
ps.categorySearch('CE7', placesSearchCB, { useMapBounds: true });

const datas = [];

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
  console.log(data.length);
  if (status === kakao.maps.services.Status.OK) {
    for (var i = 0; i < data.length; i++) {
      datas.push(data[i]);

      if (data[i].id === place_id) {
        console.log(data[i]);

        // 받아온 데이터로 화면에 표시
        displayPlaceDetails(data[i]);
      }
    }
  }
}

// console.log(datas);

// * 장소 상세정보
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

// * 리뷰 작성하기
document.addEventListener('DOMContentLoaded', function () {
  const reviewForm = document.getElementById('reviewForm');
  const userIdInput = document.getElementById('userId');
  const submitButton = document.getElementById('btn_write');

  // 리뷰 작성 폼 제출 시 이벤트 핸들러
  reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // 사용자가 입력한 사용자 ID
    const userId = 'user123';

    // 사용자가 입력한 리뷰 데이터
    const reviews = [];
    const tagGroups = document.querySelectorAll('.form-group-review');
    tagGroups.forEach((tagGroup) => {
      const tag = tagGroup.querySelector('.tag').textContent;
      const rating = tagGroup.querySelector(
        'input[name="star-rating"]:checked'
      ).value;
      const content = tagGroup.querySelector('.form-group-content').value;
      reviews.push({ tag, rating, content });
    });

    // 패치를 통해 API에 데이터 전송 및 업데이트
    updateReviews(userId, reviews);
  });

  // 리뷰 업데이트 버튼 클릭 시 이벤트 핸들러
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    // 사용자가 입력한 사용자 ID
    const userId = 'user123';

    // 사용자가 입력한 리뷰 데이터
    const reviews = [];
    const tagGroups = document.querySelectorAll('.form-group-review');
    tagGroups.forEach((tagGroup) => {
      const tag = tagGroup.querySelector('.tag').textContent;
      const rating = tagGroup.querySelector(
        'input[name="star-rating"]:checked'
      ).value;
      const content = tagGroup.querySelector('.form-group-content').value;
      reviews.push({ tag, rating, content });
    });

    // 패치를 통해 API에 데이터 전송 및 업데이트
    updateReviews(userId, reviews);
  });

  const data = {
    userID: 'aaaa',
    review: '이 카페 카공하기 좋아요',
    tag: ['mode'],
  }[('분위기 졸아요', '카공하기 적합해요.')];

  // 사용자가 작성한 리뷰 데이터를 패치하여 API에 전송하여 업데이트
  function updateReviews(userId, reviews) {
    const apiUrl = 'https://crudcrud.com/api/f02afa24be314ba0b8e3216b889a5edc';
    const fetchOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, reviews }),
    };

    fetch(apiUrl, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Updated reviews:', data);
        // 성공적으로 업데이트된 후에 실행할 코드 작성
        // 리뷰 html 을 브라우저에 추가하는 로직
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
});
