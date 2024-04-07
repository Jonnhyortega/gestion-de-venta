// VARIABLES
const formAddMonth = document.getElementById("add-month");
const selectNameMonth = document.getElementById("name-month");
const inputYear = document.getElementById("year");
const inputFechaCreacion = document.querySelector('[name="fechaCreacion"]');
const submitButton = document.querySelector('input[type="submit"]');
const containerData = document.querySelector(".container-data");
const weeksTotals = document.querySelector("#weeks-totals");
const week1 = document.querySelector("#week1");
const week2 = document.querySelector("#week2");
const week3 = document.querySelector("#week3");
const week4 = document.querySelector("#week4");
const week5 = document.querySelector("#week5");
// VARIABLES

let monthsData = JSON.parse(localStorage.getItem("months")) || [];
// FUNCION TO SAVED IN LOCAL STORAGE
const saveMonthsLs = () => {
  localStorage.setItem("months", JSON.stringify(monthsData));
};

// FUNCTIONS TO RENDER CLIENT IN CALENDAR
const createMonth = () => {
  let month = {
    year: inputYear.value,
    month: selectNameMonth.value,
    weeksTotal: weeksTotals.value,
    week1: week1.value,
    week2: week2.value,
    week3: week3.value,
    week4: week4.value,
    week5: week5.value,
    fechaCreacion: inputFechaCreacion.value,
    id: Date.now(),
  };

  monthsData.push(month);
  saveMonthsLs();
};

// RENDER MONTH
const renderMonth = (month) => {};

// FUNCTION TO RENDER MONTH
formAddMonth.addEventListener("submit", (e) => {
  e.preventDefault();
  createMonth();
});
