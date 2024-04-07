// FORM VARIABLES
const form = document.querySelector("#agendar-cliente");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const car = document.querySelector("#car");
const vp = document.querySelector("#vp");
const documentacion = document.querySelector("#documentacion");
const observaciones = document.querySelector("#observaciones");
const containerClients = document.querySelector("#container-clients");
// FORM VARIABLES

// DATA
let carteraDeClientes = JSON.parse(localStorage.getItem("cartera")) || [];
console.log(carteraDeClientes);
let bussinesClosed = JSON.parse(localStorage.getItem("ventas cerradas")) || [];
// DATA

// FUNCTION TO SAVED DATA CLIENTS IN LOCAL STORAGE
const saveCustomerLs = () => {
  localStorage.setItem("cartera", JSON.stringify(carteraDeClientes));
};
// FUNCTION TO SAVED DATA VENTAS CERRADAS IN LOCAL STORAGE
const saveBussinesClosed = () => {
  localStorage.setItem("ventas cerradas", JSON.stringify(bussinesClosed));
};
// FUNCTION TO PUSH CARTERA DE CLIENTES
const pushCartera = () => {
  if (!name.value || !phone.value) {
    alert("Completa el campo que falta para continuar");
  } else {
    let cliente = {
      name: name.value,
      phone: phone.value,
      car: car.value,
      vp: vp.checked,
      documentacion: documentacion.value,
      observacion: observaciones.value,
      id: Date.now(),
    };
    carteraDeClientes.push(cliente);
    console.log(cliente);
  }
};

// FUNCTIONS TO RENDER CLIENTE IN CALENDAR
const containerData = document.querySelector(".container-data");
const createMonth = () => {
  containerData.innerHTML = `
  <div id="month">
  <ul id="week1">
    <li id="day1"></li>
    <li id="day2"></li>
    <li id="day3"></li>
    <li id="day4"></li>
    <li id="day5"></li>
    <li id="day6"></li>
  </ul>
  <ul id="week2">
    <li id="day1"></li>
    <li id="day2"></li>
    <li id="day3"></li>
    <li id="day4"></li>
    <li id="day5"></li>
    <li id="day6"></li>
  </ul>
  <ul id="week3">
    <li id="day1"></li>
    <li id="day2"></li>
    <li id="day3"></li>
    <li id="day4"></li>
    <li id="day5"></li>
    <li id="day6"></li>
  </ul>
  <ul id="week4">
    <li id="day1"></li>
    <li id="day2"></li>
    <li id="day3"></li>
    <li id="day4"></li>
    <li id="day5"></li>
    <li id="day6"></li>
  </ul>
</div>
  `;
};

// FUNCION TO RENDER TOTAL CLIENTS
const renderTotalClients = () => {
  containerClients.innerHTML = " ";
  carteraDeClientes.forEach((cliente) => {
    containerClients.innerHTML += `
      <div id="client">
        <p>${cliente.name}</p>
        <p>${cliente.phone}</p>
        <p>${cliente.car}</p>
        <p>${cliente.documentacion}</p>
        <button class='btn-agendar btn-client'>Agendar</button>
        <button class='btn-closed-bussines btn-client' data-id="${cliente.phone}">B.Closed</button>
      </div>
    `;
  });
  let btnAgendar = document.querySelectorAll(".btn-agendar");
  let btnClosedBussines = document.querySelectorAll(".btn-closed-bussines");
  let client = document.querySelector("#client");
  btnClosedBussines.forEach((btn) => {
    btn.addEventListener("click", () => {});
  });
};

// FUNCTION TO MARK AS CLOSED BUSINESS
const markToClosedBussines = () => {};
//RENDER CLIENTS WHEN DOM LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderTotalClients();
});

// PUSH CLIENTE IN CARTERA
form.addEventListener("submit", (e) => {
  e.preventDefault();
  pushCartera();
  renderTotalClients();
  saveCustomerLs();
});

// SEARCHC CLIENT
let searchClientPhone = document.querySelector("#search-client");
let btnSearch = document.querySelector("#btn-search");
const searchClient = () => {
  phoneSearch = searchClientPhone.value;
  let clientFound = carteraDeClientes.find(
    (cliente) => cliente.phone == phoneSearch
  );
  if (searchClientPhone.value == "") {
    renderTotalClients();
  } else {
    containerClients.innerHTML = " ";
    containerClients.innerHTML += `
      <div id="client">
        <p>${clientFound.name}</p>
        <p>${clientFound.phone}</p>
        <p>${clientFound.car}</p>
        <p>${clientFound.documentacion}</p>
        <button>Agendar</button>
        <button>B.Closed</button>
      </div>
    `;
  }
};

btnSearch.addEventListener("click", searchClient);
