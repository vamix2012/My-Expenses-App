let allData = {
  zeciuieli: [],
  colecte: [],
  donatii: [],
  cheltuieli: []
}

function init() {
  //load data from db
  if (localStorage.getItem("data")) {
    allData = JSON.parse(localStorage.getItem("data"));
  }
}

function toggleMenu() {
  document.getElementById("navbarMobil").classList.toggle("d-none")
}

