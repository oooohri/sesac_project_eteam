// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 서울시청 좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(map);

// 카테고리로 카페를 검색합니다
ps.categorySearch('CE7', placesSearchCB, { useMapBounds: true });

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    for (var i = 0; i < data.length; i++) {
      displayMarker(data[i]);
      //   console.log(data);
    }
  }
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
  // 마커를 생성하고 지도에 표시합니다
  var marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(place.y, place.x),
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, 'mouseover', function () {
    // 마커에 마우스를 올리면 장소명이 인포윈도우에 표출됩니다
    infowindow.setContent(
      '<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>'
    );
    infowindow.open(map, marker);
  });

  // 마커에 마우스 아웃 이벤트를 등록하여 인포윈도우를 닫습니다
  kakao.maps.event.addListener(marker, 'mouseout', function () {
    infowindow.close();
  });

  // 마커를 클릭하면 상세 페이지로 이동합니다
  kakao.maps.event.addListener(marker, 'click', function () {
    window.location.href =
      'http://localhost:5500/html/cafeDetail.html?place_id=' + place.id;
  });
}
