import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div className="task-item">
        <p className="task-item__text">{ props.text }</p>
        <button className="task-item__done-button">Done</button>
        <button className="task-item__delete-button">Delete</button>
    </div>
  );
}

export default TaskItem;

