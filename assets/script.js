// Select the root div from the HTML.
const rootEl = $("#root");

// Render the four core sections of the page.
const heroEl = $("<header>");
const cardEl = $("<section>");
const modalEl = $("<section>");
const tableEl = $("<section>");
rootEl.append(heroEl, cardEl, modalEl, tableEl);

// Hero section: render welcome text and display current date.
const welcomeEl = $("<h1>");
const dateEl = $("<time>"); // Might change to time html tag

heroEl.attr("class", "hero");
heroEl.append(welcomeEl, dateEl);

welcomeEl.text("Welcome to the Project Tracker");
dateEl.text("Timer placeholder"); // This will be replaced with a function that uses moment.js to display time.

// Instruction card section: header, instructions, and button to launch modal.
const cardHeaderEl = $("<h2>");
const instructionsEl = $("<p>");
const newProjectButton = $("<button>");

cardEl.attr("class", "instructionCard");
cardEl.append(cardHeaderEl, instructionsEl, newProjectButton);

cardHeaderEl.text("How to Use");
instructionsEl.text("Click the button below, and complete the form, to add a new project.");
newProjectButton.text("New Project");

// Modal section: form for a new project.
modalEl.text("This section will contain a form");

// Table section: table of existing projects.
tableEl.text("This section will show a table");
