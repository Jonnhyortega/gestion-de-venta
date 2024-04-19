const formAddMonth = document.getElementById("add-month");
const yearInput = document.getElementById("year");
const nameMonthSelect = document.getElementById("name-month");
const weeksTotalsSelect = document.getElementById("weeks-totals");
const week1 = document.getElementById("week1");
const week2 = document.getElementById("week2");
const week3 = document.getElementById("week3");
const week4 = document.getElementById("week4");
const week5 = document.getElementById("week5");
const fechaCreacionInput = document.getElementById("fechaCreacion");
const submitButton = document.querySelector('input[type="submit"]');
const containerData = document.querySelector("#container-data");
const renderedMonth = document.getElementById("rendered-month");
const showMonth = document.getElementById("mostrar-mes");
const btnRenderAllMonths = document.querySelector("#btn-renderAllMonths");
const btnRenderCurrentMonth = document.querySelector("#btn-renderCurrentMonth");
let mesesDeTrabajo = JSON.parse(localStorage.getItem("mesesDeTrabajo")) || [];

/** FUNCTION TO SAVE DATA IN LOCAL STORAGE*/
const saveMesesDeTrabajo = () => {
  localStorage.setItem("mesesDeTrabajo", JSON.stringify(mesesDeTrabajo));
};

/**FUNCTION TO CREATE MONTH */
const createMonth = () => {
  let month = {
    year: yearInput.value,
    monthToCreate: nameMonthSelect.value,
    semana1: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    semana2: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    semana3: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    semana4: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    semana5: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    operacionesTotales: null,
    id: Date.now(),
  };
  mesesDeTrabajo.push(month);
  saveMesesDeTrabajo();
};

/** FUNCTION TO RENDER current MONTH */
const lastMonth = mesesDeTrabajo[mesesDeTrabajo.length - 1];
semana1 = lastMonth.semana1;
semana2 = lastMonth.semana2;
semana3 = lastMonth.semana3;
semana4 = lastMonth.semana4;
semana5 = lastMonth.semana5;
const renderCurrentMonth = (lastMonth) => {
  renderedMonth.innerHTML = "";

  // WEEK 1
  weekDiv1 = document.createElement("div");
  weekDiv1.classList.add(".week");
  weekDiv1.textContent = "Semana 1";
  renderedMonth.appendChild(weekDiv1);
  semana1.forEach((dia) => {
    let day = document.createElement("p");
    day.classList.add("days");
    day.textContent = `${dia}`;

    weekDiv1.appendChild(day);
  });
  // -----------------------------

  // WEEK 2
  weekDiv2 = document.createElement("div");
  weekDiv2.textContent = "Semana 2";
  weekDiv2.classList.add(".week");
  renderedMonth.appendChild(weekDiv2);
  semana2.forEach((dia) => {
    let day = document.createElement("p");
    day.classList.add("days");
    day.textContent = `${dia}`;

    weekDiv2.appendChild(day);
  });
  // ----------------------------

  // WEEK 3
  weekDiv3 = document.createElement("div");
  weekDiv3.classList.add(".week");
  weekDiv3.textContent = "Semana 3";
  renderedMonth.appendChild(weekDiv3);
  semana3.forEach((dia) => {
    let day = document.createElement("p");
    day.classList.add("days");
    day.textContent = `${dia}`;

    weekDiv3.appendChild(day);
  });
  // -----------------------------------

  // WEEK 4
  weekDiv4 = document.createElement("div");
  weekDiv4.classList.add(".week");
  weekDiv4.textContent = "Semana 4";
  renderedMonth.appendChild(weekDiv4);
  semana4.forEach((dia) => {
    let day = document.createElement("p");
    day.classList.add("days");
    day.textContent = `${dia}`;

    weekDiv4.appendChild(day);
  });
  // ---------------------------------
  // week 5
  weekDiv5 = document.createElement("div");
  weekDiv5.classList.add(".week");
  weekDiv5.textContent = "Semana 5";
  renderedMonth.appendChild(weekDiv5);
  semana5.forEach((dia) => {
    let day = document.createElement("p");
    day.classList.add("days");
    day.textContent = `${dia}`;

    weekDiv5.appendChild(day);
  });
  // -----------------------------------
};

/** FUNCTION TO RENDER ALL MONTHS*/
const renderAllMonths = () => {
  renderedMonth.innerHTML = "";

  mesesDeTrabajo.forEach((mes) => {
    renderedMonth.innerHTML += `
    <div class="month-data">
        <p>${mes.monthToCreate}</p>
        <p>Total de operaciones: ${mes.operacionesTotales}</p>
        <p>Año: ${mes.year}</p>
    </div>
        <p></p>
    `;
  });
};

/** FUNCTION TO RENDER CURRENT MONTH*/

/**LISTENER TO SUBMIT FORM ADD MONTH */
formAddMonth.addEventListener("submit", (e) => {
  e.preventDefault();
  createMonth();
});

// LISTENERS RENDER MONTHS
btnRenderAllMonths.addEventListener("click", renderAllMonths);
btnRenderCurrentMonth.addEventListener("click", renderCurrentMonth);
