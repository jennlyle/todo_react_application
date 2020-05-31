import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTask from "./AddTask/AddTask"
import TaskItem from "./TaskItem/TaskItem"
import CompletedTask from "./CompletedTask/CompletedTask"

import './App.css';

function App() {

  const [ tasks, setTasks ] = useState([
    { id: uuidv4(), text: "This task consists of having to do the following things in order to fill up some space.", completed: false },
    { id: uuidv4(), text: "This task doesn't take up as much space.", completed: false },
    { id: uuidv4(), text: "This task should take up about as much space as Task 1 should take.", completed: false },
    { id: uuidv4(), text: "This task is super short.", completed: false },
    { id: uuidv4(), text: "I'm confused on why the 'completed' button has a shadow.", completed: false },
    { id: uuidv4(), text: "I also wish I could make the 'completed' and 'delete' buttons flush with the bottom of each 'card' in wide view.", completed: false },
    { id: uuidv4(), text: "And I got a lot of criticism for the color scheme I picked, but I always depended on someone else to get the colors right.", completed: false },
    { id: uuidv4(), text: "Look at this completed task.  Job well done!", completed: true },
    { id: uuidv4(), text: "Let's have some text and some back patting to show how cool this app can be.", completed: true },
    { id: uuidv4(), text: "I wonder if these would be time stamped in the database, or if that is excess to requirements.", completed: true },
    { id: uuidv4(), text: "I think I might make the border card colors a bit closer to the background.", completed: true },
    { id: uuidv4(), text: "This fifth task to edge-test the bootstrap css", completed: true }
  ]);

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function completeTask(id){
    const updatedTasks = tasks.map(task => {
      if (task.id === id){
        task.completed = true;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function activateTask(id){
    const updatedTasks = tasks.map(task => {
      if (task.id === id){
        task.completed = false;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function addTask(text){
    const newTask = {
      id: uuidv4(), 
      text: text, 
      completed: false 
    }
    const updatedTasks = [ ...tasks, newTask ];
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <header className="container">
        <h1>My To-Do List</h1>
      </header>

      <div className="container">
        <div className="row task">
        <div className="col-md-8">
            <AddTask addTask= { addTask } />
          </div>
          <div className="col-md-4 text-right">
            <h2>
                You have { activeTasks.length } { activeTasks.length === 1 ? "task" : "tasks" } to do
            </h2>
          </div>
        </div>
      </div>

      <p></p>

      <div className="container">

        <div className="row task">
          <div className="col-md-12">
            <ol>
              { activeTasks.map(task => <TaskItem 
                completeTask = { completeTask } 
                deleteTask={ deleteTask }  
                id={ task.id } 
                key={ task.id }
                text={ task.text } 
                />)}
            </ol>
          </div>
        </div>

        <p></p>

        <div className="row task">
          <div className="col-md-12">
          <ol>
            {completedTasks.map(task => <CompletedTask 
            activateTask = { activateTask } 
            deleteTask= { deleteTask } 
            id={task.id } 
            key={ task.id } 
            text={ task.text }
            />)}
          </ol>
          </div>
        </div>
        
      </div>

      <div className="container text-center">
        <cite>&copy; Jennifer Calland 2020</cite> &nbsp;
      </div>
    </div>
  );
}

export default App;