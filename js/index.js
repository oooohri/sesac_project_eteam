// https://www.daleseo.com/google-maps-api/

// window.initMap = function () {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 37.5400456, lng: 126.9921017 },
//       zoom: 10,
//     });

//     // 마커되어 표현 
//     const malls = [
//         { label: "C", name: "코엑스몰", lat: 37.5115557, lng: 127.0595261 },
//         { label: "G", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
//         { label: "D", name: "동대문시장", lat: 37.566596, lng: 127.007702 },
//         { label: "I", name: "IFC몰", lat: 37.5251644, lng: 126.9255491 },
//         { label: "L", name: "롯데월드타워몰", lat: 37.5125585, lng: 127.1025353 },
//         { label: "M", name: "명동지하상가", lat: 37.563692, lng: 126.9822107 },
//         { label: "T", name: "타임스퀘어", lat: 37.5173108, lng: 126.9033793 },
//       ];

//       const bounds = new google.maps.LatLngBounds();
//       const infowindow = new google.maps.InfoWindow();

//       malls.forEach(({ label, name, lat, lng }) => {
//         const marker = new google.maps.Marker({
//           position: { lat, lng },
//           label,
//           map,
//         });
//         bounds.extend(marker.position);

//         marker.addListener("click", () => {
//             infowindow.setContent(name);
//             infowindow.open({
//               anchor: marker,
//               map,
//             });
//           });
//       });
//       map.fitBounds(bounds);
//   };


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.866, lng: 151.196 },
      zoom: 15,
    });
    const request = {
      placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      fields: ["name", "formatted_address", "place_id", "geometry"],
    };
    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);
  
    service.getDetails(request, (place, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
        });
  
        google.maps.event.addListener(marker, "click", () => {
          const content = document.createElement("div");
          const nameElement = document.createElement("h2");
  
          nameElement.textContent = place.name;
          content.appendChild(nameElement);
  
          const placeIdElement = document.createElement("p");
  
          placeIdElement.textContent = place.place_id;
          content.appendChild(placeIdElement);
  
          const placeAddressElement = document.createElement("p");
  
          placeAddressElement.textContent = place.formatted_address;
          content.appendChild(placeAddressElement);
          infowindow.setContent(content);
          infowindow.open(map, marker);
        });
      }
    });
  }
  
  window.initMap = initMap;