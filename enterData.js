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

function toggleMenu() {
    document.getElementById("navbarMobil").classList.toggle("d-none")
}