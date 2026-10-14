require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB Connection URI (Aap apna MongoDB Atlas connection string yahan daal sakte hain)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/nextgen-tasks';

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define Task Schema & Model
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

// 0. Root Home Route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the MongoDB-integrated Task Management API (Week 15)',
        endpoints: {
            getAllTasks: 'GET /tasks',
            getTaskById: 'GET /tasks/:id',
            createTask: 'POST /tasks',
            updateTask: 'PUT /tasks/:id',
            deleteTask: 'DELETE /tasks/:id'
        }
    });
});

// 1. GET: Fetch all tasks from MongoDB
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ success: true, count: tasks.length, data: tasks });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 2. GET: Fetch a single task by ID
app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
        res.status(200).json({ success: true, data: task });
    } catch (error) {
        res.status(400).json({ success: false, error: 'Invalid Task ID format' });
    }
});

// 3. POST: Create a new task in MongoDB
app.post('/tasks', async (req, res) => {
    try {
        const { title, description, status } = req.body;
        if (!title) return res.status(400).json({ success: false, error: 'Task title is required' });

        const newTask = await Task.create({ title, description, status });
        res.status(201).json({ success: true, message: 'Task created successfully in Database', data: newTask });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 4. PUT: Update an existing task by ID
app.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        if (!updatedTask) return res.status(404).json({ success: false, error: 'Task not found' });
        res.status(200).json({ success: true, message: 'Task updated successfully', data: updatedTask });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// 5. DELETE: Remove a task by ID
app.delete('/tasks/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ success: false, error: 'Task not found' });
        res.status(200).json({ success: true, message: 'Task deleted successfully', data: deletedTask });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Week 15 MongoDB API Server is running at http://localhost:${PORT}`);
});