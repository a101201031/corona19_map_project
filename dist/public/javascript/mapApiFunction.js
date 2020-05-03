// type : map - Object, location - Object
/* 
location = { 
  latitude : number,
  longitude : number,
}
*/
function moveMap(map, location) {
  const targetLocation = new kakao.maps.LatLng(location.latitude, location.longitude);
  map.setCenter(targetLocation);
}

// type : map - Object, level - number (1~13)
function setLevelMap(map, level) {
  map.setLevel(level);
}
