import React, {useState} from 'react';

function MyComponent() {

  const [tasks, setTasks] = useState(["EAT", "walk", "shower"]);
  const [newTask, setNewTask] = useState("");

  function addTask() {

    if(newTask.trim("") !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
    
  }

  function handleTaskChange(event) {
    setNewTask(event.target.value);

  }

  function deleteTask(index) {

    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);

  }

  function moveTaskUp(index) {

    if(index > 0) {

      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {

    if(index < tasks.length - 1) {

      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }
  }

  return(
  <div className='todo-list'>
    <h1>To-Do List</h1>

    <input type="text"
    value={newTask}
    placeholder='Enter a task' 
    onChange={handleTaskChange}/>
    <button className='add-btn' onClick={addTask}>Add</button>

    <ol className='myTasks'>
      {tasks.map((task, index) => 
        <li key={index}>
            <span className='task-text'>{task}</span>
            <button className='delete-btn' onClick={() => {deleteTask(index)}}>Delete</button>
            <button
             className='move-btn'
             onClick={() => {moveTaskUp(index)}}>🔺</button>
            <button
             className='move-btn'
             onClick={() => {moveTaskDown(index)}}>🔻</button>
        </li>)}
      
    </ol>
  </div>)

}

export default MyComponent