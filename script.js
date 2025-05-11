// Add event listener to hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('header nav ul').classList.toggle('show');
});

// Add event listener to create task button
document.querySelector('.create-task-btn').addEventListener('click', () => {
    // Create a new task element
    const task = document.createElement('li');
    task.innerHTML = `
        <input type="checkbox" id="task-${document.querySelectorAll('.task-list li').length + 1}">
        <label for="task-${document.querySelectorAll('.task-list li').length + 1}">Task ${document.querySelectorAll('.task-list li').length + 1}</label>
    `;

    // Add the new task to the task list
    document.querySelector('.task-list').appendChild(task);
});

// Add event listener to add task form
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the task name from the input field
    const taskName = document.querySelector('.task-input').value;

    // Create a new task element
    const task = document.createElement('li');
    task.innerHTML = `
        <input type="checkbox" id="task-${document.querySelectorAll('.task-list li').length + 1}">
        <label for="task-${document.querySelectorAll('.task-list li').length + 1}">${taskName}</label>
    `;

    // Add the new task to the task list
    document.querySelector('.task-list').appendChild(task);

    // Clear the input field
    document.querySelector('.task-input').value = '';
});