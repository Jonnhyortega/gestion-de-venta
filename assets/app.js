// // FORM VARIABLES
// const form = document.querySelector("#agendar-cliente");
// const name = document.querySelector("#name");
// const phone = document.querySelector("#phone");
// const car = document.querySelector("#car");
// const vp = document.querySelector("#vp");
// const documentacion = document.querySelector("#documentacion");
// const observaciones = document.querySelector("#observaciones");
// const containerClients = document.querySelector("#container-clients");
// // FORM VARIABLES
// // ####################################################################
// // SEARCH CLIENT VARIABLES
// let searchClientPhone = document.querySelector("#search-client");
// let btnSearch = document.querySelector("#btn-search");
// let btnReset = document.querySelector("#btn-reset-search");
// // SEARCH CLIENT VARIABLES
// // ####################################################################
// // DATA
// let carteraDeClientes = JSON.parse(localStorage.getItem("cartera")) || [];
// console.log(carteraDeClientes);
// // DATA
// // ####################################################################
// // FUNCTIONS
// // FUNCTION TO SAVED DATA CLIENTS IN LOCAL STORAGE
// const saveCustomerLs = () => {
//   localStorage.setItem("cartera", JSON.stringify(carteraDeClientes));
// };

// // FUNCTION TO PUSH CARTERA DE CLIENTES
// const pushCartera = () => {
//   if (!name.value || !phone.value) {
//     alert("Completa el campo que falta para continuar");
//   } else {
//     let cliente = {
//       name: name.value,
//       phone: phone.value,
//       car: car.value,
//       vp: vp.checked,
//       documentacion: documentacion.value,
//       observacion: observaciones.value,
//       id: Date.now(),
//     };
//     carteraDeClientes.push(cliente);
//     console.log(cliente);
//   }
// };



// // FUNCION TO RENDER TOTAL CLIENTS
// const renderTotalClients = () => {
//   containerClients.innerHTML = " ";
//   carteraDeClientes.forEach((cliente) => {
//     containerClients.innerHTML += `
//       <div id="client">
//         <p>${cliente.name}</p>
//         <button class='btn-agendar btn-client'>Agendar</button>
//         <button class='btn-closed-bussines btn-client' data-id="${cliente.phone}">B.Closed</button>
//         <p>${cliente.phone}</p>
//         <p>${cliente.car}</p>
//         <p>${cliente.documentacion}</p>
//       </div>
//     `;
//   });
//   let btnAgendar = document.querySelectorAll(".btn-agendar");
//   let btnClosedBussines = document.querySelectorAll(".btn-closed-bussines");
//   let client = document.querySelector("#client");
//   btnClosedBussines.forEach((btn) => {
//     btn.addEventListener("click", () => {});
//   });
// };

// // FUNCTION TO MARK AS CLOSED BUSINESS
// const markToClosedBussines = () => {};

// // FUNCTION TO RESET CONTAINERCLIENTS
// const resetContainer = () => {
//   containerClients.innerHTML = "";
//   renderTotalClients();
// };
// // ####################################################################

// //INIT
// document.addEventListener("DOMContentLoaded", () => {
//   renderTotalClients();

//   // PUSH CLIENTE IN CARTERA
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     pushCartera();
//     renderTotalClients();
//     saveCustomerLs();
//     form.reset();
//   });

//   // RESET CONTAINER CLIENTS
//   btnReset.addEventListener("click", () => {
//     resetContainer();
//     searchClientPhone.value = "";
//   });

//   // FUNCTION TO SEARCH
//   btnSearch.addEventListener("click", () => {
//     const phoneSearch = searchClientPhone.value;
//     const clientFound = carteraDeClientes.find(
//       (cliente) => cliente.phone === phoneSearch
//     );

//     if (clientFound) {
//       console.log("Se encontro el cliente");
//       containerClients.innerHTML = `
//          <div id="client">
//            <p>${clientFound.name}</p>
//            <p>${clientFound.phone}</p>
//            <p>${clientFound.car}</p>
//            <p>${clientFound.documentacion}</p>
//            <button>Agendar</button>
//            <button>B.Closed</button>
//          </div>
//       `;
//       console.log(clientFound);
//     } else if (phoneSearch === "" || !clientFound) {
//       containerClients.innerHTML = `
//           <p>No se encontraron resultados</p>
//       `;
//     }
//   });

//   searchClientPhone.addEventListener("input", ()=>{
//     if(searchClientPhone.value == ""){
//       renderTotalClients();
//     }
//   })
// });


// FORM VARIABLES
const form = document.querySelector("#agendar-cliente");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const car = document.querySelector("#car");
const vp = document.querySelector("#vp");
const documentacion = document.querySelector("#documentacion");
const observaciones = document.querySelector("#observaciones");
const containerClients = document.querySelector("#container-clients");

let searchClientPhone = document.querySelector("#search-client");
let btnSearch = document.querySelector("#btn-search");
let btnReset = document.querySelector("#btn-reset-search");

let carteraDeClientes = JSON.parse(localStorage.getItem("cartera")) || [];

const saveCustomerLs = () => {
  localStorage.setItem("cartera", JSON.stringify(carteraDeClientes));
};

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
// FUNCTION TO RENDER CARTERA CLIENTES
const renderTotalClients = () => {
  containerClients.innerHTML = " ";
  // RENDER
  carteraDeClientes.forEach((cliente) => {
    containerClients.innerHTML += `
      <div id="client" class="client-class" data-id="${cliente.name}" >
        <p>${cliente.name}</p>
        <button class='btn-agendar btn-client'>Agendar</button>
        <button class='btn-closed-bussines btn-client' data-id="${cliente.phone}">B.Closed</button>
        <p>${cliente.phone}</p>
        <p>${cliente.car}</p>
        <p>${cliente.documentacion}</p>
      </div>
    `;
  });

//  FUNCTION TO RENDER CLIENT BUSSINES CLOSED
let clientDiv = document.querySelectorAll(".client-class");

// Aplicar color amarillo a los elementos con bussinesClosed
carteraDeClientes.forEach(cliente => {
  if (cliente.hasOwnProperty("bussinesClosed")) {
    clientDiv.forEach(div => {
      if (cliente.name === div.dataset.id) {
        div.style.backgroundColor = "yellow";
      }
    });
  }
});



  let btnClosedBussines = document.querySelectorAll(".btn-closed-bussines");
  btnClosedBussines.forEach((btn) => {
    btn.addEventListener("click", () => {
      let clientDiv = btn.closest("#client");
      let confirmacionDeVenta = window.confirm('¿Estás seguro que cerró este cliente?');
      if (confirmacionDeVenta) {
        clientDiv.style.backgroundColor = 'yellow';
        carteraDeClientes.forEach(cliente => {
          if (btn.dataset.id == cliente.phone) {
            cliente.bussinesClosed = true;
            console.log(cliente);
          }
        });
        saveCustomerLs();
      }
    });
  });
  
};
console.log(carteraDeClientes[1]);

const markToClosedBussines = () => {};

const resetContainer = () => {
  containerClients.innerHTML = "";
  renderTotalClients();
};

document.addEventListener("DOMContentLoaded", () => {
  renderTotalClients();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    pushCartera();
    renderTotalClients();
    saveCustomerLs();
    form.reset();
  });

  btnReset.addEventListener("click", () => {
    resetContainer();
    searchClientPhone.value = "";
  });

  btnSearch.addEventListener("click", () => {
    const phoneSearch = searchClientPhone.value;
    const clientFound = carteraDeClientes.find(
      (cliente) => cliente.phone === phoneSearch
    );

    if (clientFound) {
      console.log("Se encontro el cliente");
      containerClients.innerHTML = `
         <div id="client">
           <p>${clientFound.name}</p>
           <p>${clientFound.phone}</p>
           <p>${clientFound.car}</p>
           <p>${clientFound.documentacion}</p>
           <button>Agendar</button>
           <button>B.Closed</button>
         </div>
      `;
      console.log(clientFound);
    } else if (phoneSearch === "" || !clientFound) {
      containerClients.innerHTML = `
          <p>No se encontraron resultados</p>
      `;
    }
  });

  searchClientPhone.addEventListener("input", ()=>{
    if(searchClientPhone.value == ""){
      renderTotalClients();
    }
  })
});
