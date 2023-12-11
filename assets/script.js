// Select the root div from the HTML.
const rootEl = $("#root");

// Render the four core sections of the page.
const heroEl = $("<header>");
const cardEl = $("<section>");
const modalEl = $("<section>");
const tableEl = $("<section>");
rootEl.append(heroEl, cardEl, modalEl, tableEl);

// Array to store projects, will move to local storage eventually.
const storedProjects = [];

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
modalHeaderEl.text("New Project");

// Build the elements for the form using jQuery, assign attributes and text values
const projectNameLabel = $("<label>").attr("for", "project-name").text("Project Name: ");
const projectNameInput = $("<input>").attr({id: "project-name", type: "text", placeholder: "Project name here"});
const projectTypeLabel = $("<label>").attr("for", "project-type").text("Project type: ");
const projectTypeInput = $("<select>").attr({name: "project-type", id: "project-type", form: "new-project-form"});
const projectCostLabel = $("<label>").attr("for", "project-cost").text("Cost: ");
const projectCostInput = $("<input>").attr({id: "project-cost", type: "number", placeholder: "0.00"})
// date - going to leave this for now

// All possible project types; iterate through and build a <option> for each.
const options = ["Big Project", "Medium Project", "Small Project"];

function buildOptions () {
    for (let i = 0; i < options.length; i++) {
        const newOptionEl = $("<option>");
        newOptionEl.attr("value", options[i]);
        newOptionEl.text(options[i]);

        projectTypeInput.append(newOptionEl);
    }
}

// Create element for for submit.
const submitButtonEl = $("<button>").text("Create New Project");

// Form submit handling function. 
function handleFormSubmit (event) {
    event.preventDefault();

    const newProject = {
        name: projectNameInput.val(),
        type: projectTypeInput.val(),
        cost: projectCostInput.val()
    };

    storedProjects.push(newProject);
    buildNewProjectEl(newProject);

    $('input[type="text"]').val('');
    $('select').val("Big Project");
    $('input[type="number"]').val('0.00');
}

// Append all form fields to the HTML element / render form fields.
formEl.append(projectNameLabel, projectNameInput, projectTypeLabel, projectTypeInput, projectCostLabel, projectCostInput, submitButtonEl);
buildOptions();

// Event listener for form submit.
formEl.on("submit", handleFormSubmit);

// Table section: table of existing projects.
const tableHeaderEl = $("<h2>");
const projectsEl = $("<table>");

tableEl.attr("class", "tableCard");
tableEl.append(tableHeaderEl, projectsEl);

tableHeaderEl.text("Current Projects");
projectsEl.append("<tr><th>Project Name</th><th>Project Type</th><th>Cost</th></tr>");

function buildNewProjectEl (newProject) {
    const tableRow = $("<tr>");
    const name = $("<td>").text(newProject.name);
    const type = $("<td>").text(newProject.type);
    const cost = $("<td>").text(newProject.cost);
    tableRow.append(name, type, cost);

    projectsEl.append(tableRow);
}