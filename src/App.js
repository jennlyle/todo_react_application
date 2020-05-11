import React, { useState } from 'react';
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner"
import TasksLeftToDo from "./TasksLeftToDo/TasksLeftToDo"
import AddTask from "./AddTask/AddTask"
import TaskItem from "./TaskItem/TaskItem"
import CompletedTask from "./CompletedTask/CompletedTask"

import './App.css';

function App() {

  const[loading, setLoading] = useState(false);

  const [ tasks, setTasks ] = useState([
    { key: 0, text: "Task 1 Text: Task 1 consists of having to do the following things in order to fill up some space.", completed: false },
    { key: 1, text: "Task 2 Text: Task 2 doesn't take up as much space.", completed: false },
    { key: 2, text: "Task 3 Text: Task 3 should take up about as much space as Task 1 should take.", completed: false },
    { key: 3, text: "Task 4 Text is super short.", completed: false },
    { key: 4, text: "Task 5 Text: I'm confused on why the 'completed' button has a shadow.", completed: false },
    { key: 5, text: "Task 6 Text: I also wish I could make the 'completed' and 'delete' buttons flush with the bottom of each 'card' in wide view.", completed: false },
    { key: 6, text: "Task 7 Text: And I got a lot of criticism for the color scheme I picked, but I always depended on someone else to get the colors right.", completed: false },
    { key: 7, text: "Completed Task 1: Look at this completed task.  Job well done!", completed: true },
    { key: 8, text: "Completed Task 2: let's have some text and some back patting to show how cool this app can be.", completed: true },
    { key: 9, text: "Completed Task 3: I wonder if these would be time stamped in the database, or if that is excess to requirements.", completed: true },
    { key: 10, text: "Completed Task 4: I think I might make the border card colors a bit closer to the background.", completed: true },
    { key: 11, text: "Completed Task 5: fifth task to edge-test the bootstrap css", completed: true }
  ]);


  const activeTasks = tasks.filter(task => !task.completed);

  const completedTasks = tasks.filter(task => task.completed);

  return (

    <div className="App">
      { /* HEADER */ }
      <header className="container">
        <h1>My To-Do List</h1>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <TasksLeftToDo count={activeTasks.length}/>
        )}

      </header>

      <div className="container">
        <div className="row">
          <div className="container-fluid">
            <AddTask />
          </div>
        </div>
      </div>

      { /* LIST ACTIVE TASKS COMPONENT */ }
      <p clear="all" />
      <div className="container">
          <div className="row">
          { /* EACH ACTIVE LIST COMPONENT */ }
            {activeTasks.map(task => <TaskItem  key={ task.key } text={ task.text } completed={task.completed}/>)}
          </div>
      </div>

      { /* LIST COMPLETED TASKS COMPONENT */ }
      <p clear="all" />
      <div className="container">
        <div className="row">
          <div className="container-fluid">
            <h2>
              Completed Tasks
            </h2>
            <h2>You have finished { completedTasks.length } tasks.</h2>
          </div>
        </div>

          <div className="row">
          { /* EACH COMPLETED LIST COMPONENT */ }
          {completedTasks.map(task => <CompletedTask key={ task.key } text={ task.text } completed={task.completed}/>)}
          </div>
      </div>

      { /* FOOTER */ }
      <p clear="all" />
       <div className="row">
          <div className="container-fluid">
              <footer className="blockquote-footer">
                  &copy; 
                      <cite title="Source Title">
                          Jennifer Calland
                      </cite> 
                      &nbsp; 2020
              </footer> 
          </div>
      </div>

      <a
        className="App-link"
        href="https://reactjs.org"
        rel="noopener no referrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
