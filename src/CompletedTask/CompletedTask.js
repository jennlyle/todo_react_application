import React from 'react';
import './CompletedTask.css';

function CompletedTask(props) {
  return (
    <div className="task-item-completed">
        <p className="task-item-completed__text">{ props.text }</p>
    </div>
  );
}

export default CompletedTask;

