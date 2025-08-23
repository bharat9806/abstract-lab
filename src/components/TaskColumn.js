import React, { useState } from 'react';
import TaskCard from './TaskCard';
import './TaskColumn.scss';

const TaskColumn = ({
  column,
  onDrop,
  onDragOver,
  onDragLeave,
  onTaskDragStart,
  onTaskDragEnd,
  onStatusChange
}) => {
  const [isOver, setIsOver] = useState(false);
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
    onDragOver(e);
  };
  
  const handleDragLeave = (e) => {
    setIsOver(false);
    onDragLeave(e);
  };
  
  const handleDrop = (e) => {
    setIsOver(false);
    onDrop(e, column.id);
  };

  return (
    <div 
      className={`task-column ${isOver ? 'task-column--over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="task-column__header">
        <div className="task-column__title-section">
          <span className="task-column__indicator"></span>
          <h4 className="task-column__title">{column.title}</h4>
          <span className="task-column__count">
            {column.tasks.length}
          </span>
        </div>
        <div className="task-column__menu">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="task-column__content">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDragStart={onTaskDragStart}
            onDragEnd={onTaskDragEnd}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
