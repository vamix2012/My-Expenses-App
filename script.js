let allData = {
  zeciuieli: [],
  colecte: [],
  donatii: [],
  cheltuieli: []
}

let colName = "";

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
function renderDashboard() {
  toggleMenu();
  document.getElementById("title").innerHTML = "Dashboard"
  document.getElementById("list").innerHTML = "";
  let sumEu = 0;
  let sumCh = 0;
  let totalEu = 0;
  let totalCh = 0;
  for (let i = 0; i < namesList.length - 1; i++) {
    for (let j = 0; j < allData[namesList[i]].length; j++) {
      sumEu += allData[namesList[i]][j].sumaEu;
      sumCh += allData[namesList[i]][j].sumaCh;
    }
    document.getElementById("list").innerHTML += `
    <div class="card mb-2 mr-2 ml-2">
    <div class="card-body">
        <div class="firstRowDashboard"><span>Total ${namesList[i]}</span></div>
      <div class="secondRowDashboard"><span> ${sumEu} € </span><span>${sumCh} CHF</span></div>
      
    </div>
  </div>
  `;
    totalCh += sumCh;
    totalEu += sumEu;
    sumEu = 0;
    sumCh = 0;
  }
  let expEu = 0;
  let expCh = 0;
  for (let i = 0; i < allData[namesList[3]].length; i++) {
    expCh += allData[namesList[3]][i].sumaCh;
    expEu += allData[namesList[3]][i].sumaEu;
  }

  document.getElementById("list").innerHTML += `
    <div class="card mb-2 mr-2 ml-2">
    <div class="card-body">
        <div class="firstRowDashboard"><span>Total ${namesList[3]}</span></div>
      <div class="secondRowDashboard"><span> ${expEu} € </span><span>${expCh} CHF</span></div>
      
    </div>
  </div>
  `;
  let remEu = (totalEu + 3906.97) - expEu;
  let remCh = totalCh - expCh;
  document.getElementById("total").innerHTML = `
      <div class="card mb-2 mr-2 ml-2">
      <div class="card-body">
          <div class="firstRowDashboard"> <span>Total in Caserie</span></div>
          <div class="secondRowDashboard"><span> ${remEu.toFixed(2)} € </span><span>${remCh.toFixed(2)} CHF</span></div>
          </div>
    </div>
  `;
}

//Colecte
function renderColecte() {
  toggleMenu();
  let sumEu = 0;
  let sumCh = 0;
  colName = "colecte";
  document.getElementById("title").innerHTML = "Colecte"
  document.getElementById("list").innerHTML = ``;

  for (let i = 0; i < allData.colecte.length; i++) {
    sumEu += allData.colecte[i].sumaEu;
    sumCh += allData.colecte[i].sumaCh;
    document.getElementById("list").innerHTML += ` 
  <div class="card mb-3 mt-3 mr-2 ml-2" onclick="showEditForm(${i})">
  <div class="card-body">
      <div class="firstRow"><span>${allData.colecte[i].date}</span><span> ${allData.colecte[i].sumaEu} € </span><span>${allData.colecte[i].sumaCh} CHF</span></div>
      <div class="secondRow"><span>${allData.colecte[i].descriere}</span></div>
  </div>
</div>

<div class="d-none ml-2" id="editForm${i}" >
<div>
        <label for="sumEu">Sum in €</label><br>
        <input type="number" name="sumEu" value="${allData.colecte[i].sumaEu}" id="editedSumEu${i}" />

    </div>
    <div>
        <label for="sumCh">Sum in CHF</label><br>
        <input type="number" name="sumCh" value="${allData.colecte[i].sumaCh}" id="editedSumCh${i}" />

    </div>
    <div  class="mb-2">
        <label for="description">Description</label><br>
        <input type="text" name="description" value="${allData.colecte[i].descriere}" id="editedDescription${i}" />

    </div>
    <button type="submit" onclick="updateData(${i})" class="btn btn-primary">Save</button>
    <button type="submit" onclick="hideEditForm(${i})" class="btn btn-danger">Cancel</button>
    <button type="submit" onclick="deleteEntry(${i})" class="btn btn-danger">Delete</button>
</div>

`;
  }
  document.getElementById("total").innerHTML = ` 
    <div class="card mt-3 mb-2 mr-2 ml-2">
    <div class="card-body">
        <div class="firstRow"> <span>Total Donatii</span><span> ${sumEu} € </span><span>${sumCh} CHF</span></div>
    </div>
  </div>
  `;

}


//Donatii
function renderDonatii() {
  toggleMenu();
  let sumEu = 0;
  let sumCh = 0;
  colName = "donatii"
  document.getElementById("list").innerHTML = ``;
  document.getElementById("title").innerHTML = "Donaţii"
  for (let i = 0; i < allData.donatii.length; i++) {
    sumEu += allData.donatii[i].sumaEu;
    sumCh += allData.donatii[i].sumaCh;
    document.getElementById("list").innerHTML += ` 
  <div class="card mb-3 mt-3 mr-2 ml-2" onclick="showEditForm(${i})">
  <div class="card-body">
      <div class="firstRow"><span>${allData.donatii[i].date}</span><span> ${allData.donatii[i].sumaEu} € </span><span>${allData.donatii[i].sumaCh} CHF</span></div>
      <div class="secondRow"><span>${allData.donatii[i].descriere}</span></div>
  </div>
</div>

<div class="d-none ml-2" id="editForm${i}" >
<div>
        <label for="sumEu">Sum in €</label><br>
        <input type="number" name="sumEu" value="${allData.donatii[i].sumaEu}" id="editedSumEu${i}" />

    </div>
    <div>
        <label for="sumCh">Sum in CHF</label><br>
        <input type="number" name="sumCh" value="${allData.donatii[i].sumaCh}" id="editedSumCh${i}" />

    </div>
    <div  class="mb-2">
        <label for="description">Description</label><br>
        <input type="text" name="description" value="${allData.donatii[i].descriere}" id="editedDescription${i}" />

    </div>
    <button type="submit" onclick="updateData(${i})" class="btn btn-primary">Save</button>
    <button type="submit" onclick="hideEditForm(${i})" class="btn btn-danger">Cancel</button>
    <button type="submit" onclick="deleteEntry(${i})" class="btn btn-danger">Delete</button>

    
</div>

`
  }
  document.getElementById("total").innerHTML = ` 
    <div class="card mt-3 mb-2 mr-2 ml-2">
    <div class="card-body">
        <div class="firstRow"> <span>Total Donatii</span><span> ${sumEu} € </span><span>${sumCh} CHF</span></div>
    </div>
  </div>
  `
}

//Zeciuieli
function renderZeciuieli() {
  toggleMenu();
  let sumEu = 0;
  let sumCh = 0;
  colName = "zeciuieli"
  document.getElementById("title").innerHTML = "Zeciuieli"
  document.getElementById("list").innerHTML = ``;

  for (let i = 0; i < allData.zeciuieli.length; i++) {
    sumEu += allData.zeciuieli[i].sumaEu;
    sumCh += allData.zeciuieli[i].sumaCh;
    document.getElementById("list").innerHTML += ` 
  <div class="card mb-3 mt-3 mr-2 ml-2" onclick="showEditForm(${i})">
  <div class="card-body">
      <div class="firstRow"><span>${allData.zeciuieli[i].date}</span>
      <span> ${allData.zeciuieli[i].sumaEu} € </span>
      <span>${allData.zeciuieli[i].sumaCh} CHF</span></div>
      <div class="secondRow"><span>${allData.zeciuieli[i].descriere}</span></div>
  </div>
</div>

<div class="d-none  ml-2" id="editForm${i}" >
<div>
        <label for="sumEu">Sum in €</label><br>
        <input type="number" name="sumEu" value="${allData.zeciuieli[i].sumaEu}" id="editedSumEu${i}" />

    </div>
    <div>
        <label for="sumCh">Sum in CHF</label><br>
        <input type="number" name="sumCh" value="${allData.zeciuieli[i].sumaCh}" id="editedSumCh${i}" />

    </div>
    <div  class="mb-2">
        <label for="description">Description</label><br>
        <input type="text" name="description" value="${allData.zeciuieli[i].descriere}" id="editedDescription${i}" />

    </div>
    <button type="submit" onclick="updateData(${i})" class="btn btn-primary">Save</button>
    <button type="submit" onclick="hideEditForm(${i})" class="btn btn-danger">Cancel</button>
    <button type="submit" onclick="deleteEntry(${i})" class="btn btn-danger">Delete</button>
</div>


`;
  }
  document.getElementById("total").innerHTML = ` 
    <div class="card mt-3 mb-2 mr-2 ml-2">
    <div class="card-body">
        <div class="firstRow"> <span>Total Donatii</span><span> ${sumEu} € </span><span>${sumCh} CHF</span></div>
    </div>
  </div>
  `;

}

//Cheltuieli
function renderCheltuieli() {
  toggleMenu();
  let sumEu = 0;
  let sumCh = 0;
  colName = "cheltuieli";
  document.getElementById("title").innerHTML = "Cheltuieli"
  document.getElementById("list").innerHTML = ``;

  for (let i = 0; i < allData.cheltuieli.length; i++) {
    sumEu += allData.cheltuieli[i].sumaEu;
    sumCh += allData.cheltuieli[i].sumaCh;
    document.getElementById("list").innerHTML += ` 
  <div class="card mb-3 mt-3 mr-2 ml-2" onclick="showEditForm(${i})">
  <div class="card-body">
      <div class="firstRow"><span>${allData.cheltuieli[i].date}</span>
      <span> ${allData.cheltuieli[i].sumaEu} € </span>
      <span>${allData.cheltuieli[i].sumaCh} CHF</span></div>
      <div class="secondRow"><span>${allData.cheltuieli[i].descriere}</span></div>
  </div>
</div>


<div class="d-none ml-2" id="editForm${i}" >
<div>
        <label for="sumEu">Sum in €</label><br>
        <input type="number" name="sumEu" value="${allData.cheltuieli[i].sumaEu}" id="editedSumEu${i}" />

    </div>
    <div>
        <label for="sumCh">Sum in CHF</label><br>
        <input type="number" name="sumCh" value="${allData.cheltuieli[i].sumaCh}" id="editedSumCh${i}" />

    </div>
    <div  class="mb-2">
        <label for="description">Description</label><br>
        <input type="text" name="description" value="${allData.cheltuieli[i].descriere}" id="editedDescription${i}" />

    </div>
    <button type="submit" onclick="updateData(${i})" class="btn btn-primary">Save</button>
    <button type="submit" onclick="hideEditForm(${i})" class="btn btn-danger">Cancel</button>
    <button type="submit" onclick="deleteEntry(${i})" class="btn btn-danger">Delete</button>
</div>

`;
  }
  document.getElementById("total").innerHTML = ` 
    <div class="card mt-3 mb-2 mr-2 ml-2">
    <div class="card-body">
        <div class="firstRow"> <span>Total Donatii</span><span> ${sumEu} € </span><span>${sumCh} CHF</span></div>
    </div>
  </div>
  `;

}

// Add data render

function renderAddData() {
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
    allData.colecte.unshift(data);
    resetForm();
  }
  if (category == "Zeciuieli") {
    allData.zeciuieli.unshift(data);
    resetForm();
  }
  if (category == "Donatii") {
    allData.donatii.unshift(data);
    resetForm();
  }
  if (category == "Cheltuieli") {
    allData.cheltuieli.unshift(data);
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



function updateData(i) {
  let eu = +document.getElementById("editedSumEu" + i).value
  let ch = +document.getElementById("editedSumCh" + i).value
  let des = document.getElementById("editedDescription" + i).value

  allData[colName][i].sumaEu = eu;
  allData[colName][i].sumaCh = ch;
  allData[colName][i].descriere = des;

  localStorage.setItem("data", JSON.stringify(allData));
  hideEditForm(i);
  toggleMenu();
  renderDashboard();
}

function showEditForm(i) {
  document.getElementById(`editForm${i}`).classList.remove("d-none")
}

function hideEditForm(i) {
  document.getElementById(`editForm${i}`).classList.add("d-none")
}

function deleteEntry(i) {
  allData[colName].splice(i, 1);
  localStorage.setItem("data", JSON.stringify(allData));
  hideEditForm(i);
  toggleMenu();
  renderDashboard();
}
