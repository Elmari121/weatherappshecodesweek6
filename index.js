function updateweatherdata(response) {
  let tempelement = document.querySelector("#Temperature");
  let Temperature = response.data.Temperature.current;
  tempelement.innerHTML = math.round(Temperature);
  let;
}
function searchcity(city) {
  let apikey = "30927dtfa44b4770359oe8258a9c5b2c";
  let apiurl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric";
  axios.get(apiurl).then(updateweatherdata);
}
function handlesearchsubmit(event) {
  event.preventdefault();
  let searchinput = document.querySelector("#search-form-input");
  let cityelement = document.querySelector("#city");
  cityelement.innerHTML = searchinput.value;
  searchcity(searchinput.value);
}

let searchformelement = document.querySelector("search-form");
searchformelement.addEventListener("submit", handlesearchsubmit);
