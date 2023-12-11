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

let isFormDisplayed = false;
newProjectButton.on("click", () => {
    if (isFormDisplayed) {
        modalEl.css("display", "none");
    } else {
        modalEl.css("display", "block");
    }
    isFormDisplayed = !isFormDisplayed;
});

// Modal section: form for a new project.
const modalHeaderEl = $("<h2>");
const formEl = $("<form>");

modalEl.attr("class", "modal");
formEl.attr("id", "new-project-form");
modalEl.append(modalHeaderEl, formEl);

const projectNameLabel = $("<label>").attr("for", "project-name").text("Project Name: ");
const projectNameInput = $("<input>").attr({id: "project-name", type: "text", placeholder: "Project name here"});
const projectTypeLabel = $("<label>").attr("for", "project-type").text("Project type: ");
const projectTypeInput = $("<select>").attr({name: "project-type", id: "project-type", form: "new-project-form"});

const options = ["Big Project", "Medium Project", "Small Project"];

function buildOptions () {
    for (let i = 0; i < options.length; i++) {
        const newOptionEl = $("<option>");
        newOptionEl.attr("value", options[i]);
        newOptionEl.text(options[i]);

        projectTypeInput.append(newOptionEl);
    }
}

const projectCostLabel = $("<label>").attr("for", "project-cost").text("Cost: ");
const projectCostInput = $("<input>").attr({id: "project-cost", type: "number", placeholder: "0.00"})

const submitButtonEl = $("<button>").text("Create New Project");

function handleFormSubmit (event) {
    event.preventDefault();

    console.log("Project name: " + projectNameInput.val());
    console.log("Project type: " + projectTypeInput.val());
    console.log("Project cost: " + projectCostInput.val());

    $('input[type="text"]').val('');
    $('input[type="number"]').val('0.00');
}

modalHeaderEl.text("New Project");
formEl.append(projectNameLabel, projectNameInput, projectTypeLabel, projectTypeInput, projectCostLabel, projectCostInput, submitButtonEl);
formEl.on("submit", handleFormSubmit);
buildOptions();
// form - project name
// form - type of project, select drop down
// hourly wage
// date - going to leave this for now

// Table section: table of existing projects.
const tableHeaderEl = $("<h2>");
const projectsEl = $("<table>");

tableEl.attr("class", "tableCard");
tableEl.append(tableHeaderEl, projectsEl);

tableHeaderEl.text("Current Projects");
projectsEl.append("<th>Mock</th><th>Project</th><th>Table</th>");