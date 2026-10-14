const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// In-memory database (Task storage array)
let tasks = [
    { id: 1, title: 'Learn Express.js Routing', description: 'Understand endpoints and handlers', status: 'completed' },
    { id: 2, title: 'Build Task Management API', description: 'Implement full CRUD operations', status: 'in-progress' }
];

// 0. ROOT / HOME ROUTE (Added to fix the "Cannot GET /" error in browser)
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the Task Management REST API (Week 14)',
        author: 'Amit Kumar Singh',
        endpoints: {
            getAllTasks: 'GET /tasks',
            getTaskById: 'GET /tasks/:id',
            createTask: 'POST /tasks',
            updateTask: 'PUT /tasks/:id',
            deleteTask: 'DELETE /tasks/:id'
        }
    });
});

// 1. GET: Fetch all tasks
app.get('/tasks', (req, res) => {
    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
});

// 2. GET: Fetch a single task by ID
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ success: false, error: 'Task not found' });
    }
    res.status(200).json({ success: true, data: task });
});

// 3. POST: Create a new task
app.post('/tasks', (req, res) => {
    const { title, description, status } = req.body;
    
    if (!title) {
        return res.status(400).json({ success: false, error: 'Task title is required' });
    }

    const nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const newTask = {
        id: nextId,
        title,
        description: description || '',
        status: status || 'pending'
    };

    tasks.push(newTask);
    res.status(201).json({ success: true, message: 'Task created successfully', data: newTask });
});

// 4. PUT: Update an existing task by ID
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ success: false, error: 'Task not found' });
    }

    const { title, description, status } = req.body;
    if (title) task.title = title;
    if (description !== undefined) task.description = description;
    if (status) task.status = status;

    res.status(200).json({ success: true, message: 'Task updated successfully', data: task });
});

// 5. DELETE: Remove a task by ID
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).json({ success: false, error: 'Task not found' });
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    res.status(200).json({ success: true, message: 'Task deleted successfully', data: deletedTask[0] });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Express Task API is running at http://localhost:${PORT}`);
});