  // Function to get the current location using the Geolocation API
  const getLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const updateLocationElement = (message) => {
    document.getElementById("location").innerHTML = message;
  };

  let currentPosition = null;
  let locationData = null;

  // Call the getLocation function and handle the promise
  getLocation()
    .then(position => {
      currentPosition = position;
      const { latitude, longitude } = position.coords;
      return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    })
    .then(response => response.json())
    .then(data => {
      locationData = data;
      updateLocationElement("Location data fetched. Click a button to display.");
    })
    .catch(error => {
      updateLocationElement(typeof error === 'string' ? error : 'Error fetching location data');
      console.error(error);
    });

  document.getElementById("showAddress").addEventListener("click", () => {
    if (locationData) {
           const { city, principalSubdivision: state, countryName: country } = locationData;
      updateLocationElement(`City: ${city}, State: ${state}, Country: ${country}`);
    }
  });

  document.getElementById("showCoordinates").addEventListener("click", () => {
    if (currentPosition) {
      const { latitude, longitude } = currentPosition.coords;
      updateLocationElement(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }
  });
