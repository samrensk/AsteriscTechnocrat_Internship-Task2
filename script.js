
let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a valid task.');
    return;
  }

  tasks.push(taskText);
  displayTasks();
  taskInput.value = '';
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement('li');
    listItem.textContent = task;
    listItem.addEventListener('click', () => deleteTask(i));
    taskList.appendChild(listItem);
  }
}
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

displayTasks();
