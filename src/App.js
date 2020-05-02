import React from 'react';
import AddTask from "./AddTask/AddTask"
import TaskItem from "./TaskItem/TaskItem"
import CompletedTask from "./CompletedTask/CompletedTask"
import './App.css';

function App() {
  return (
    <div className="App">

      { /* HEADER */ }
      <header className="container">
        <h1>My To-Do List</h1>
      </header>



      { /* NUMBER OF ACTIVE TASKS */ }
      <p clear="all" />
      <p>
        <h2>You have X tasks to do.</h2>
      </p>




      { /* ADD TASK COMPONENT */ }
      <p clear="all" />

      <div className="container">
        <div className="row">
          <div className="container-fluid">
            <AddTask>

            </AddTask>
          </div>
        </div>
      </div>







      { /* LIST ACTIVE TASKS COMPONENT */ }
      <p clear="all" />
      <div className="container">
          <div className="row">
          { /* EACH ACTIVE LIST COMPONENT */ }
            <TaskItem text="Task 1 Text: Task 1 consists of having to do the following things 
                      in order to fill up some space." />
            <TaskItem text="Task 2 Text: Task 2 doesn't take up as much space." />
            <TaskItem text="Task 3 Text: Task 3 should take up about as much space as Task 1
                        should take." />
            <TaskItem text="Task 4 Text is super short." />
            <TaskItem text="Task 5 Text: I'm confused on why the 'completed' button has a shadow." />
            <TaskItem text="Task 6 Text: I also wish I could make the 'completed' and 'delete' 
                    buttons flush with the bottom of each 'card' in wide view." />
            <TaskItem text="Task 7 Text: And I got a lot of criticism for the color scheme I 
                    picked, but I always depended on someone else to get the colors right." />
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
          </div>
        </div>

          <div className="row">
          { /* EACH COMPLETED LIST COMPONENT */ }
            <CompletedTask text="Completed Task 1: Look at this completed task.  Job 
            well done!" />
            <CompletedTask text="Completed Task 2: let's have some text and some back 
            patting to show how cool this app can be." />
            <CompletedTask text="Completed Task 3: I wonder if these would be time stamped
            in the database, or if that is excess to requirements." />
            <CompletedTask text="Completed Task 4: I think I might make the border card 
            colors a bit closer to the background." />
            <CompletedTask text="Completed Task 5: fifth task to edge-test the bootstrap css" />
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



      

      



















    </div>
  );
}

export default App;
