function updateweatherdata(response) {
  let tempelement = document.querySelector("#temp");
  let Temperature = response.data.main.temp;
  tempelement.innerHTML = Math.round(Temperature);

  let cityelement = document.querySelector("#city");
  cityelement.innerHTML = response.data.name;
}

function searchcity(city) {
  let apikey = "30927dtfa44b4770359oe8258a9c5b2c";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  axios.get(apiurl).then(updateweatherdata);
}

function handlesearchsubmit(event) {
  event.preventDefault();
  let searchinput = document.querySelector("#search-form-input");
  let cityelement = document.querySelector("#city");
  cityelement.innerHTML = searchinput.value;
  searchcity(searchinput.value);
}

let searchformelement = document.querySelector("#search-form");
searchformelement.addEventListener("submit", handlesearchsubmit);
