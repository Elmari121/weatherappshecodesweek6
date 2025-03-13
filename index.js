function handlesearchsubmit(event) {
  event.preventdefault();
  let searchinput = document.querySelector("#search-form-input");
  let cityelement = document.querySelector("#city");
  cityelement.innerHTML = searchinput.value;
}

let searchformelement = document.querySelector("search-form");
searchformelement.addEventListener("submit", handlesearchsubmit);
