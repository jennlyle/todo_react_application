import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div className="col-sm-3">
      <p>{ props.text }</p>
      <button className="tasktn btn-success">Completed</button>
        <button className="btn btn-warning">Delete</button>
    </div>
  );
}
export default TaskItem;