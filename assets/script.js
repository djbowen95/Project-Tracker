// Root div to contain all sections.
const rootEl = $("#root");

// Four core sections of the page.
const heroEl = $("<header>");
const cardEl = $("<section>");
const modalEl = $("<section>");
const tableEl = $("<section>");
rootEl.append(heroEl, cardEl, modalEl, tableEl);

// Hero element scripts. 
const welcomeEl = $("<h1>");
const dateEl = $("<h2>");

heroEl.attr("class", "hero");
heroEl.append(welcomeEl, dateEl);

welcomeEl.text("Welcome to the Project Tracker");
dateEl.text("Timer placeholder"); // This will be replaced with a function that uses moment.js to display time.


cardEl.text("This section will contain instructions");

modalEl.text("This section will contain a form");

tableEl.text("This section will show a table");
