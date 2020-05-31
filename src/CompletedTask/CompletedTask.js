import React from 'react';
import './CompletedTask.css';

function CompletedTask(props) {
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-8 tasks-completed">
          <li>
          { props.text }</li>
        </div>
        <div className="col-md-4">
              <button 
                className="btn btn-outline-primary btn-lg" 
                onClick={ () => props.activateTask(props.id) }>
                  Activate
              </button> &nbsp;
              <button 
                className="btn btn-outline-warning btn-lg" 
                onClick={ () => props.deleteTask(props.id) }>
                  Delete
              </button> 
        </div>
      </div>
    </div>
  );
}

export default CompletedTask;