import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-8">
          <li>
            { props.text }
            {/* {console.log(props)} */}
          </li>
        </div>
        <div className="col-md-4">
              <button 
                className="btn btn-outline-success btn-lg" 
                onClick={ () => props.completeTask(props.task_id) }>
                  Completed
              </button> &nbsp; 
              <button 
                className="btn btn-outline-warning btn-lg" 
                onClick={ () => props.deleteTask(props.task_id) }>
                  Delete
              </button> 
        </div>
      </div>
    </div>
  );
}
export default TaskItem;