const rootEl = $('#root');

const heroEl = $('<header>');

heroEl.attr('class', 'hero');
heroEl.text("Welcome to the Project Tracker");
// rootEl.append(heroEl);

const cardEl = $('<section>');
cardEl.text('Hi')
rootEl.append(heroEl, cardEl);