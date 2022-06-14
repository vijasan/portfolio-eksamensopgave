// Lav en variabel, der refererer til body
const body = document.querySelector("body");
// Lav en variabel, der refererer til ".mode"
const knap = document.querySelector(".mode");
// Lav funktionen "darkMode", som
function darkMode() {
  // a) toggle'r klassen "dark" vha. classList og
  // b) ændrer teksten på toggle-knappen til hhv. "Dark mode" eller "Light mode" vha. en if/else-sætning
  body.classList.toggle("dark");

  if (knap.innerHTML == "tilbage til sort :)") {
    knap.innerHTML = "gult tema :)";
  } else {
    knap.innerHTML = "tilbage til sort :)";
  }
}
// Lav et klik-event på toggle, der sætter funktionen darkMode i gang
knap.addEventListener("click", darkMode);
