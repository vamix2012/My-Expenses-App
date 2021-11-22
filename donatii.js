let donatii = [];



function init() {
  //load data from db
  if (localStorage.getItem("data")) {
    let tempData = JSON.parse(localStorage.getItem("data"))
    donatii = tempData.donatii;
  }

  renderDonatii();
}


function renderDonatii() {
  let sumEu = 0;
  let sumCh = 0;
  for (let i = 0; i < donatii.length; i++) {
    sumEu+= donatii[i].sumaEu;
    sumCh+= donatii[i].sumaCh;
    document.getElementById("donatii").innerHTML += ` 
  <div class="card mb-2">
  <div class="card-body">
      <div class="firstRow"><span>${donatii[i].date}</span><span> ${donatii[i].sumaEu} € </span><span>${donatii[i].sumaCh} CHF</span></div>
      <div class="secondRow"><span>${donatii[i].descriere}</span></div>
  </div>
</div>
`
  }
  
  document.getElementById("total").innerHTML += ` 
    <div class="card mb-2">
    <div class="card-body">
        <div class="firstRow"> <span>Total Colecte</span><span> ${sumEu} € </span><span>${sumCh} CHF</span></div>
    </div>
  </div>
  `
  
  

}