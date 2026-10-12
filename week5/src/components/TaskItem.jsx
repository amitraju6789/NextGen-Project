import React from 'react';

function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <span className="task-title">{task.title}</span>
        <span className={`badge ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>
      <div className="task-actions">
        <button 
          className="toggle-btn" 
          onClick={() => onToggleComplete(task.id)}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button 
          className="delete-btn" 
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;