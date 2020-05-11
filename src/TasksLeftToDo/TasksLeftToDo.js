import React from 'react';
import './TasksLeftToDo.css';

function TasksLeftToDo(props) {
  return (
    <h2>You have { props.count } tasks to do.</h2>
  );
}
export default TasksLeftToDo;