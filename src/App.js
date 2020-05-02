import React from 'react';
import TaskItem from "./TaskItem/TaskItem"
import CompletedTask from "./CompletedTask/CompletedTask"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is my header
      </header>

      <TaskItem text="Task 1" />

      <TaskItem text="Task 2" />

      <TaskItem text="Task 3" />

      <TaskItem text="Task 4" />

      <TaskItem text="Task 5" />

      <p>My completed tasks</p>

      <CompletedTask text="Completed Task 1" />
      <CompletedTask text="Completed Task 2" />
      <CompletedTask text="Completed Task 3" />
      <CompletedTask text="Completed Task 4" />
      <CompletedTask text="Completed Task 5" />


    </div>
  );
}

export default App;
