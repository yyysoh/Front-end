/* <div id="googleMap" class="col-sm-1" style="width: 600px; height:400px; position: absolute; left: 30%; top: 30%; "></div>  */ 

function myMap() {
    let mapProp = {
        center: new google.maps.LatLng(33.510553, 126.491350),
        zoom: 14,
    };
    let map = new google.maps.Map(document.getElementById('googleMap'), mapProp)
    // map.style.background = "gray;"


    let myPos1 = {lat: 33.510553, lng: 126.491350}; //위도 경도를 myPos1에 넣기
    let marker1 = new google.maps.Marker({position: myPos1});
    marker1.setMap(map);

    let infowindow = new google.maps.InfoWindow({
        content: "제주 공항",
    });
	infowindow.open(map, marker1);

}

// src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDrJAN-iVI5sK9v9WhsAQckUnK1J2GeCoE&callback=myMap" 