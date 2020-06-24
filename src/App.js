import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import AddTask from "./AddTask/AddTask";
import TaskItem from "./TaskItem/TaskItem";
import CompletedTask from "./CompletedTask/CompletedTask";


import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading ] = useState(false);

    // Play with Cookies
    Cookies.set('user_id', '1', { expires: 1 });
    //Cookies.get('user_id');
    //console.log("My user_ID is " + Cookies.get('user_id'));
    //Cookies.remove('user_id');

  useEffect(() => {
    setLoading(true);
    axios
    .get(`https://q6to3w78jj.execute-api.eu-west-1.amazonaws.com/dev/tasks?user_id=${Cookies.get("user_id")}`)
    .then(response => {
        // request is successful, run this
        console.log(response.data);
        setTasks(response.data.tasks);
        setLoading(false);
      })
    .catch(
      (error) => {
        //request is given an error, run this
        console.log('Error fetching data', error);
        setLoading(false);
      });
  }, []);

  const activeTasks = tasks && tasks.filter(task => task.complete_status_id === 1);
  const completedTasks = tasks && tasks.filter(task => task.complete_status_id === 2);

  function deleteTask(task_id) {
    const updatedTasks = tasks.filter(task => task.task_id !== task_id);
    setTasks(updatedTasks);
    const updatedTask = {
      task_id: task_id,
      complete_status_id: 3
    }
  
    axios
    .put(`https://q6to3w78jj.execute-api.eu-west-1.amazonaws.com/dev/tasks/${task_id}`, updatedTask)
    .then(
      // if the request is successful, consolelog the results
      (response) => {
        console.log(response);
        //const updatedTasks = [ ...tasks, updatedTask ]
      }
    )
    .catch((error) => {
      console.log('Error updating a task', error)
    })
  }

 function completeTask(task_id){
    const updatedTasks = tasks.map(task => {
      if (task.task_id === task_id){
        task.complete_status_id = 2;
      }
      return task;
    });
    setTasks(updatedTasks);
    const updatedTask = {
      task_id: task_id,
      complete_status_id: 2
    }
  
    axios
    .put(`https://q6to3w78jj.execute-api.eu-west-1.amazonaws.com/dev/tasks/${task_id}`, updatedTask)
    .then(
      // if the request is successful, consolelog the results
      (response) => {
        console.log(response);
        //const updatedTasks = [ ...tasks, updatedTask ]
      }
    )
    .catch((error) => {
      console.log('Error updating a task', error)
    })
  }

  function activateTask(task_id){
    const updatedTasks = tasks.map(task => {
      if (task.task_id === task_id){
        task.complete_status_id = 1;
      }
      return task;
    });
    setTasks(updatedTasks);
    const updatedTask = {
      task_id: task_id,
      complete_status_id: 1
    }
  
    axios
    .put(`https://q6to3w78jj.execute-api.eu-west-1.amazonaws.com/dev/tasks/${task_id}`, updatedTask)
    .then(
      // if the request is successful, consolelog the results
      (response) => {
        console.log(response);
        //const updatedTasks = [ ...tasks, updatedTask ]
      }
    )
    .catch((error) => {
      console.log('Error updating a task', error)
    })
  }

  function addTask(text){
    const newTask = {
      task_id: "",
      user_id: Cookies.get('user_id'),
      text: text,
      complete_status_id: 1
    }
    const updatedTasks = [ ...tasks, newTask ];
    setTasks(updatedTasks);
  
      axios
      .post('https://q6to3w78jj.execute-api.eu-west-1.amazonaws.com/dev/tasks', newTask)
      .then(
        // if the request is successful, get the task id and add it to the 
        // new task object
        (response) => {
          //console.log(response.data);
          newTask.task_id = response.data.data.insertId;
          //console.log(newTask);
          const updatedTasks = [ ...tasks, newTask ]
          setTasks(updatedTasks);
          //console.log(tasks);
        }
      )
      .catch((error) => {
        console.log('Error adding a task', error);
      })
  }

  if (!Cookies.get('user_id')){
    return(
      <div className="App">
        <header className="container">
          <h1>Login</h1>
        </header>
        <div>
          You are not logged in.
        </div>
      </div>
    );
  }
  else {
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
                    key={ task.task_id }
                    task_id = { task.task_id } 
                    user_id ={ task.user_id }  
                    text={ task.text } 
                    complete_status_id = { task.complete_status_id }
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
                key={ task.task_id } 
                task_id = { task.task_id } 
                user_id ={ task.user_id }  
                text={ task.text } 
                complete_status_id = { task.complete_status_id }
                />)}
              </ol>
              </div>
            </div> 
          </div>
          <Footer />
        </div>
      );
    }
}
function Footer() {
  return (
    <div className="container text-center">
      <cite>&copy; Jennifer Calland 2020</cite> &nbsp;
    </div>
  );
}

export default App;