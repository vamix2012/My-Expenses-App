
let zeciuieli = [];
let colecte = [];
let donatii = [];
let cheltuieli = [];

function addData() {
  let date = document.getElementById("datePicker").value;
  let sumEu = +document.getElementById("sumEu").value;
  let sumCh = +document.getElementById("sumCh").value;
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;

  let data = {
    date: date,
    sumaEu: sumEu,
    sumaCh: sumCh,
    descriere: description
  }

  if (category == "Colecte") {
    colecte.push(data);
    resetForm();
  }
  if (category == "Zeciuieli") {
    zeciuieli.push(data);
    resetForm();
  }
  if (category == "Donatii") {
    donatii.push(data);
    resetForm();
  }
  if (category == "Cheltuieli") {
    cheltuieli.push(data);
    resetForm();
  }
  if (category == "") alert("Alege o categorie");


}

function resetForm() {
  document.getElementById("datePicker").value = "";
  document.getElementById("sumEu").value = "";
  document.getElementById("sumCh").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
}

function renderDonatii() {
  for (let i = 0; i < 50; i++) {
    document.getElementById("donatii").innerHTML += ` 
  <div class="card mb-2">
  <div class="card-body">
      <div class="firstRow"><span>12-05-1990 </span><span> 345 € </span><span>125 CHF</span></div>
      <div class="secondRow"><span>Donatie Familia Ardo${i}</span></div>
  </div>
</div>
`
  }

}

function toggleMenu() {
  document.getElementById("navbarMobil").classList.toggle("d-none")
}

