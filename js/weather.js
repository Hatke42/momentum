function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const url = `https://handle.hatke.workers.dev/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  console.log(url);
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/ ${data.main.temp}\u00B0C`;
    });
}

function failure() {
  console.log("You didn't allowed the location");
}

navigator.geolocation.getCurrentPosition(success, failure);
