import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React Fundamentals', priority: 'High', completed: true },
    { id: 2, title: 'Build React Task Manager App', priority: 'Medium', completed: false }
  ]);

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>React Task Manager ⚡</h1>
        <p>Veda Technologies - Week 5 React Fundamentals</p>
      </header>

      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;