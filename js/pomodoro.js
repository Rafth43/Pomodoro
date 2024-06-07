const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = documen.querySelector('#bAdd');
const itTask = documen.querySelector('#itTask');
const form = documen.querySelector('#form');

form.addEventlistener('submit', e => {
    e.preventDefault();
    if (itTask.value != '') {
        createTask(itTask.value);
        itTask.value = '';
        renderTasks();
    }
});

function createTask(value) { 
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false,
    };
    tasks.unshift(newTask);
}

function renderTasks(){
    const html = tasks.map(task => {
        return `
        <div class="task">
            <div class="completed">${task.completed ?`<span class="done"></span>` :`<button class="start-button" data-id="${task.id}">Start</button>`}</div>
            <div class="title">${task.title}</div>
        </div>
        `;
    });

    const tasksContainer = document.querySelector('#tasks');
    asksContainer.innerHTML = html.join();
}