const renderCurrentMonth = (lastMonth) => {
  renderedMonth.innerHTML = "";

  semana1 = lastMonth.semana1;
  semana2 = lastMonth.semana2;
  semana3 = lastMonth.semana3;
  semana4 = lastMonth.semana4;
  semana5 = lastMonth.semana5;

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
