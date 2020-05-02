import React from 'react';
import './CompletedTask.css';

function CompletedTask(props) {
  return (
    <div className="col-sm-3">
      <p className="task-item-completed__text">{ props.text }</p>
    </div>
  );
}

export default CompletedTask;