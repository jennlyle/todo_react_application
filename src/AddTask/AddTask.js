import React from 'react';
import './AddTask.css';

function AddTask() {
  return (
    <div className="col-sm-3">
        <form name="" action="">
            <input type="text" name="newTask"></input>
            <button className="btn btn-primary">Add New Task</button>
        </form>      
    </div>
  );
}
export default AddTask;