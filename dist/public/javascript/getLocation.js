const defaultLocation = {
  latitude: 37.44091,
  longitude: 126.99101,
};
function getLocation() {
  return new Promise((resolve, reject) => {
    const location = {};
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        location.latitude = position.coords.latitude;
        location.longitude = position.coords.longitude;
        console.log('resolve');
        resolve(location);
      });
    } else {
      reject();
      console.log('reject');
    }
  });
}
