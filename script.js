let allData = {
  zeciuieli: [],
  colecte: [],
  donatii: [],
  cheltuieli: []
}

let namesList = ["zeciuieli", "colecte", "donatii", "cheltuieli"]

function init() {
  //load data from db
  if (localStorage.getItem("data")) {
    allData = JSON.parse(localStorage.getItem("data"));
  }
  renderDashboard();
  toggleMenu();
    
}

function toggleMenu() {
  document.getElementById("navbarMobil").classList.toggle("d-none")
}



//Dashboard
function renderDashboard(){
  toggleMenu();
  document.getElementById("title").innerHTML = "Dashboard"
  document.getElementById("list").innerHTML ="";
  let sumEu = 0;
  let sumCh = 0;
  let totalEu = 0;
  let totalCh =0;
 for(let i=0; i<namesList.length -1; i++){
   console.log(namesList[i])
   for(let j =0; j<allData[namesList[i]].length; j++){
     sumEu += allData[namesList[i]][j].sumaEu;
     sumCh += allData[namesList[i]][j].sumaCh;
   }
  document.getElementById("list").innerHTML += `
    <div class="card mb-2 mr-2 ml-2">
    <div class="card-body">
        <div class="firstRow"><span>Total ${namesList[i]}</span></div>
      <div class="secondRow"><span> ${sumEu} € </span><span>${sumCh} CHF</span></div>
      
    </div>
  </div>
  `;
  totalCh += sumCh;
  totalEu += sumEu;
  sumEu =0;
  sumCh =0;
 }
 let expEu = 0;
 let expCh = 0;
 for (let i=0;i<allData[namesList[3]].length; i++) {
   expCh+=allData[namesList[3]][i].sumaCh;
    expEu+=allData[namesList[3]][i].sumaEu;
 }
  
  let remEu = totalEu - expEu;
  let remCh = totalCh - expCh;
 
  document.getElementById("total").innerHTML = `
      <div class="card mb-2 mr-2 ml-2">
      <div class="card-body">
          <div class="firstRow"> <span>Total in Caserie</span><span> ${remEu.toFixed(2)} € </span><span>${remCh.toFixed(2)} CHF</span></div>
      </div>
    </div>
  `;
}

//Colecte
function renderColecte() {
  toggleMenu();

  document.getElementById("title").innerHTML = "Colecte"
  document.getElementById("list").innerHTML = ``;
  document.getElementById("total").innerHTML = ``;
}


//Donatii
function renderDonatii() {
  toggleMenu();
  let sumEu = 0;
  let sumCh = 0;
  document.getElementById("list").innerHTML = ``;
  document.getElementById("title").innerHTML = "Donaţii"
  for (let i = 0; i < allData.donatii.length; i++) {
    sumEu += allData.donatii[i].sumaEu;
    sumCh += allData.donatii[i].sumaCh;
    document.getElementById("list").innerHTML += ` 
  <div class="card mb-2 mr-2 ml-2">
  <div class="card-body">
      <div class="firstRow"><span>${allData.donatii[i].date}</span><span> ${allData.donatii[i].sumaEu} € </span><span>${allData.donatii[i].sumaCh} CHF</span></div>
      <div class="secondRow"><span>${allData.donatii[i].descriere}</span></div>
  </div>
</div>
`
  }
  document.getElementById("total").innerHTML = ` 
    <div class="card mb-2 mr-2 ml-2">
    <div class="card-body">
        <div class="firstRow"> <span>Total Donatii</span><span> ${sumEu} € </span><span>${sumCh} CHF</span></div>
    </div>
  </div>
  `
}

//Zeciuieli
function renderZeciuieli() {
  toggleMenu();

  document.getElementById("title").innerHTML = "Zeciuieli"
  document.getElementById("list").innerHTML = ``;
  document.getElementById("total").innerHTML = ``;
}

//Cheltuieli
function renderCheltuieli() {
  toggleMenu();

  document.getElementById("title").innerHTML = "Cheltuieli"
  document.getElementById("list").innerHTML = ``;
  document.getElementById("total").innerHTML = ``;
}

// Add data render

function renderAddData(){
  toggleMenu();
  document.getElementById("list").innerHTML = `
   <div>
        <label for="datePicker">Entry Date</label><br>
        <input type="date" name="datePicker" id="datePicker" />

    </div>
    <div>
        <label for="sumEu">Sum in €</label><br>
        <input type="number" name="sumEu" value="" id="sumEu" />

    </div>
    <div>
        <label for="sumCh">Sum in CHF</label><br>
        <input type="number" name="sumCh" value="" id="sumCh" />

    </div>
    <div>
        <label for="description">Description</label><br>
        <input type="text" name="description" id="description" />

    </div>
    <div>
        <label for="category">Category</label><br>
        <select id="category">
            <option value=""></option>
            <option value="Colecte">Colecte</option>
            <option value="Zeciuieli">Zeciuieli</option>
            <option value="Donatii">Donatii</option>
            <option value="Cheltuieli">Cheltuieli</option>
        </select>

    </div>
    <br>
    <button type="submit" onclick="addData()" class="btn btn-primary">Add data</button>
  `;
  document.getElementById("title").innerHTML = "New entry"
  document.getElementById("total").innerHTML = ``;
  
}



//Add data logic

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
    allData.colecte.push(data);
    resetForm();
  }
  if (category == "Zeciuieli") {
    allData.zeciuieli.push(data);
    resetForm();
  }
  if (category == "Donatii") {
    allData.donatii.unshift(data);
    resetForm();
  }
  if (category == "Cheltuieli") {
    allData.cheltuieli.push(data);
    resetForm();
  }
  if (category == "") alert("Alege o categorie");


}

function resetForm() {

  //Save in DB

  localStorage.setItem("data", JSON.stringify(allData))
  // Reset form
  document.getElementById("datePicker").value = "";
  document.getElementById("sumEu").value = "";
  document.getElementById("sumCh").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
}
