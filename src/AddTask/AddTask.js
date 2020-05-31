import React, { Fragment, useState } from 'react';
import './AddTask.css';

function AddTask(props) {
  const [text, setText] = useState("");

  function handleTextChange(event){
    setText(event.target.value);
  }

  function handleAddTaskClick(){
    props.addTask(text);
  }

  return (
        <Fragment>
        <form>
        <input 
            type="text" 
            name="newTask" 
            onChange={ handleTextChange }  
            value= { text }
            maxLength="64"
          /> &nbsp;
        <button 
            type="button"
            className="btn btn-primary btn-lg"
            onClick={ handleAddTaskClick }
            >Add New Task</button>
        </form>
        </Fragment>
  );
}
export default AddTask;