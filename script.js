document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            if (task.completed) {
                li.classList.add('completed');
            }
            li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <button class="complete-btn" data-index="${index}">Completar</button>
                <button class="delete-btn" data-index="${index}">Eliminar</button>
            `;
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const text = taskInput.value.trim();
        if (text) {
            tasks.push({ text, completed: false });
            taskInput.value = '';
            saveTasks();
            renderTasks();
        }
    }

    function toggleComplete(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('complete-btn')) {
            const index = e.target.getAttribute('data-index');
            toggleComplete(index);
        } else if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            deleteTask(index);
        }
    });

    renderTasks();
});