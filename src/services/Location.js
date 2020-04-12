import showToast from '../services/Toast';

let getLocation = () =>
{
    return new Promise((resolve, reject) =>
    {
        if (navigator.geolocation) {
     
            navigator.geolocation.getCurrentPosition((postions) => {
              console.log(postions);
              resolve([postions.coords.latitude, postions.coords.longitude])
            },
              (error) => {
                console.error(error);
                switch (error.code) {
                  case error.PERMISSION_DENIED:
                    showToast("User denied the request for Geolocation (from browser)")
                    break;
                  case error.POSITION_UNAVAILABLE:
                    showToast("Location information is unavailable");
                    break;
                  case error.TIMEOUT:
                    showToast("The request to get user location timed out");
                    break;
                  case error.UNKNOWN_ERROR:
                    showToast("An unknown error occurred. Please enable and allow location from browser");
                    break;
                }
                resolve(false)
              }
            )
          } else {
            alert("Geolocation is not supported by this browser.");
            resolve(false)
          }
    })
}
export default getLocation;