// FORM
const form = document.querySelector("#agendar-cliente");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const car = document.querySelector("#car");
const vp = document.querySelector("#vp");
const documentacion = document.querySelector("#documentacion");
const observaciones = document.querySelector("#observaciones");
// FORM VARIABLES
// CONTADOR VENTAS VARIABLES

// DATA
let carteraDeClientes = JSON.parse(localStorage.getItem("cartera")) || [];
console.log(JSON.parse(localStorage.getItem("cartera de clientes")));
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
// FUNCTION TO SAVE CLIENTE IN
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
      id: Date.now()
    };
    carteraDeClientes.push(cliente);
    console.log(cliente);
  }
};

// FUNCTION TO ADD PROP TO OBJECT CLIENT
const customerSucces = (cliente) => {
  carteraDeClientes[numerocliente].ventaCerrada = true;
};

customerSucces();
console.log(carteraDeClientes[0]);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  pushCartera();
  saveCustomerLs();
  console.log(carteraDeClientes);
});
// FORM
