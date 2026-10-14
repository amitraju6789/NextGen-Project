// State Variables
let tasks = [];
let currentFilter = 'all';

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const searchInput = document.getElementById('searchInput');
const taskList = document.getElementById('taskList');
const filterBtns = document.querySelectorAll('.filter-btn');

// Add Task Function
const addTask = () => {
    const text = taskInput.value.trim();
    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
};

// Toggle Complete
const toggleComplete = (id) => {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
};

// Edit Task
const editTask = (id) => {
    const task = tasks.find(t => t.id === id);
    const newText = prompt('Edit task:', task.text);
    if (newText !== null && newText.trim() !== '') {
        task.text = newText.trim();
        renderTasks();
    }
};

// Delete Task
const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
};

// Render Tasks to DOM
const renderTasks = () => {
    taskList.innerHTML = '';
    const query = searchInput.value.toLowerCase();

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.text.toLowerCase().includes(query);
        if (currentFilter === 'pending') return matchesSearch && !task.completed;
        if (currentFilter === 'completed') return matchesSearch && task.completed;
        return matchesSearch;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;

        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="action-btn complete-btn" onclick="toggleComplete(${task.id})">
                    ${task.completed ? 'Undo' : 'Done'}
                </button>
                <button class="action-btn edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
};

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

searchInput.addEventListener('input', renderTasks);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// Expose functions to window for inline onclick handlers
window.toggleComplete = toggleComplete;
window.editTask = editTask;
window.deleteTask = deleteTask;

// Initial render
renderTasks();