import React, { useState, useRef } from 'react';
import './TaskCard.scss';

const TaskCard = ({ task, onDragStart, onDragEnd, onStatusChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);

  const handleDragStart = (e) => {
    setIsDragging(true);
    
    // Add ghost image effect
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const ghostImage = cardRef.current.cloneNode(true);
      ghostImage.style.position = 'absolute';
      ghostImage.style.top = '-1000px';
      ghostImage.style.opacity = '0.8';
      document.body.appendChild(ghostImage);
      e.dataTransfer.setDragImage(ghostImage, rect.width / 2, rect.height / 2);
      
      // Clean up the ghost element after drag
      setTimeout(() => {
        document.body.removeChild(ghostImage);
      }, 0);
    }
    
    onDragStart(e, task);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEnd();
  };

  return (
    <div
      ref={cardRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`task-card ${isDragging ? 'dragging' : ''}`}
    >
      {/* Header with tag and due date */}
      <div className="task-card__header">
        <span className="task-card__tag">
          {task.tag.label}
        </span>
        <span className="task-card__due-date">{task.dueDate}</span>
      </div>
      
      {/* Main content area */}
      <div className="task-card__content">
        {/* Title and description */}
        <div className="task-card__main">
          <h5 className="task-card__title">{task.title}</h5>
          <p className="task-card__description">{task.description}</p>
        </div>
        
        {/* Footer with assignees and progress */}
        <div className="task-card__footer">
          <div className="task-card__assignees">
            {[...Array(task.assignees)].map((_, i) => (
              <div 
                key={i}
                className="task-card__assignee"
                style={{
                  backgroundColor: `hsl(var(--muted) / ${0.8 - i * 0.1})`
                }}
              ></div>
            ))}
          </div>
          
          {task.progress.completed === task.progress.total ? (
            <span className="task-card__progress task-card__progress--completed">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {task.progress.completed}/{task.progress.total}
            </span>
          ) : (
            <span className="task-card__progress">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {task.progress.completed}/{task.progress.total}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
