// VARIABLES
const formAddMonth = document.getElementById("add-month");
const selectNameMonth = document.getElementById("name-month");
const inputYear = document.getElementById("year");
const inputFechaCreacion = document.querySelector('[name="fechaCreacion"]');
const submitButton = document.querySelector('input[type="submit"]');
const containerData = document.querySelector("#container-data");
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

console.log(monthsData);
console.log(monthsData[0].week1);

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
const renderMonth = (month) => {
  // create MONTH DIV
  let monthDiv = document.createElement('div');
  monthDiv.id = "month";
  // create MONTH NAME
  let monthName = document.createElement('span');
  monthName.textContent = month.month;
  monthName.classList.add('monthName');
  monthDiv.appendChild(monthName);
  // create MONTH NAME
  // ---------------
  
// create WEEKS DIVS
  // WEEK1
  let week1 = document.createElement('div');
    week1.id = "week1";
    week1.classList.add('week');
    week1.appendChild(monthName);
    let spanWeek1 = document.createElement('span');
    spanWeek1.textContent = " Week 1";
    week1.appendChild(spanWeek1);
  // WEEK 2
    let week2 = document.createElement('div');
    week2.id = "week2";
    week2.classList.add('week');
    let spanWeek2 = document.createElement('span');
    spanWeek2.textContent = "Week 2";
    week2.appendChild(spanWeek2);
  //  WEEK 3
    let week3 = document.createElement('div');
    week3.id = "week3";
    week3.classList.add('week');
    let spanWeek3 = document.createElement('span');
    spanWeek3.textContent = "Week 3";
    week3.appendChild(spanWeek3);
  // WEEK 4
    let week4 = document.createElement('div');
    week4.id = "week4";
    week4.classList.add('week');
    let spanWeek4 = document.createElement('span');
    spanWeek4.textContent = "Week 4";
    week4.appendChild(spanWeek4);

    // WEEK 5
    let week5 = document.createElement('div');
    week5.id = "week5";
    week5.classList.add('week');
    let spanWeek5 = document.createElement('span');
    spanWeek5.textContent = "Week 5";
    week5.appendChild(spanWeek5);

    monthDiv.appendChild(week1);
    monthDiv.appendChild(week2);
    monthDiv.appendChild(week3);
    monthDiv.appendChild(week4);
    monthDiv.appendChild(week5);
  // create WEEKS DIVS

  // DAYS P
  for (let i = 0; i < month.week1; i++) {
    var pElement = document.createElement('p');
    pElement.textContent = 'Day ' + (i + 1);
    pElement.classList.add('days');
    week1.appendChild(pElement);
}

for (let i = 0; i < month.week2; i++) {
  var pElement = document.createElement('p');
  pElement.textContent = 'Day ' + (i + 1);
  pElement.classList.add('days');
  week2.appendChild(pElement);
}

for (let i = 0; i < month.week3; i++) {
  var pElement = document.createElement('p');
  pElement.textContent = 'Day ' + (i + 1);
  pElement.classList.add('days');
  week3.appendChild(pElement);
}

for (let i = 0; i < month.week4; i++) {
  var pElement = document.createElement('p');
  pElement.textContent = 'Day ' + (i + 1);
  pElement.classList.add('days');

  week4.appendChild(pElement);
}

for (let i = 0; i < month.week5; i++) {
  var pElement = document.createElement('p');
  pElement.textContent = 'Day ' + (i + 1);
  pElement.classList.add('days');
  week5.appendChild(pElement);
}

containerData.appendChild(monthDiv);
};


renderMonth(monthsData[2]);

// FUNCTION TO RENDER MONTH
formAddMonth.addEventListener("submit", (e) => {
  e.preventDefault();
  createMonth();
});



// CODIGO DE PRUEBA!


