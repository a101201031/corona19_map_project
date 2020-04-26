function getLocation() {
  return new Promise((resolve, reject) => {
    const location = {};
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        location.latitude = position.coords.latitude;
        location.longitude = position.coords.longitude;
        resolve(location);
      });
    } else {
      alert('위치 정보를 사용할 수 없어 기본 위치로 지정됩니다.');
      location.latitude = 37.55091;
      location.longitude = 126.99101;
      reject(location);
    }
  });
}
