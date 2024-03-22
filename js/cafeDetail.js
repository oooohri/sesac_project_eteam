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
