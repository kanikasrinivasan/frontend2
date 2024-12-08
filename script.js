document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
  
    if (task) {
      const taskList = document.getElementById('taskList');
      const listItem = document.createElement('li');
      listItem.innerHTML = `${task} <button class="deleteTaskBtn">Delete</button>`;
      taskList.appendChild(listItem);
  
      taskInput.value = '';
  
      listItem.querySelector('.deleteTaskBtn').addEventListener('click', function () {
        taskList.removeChild(listItem);
      });
    }
  });
  