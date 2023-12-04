const rootEl = $("#root");

const heroEl = $("<header>");
const cardEl = $("<section>");
const modalEl = $("<section>");
const tableEl = $("<section>");
rootEl.append(heroEl, cardEl, modalEl, tableEl);

heroEl.attr("class", "hero");
heroEl.text("Welcome to the Project Tracker");

cardEl.text("This section will contain instructions");

modalEl.text("This section will contain a form");

tableEl.text("This section will show a table");
