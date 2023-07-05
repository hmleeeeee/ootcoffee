function initialize() {
  //표시할 주소의 좌표값 : 구글 지도에서 구해옴    
  var myLatlng = new google.maps.LatLng(37.499564,127.0263763,17);
  
  var myOptions = {
   zoom: 15, //구글 지도에서 보여줌 줌확대 비율 - 1이 전세계 다보임
   center: myLatlng
  };
  var map = new google.maps.Map(document.getElementById("map"), myOptions); //id명이 html에서 지도를 받아들이 태그의 아이디명

  var image = 'map.png'; //마커이미지 경로 추가 - 삭제시 구글 기본제공값 들어감
    
    
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:'원오브뎀',
   icon:'map.png' //마커 변환시 키추가 - 삭제시 구글 기본제공값 들어감
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content:'원오브뎀 강남점'
   //마커위에 보여줄 말풍선
  });
 
  infowindow.open(map,marker);
}
 
window.onload=function(){
  initialize();
} 

