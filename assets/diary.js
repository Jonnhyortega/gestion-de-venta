const formAddMonth = document.getElementById("add-month");
const yearInput = document.getElementById("year");
const nameMonthSelect = document.getElementById("name-month");
const weeksTotalsSelect = document.getElementById("weeks-totals");
const week1 = document.getElementById("week1");
const week2 = document.getElementById("week2");
const week3 = document.getElementById("week3");
const week4 = document.getElementById("week4");
const week5 = document.getElementById("week5");
const fechaCreacionInput = document.getElementById('fechaCreacion');
const submitButton = document.querySelector('input[type="submit"]');
const containerData = document.querySelector("#container-data");
const renderedMonth = document.getElementById('rendered-month');
const showMonth = document.getElementById('mostrar-mes');
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
    id: Date.now()
  };
  mesesDeTrabajo.push(month);
  saveMesesDeTrabajo();
};

/** FUNCTION TO RENDER MONTH */ 
const renderMonths = (month) => {

    semana1 = month.semana1;
    semana2 = month.semana2;
    semana3 = month.semana3;
    semana4 = month.semana4;
    semana5 = month.semana5;
    console.log(semana1);

    weekDiv1 = document.createElement('div');
    weekDiv1.textContent = 'Semana 1';
    renderedMonth.appendChild(weekDiv1);

    semana1.forEach(dia => {
        let divWeek = document.createElement('div');
        divWeek.classList.add('week');
        
        let day = document.createElement('p');
        day.classList.add('days');
        day.textContent = `${dia}`

        weekDiv1.appendChild(divWeek);
        divWeek.appendChild(day);
    });


    weekDiv2 = document.createElement('div');
    weekDiv2.textContent = 'Semana 2';
    renderedMonth.appendChild(weekDiv2);

    semana2.forEach(dia => {
        let divWeek = document.createElement('div');
        divWeek.classList.add('week');
        

        let day = document.createElement('p');
        day.classList.add('days');

        day.textContent = `${dia}`

        renderedMonth.appendChild(divWeek);
        weekDiv2.appendChild(day);
    });


    weekDiv3 = document.createElement('div');
    weekDiv3.textContent = 'Semana 3';
    renderedMonth.appendChild(weekDiv3);
    semana3.forEach(dia => {
        let divWeek = document.createElement('div');
        divWeek.classList.add('week');
        

        let day = document.createElement('p');
        day.classList.add('days');

        day.textContent = `${dia}`

        renderedMonth.appendChild(divWeek);
        weekDiv3.appendChild(day);
    });


    weekDiv4 = document.createElement('div');
    weekDiv4.textContent = 'Semana 4';
    renderedMonth.appendChild(weekDiv4);
    semana4.forEach(dia => {
        let divWeek = document.createElement('div');
        divWeek.classList.add('week');
        

        let day = document.createElement('p');
        day.classList.add('days');
        day.textContent = `${dia}`

        renderedMonth.appendChild(divWeek);
        weekDiv4.appendChild(day);
    });



    weekDiv5 = document.createElement('div');
    weekDiv5.textContent = 'Semana 5';
    renderedMonth.appendChild(weekDiv5);
    semana5.forEach(dia => {
        let divWeek = document.createElement('div');
        divWeek.classList.add('week');

        let day = document.createElement('p');
        day.classList.add('days');
        day.textContent = `${dia}`

        renderedMonth.appendChild(divWeek);
        weekDiv5.appendChild(day);
    });
}


/** FUNCTION TO RENDER ALL MONTHS*/

/** FUNCTION TO RENDER CURRENT MONTH*/ 
const currentMonth = () => {
    const ultimoMes = mesesDeTrabajo[mesesDeTrabajo.length - 1];
    renderMonths(ultimoMes)};



/**LISTENER TO SUBMIT FORM ADD MONTH */ 
formAddMonth.addEventListener("submit", (e) => {
    e.preventDefault();
    createMonth();
})

renderMonths(mesesDeTrabajo[0])