import React, { useState } from 'react';
import './App.css'; 

function App() {
  // State to store the tasks
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  
  // Function to handle adding a task
  const addTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask]);
      setCurrentTask(''); // Clear the input field
    }
  };

  // Function to handle submitting the tasks and clearing the task list
  const submitTasks = () => {
    alert('Tasks Submitted!');
    setTasks([]);  // Clear the tasks after submission
  };

  return (
    <div className="container">
      <h1 className="header">Task List App</h1>

      {/* Input for the task */}
      <div className="task-input-container">
        <input 
          className="task-input"
          type="text" 
          value={currentTask} 
          onChange={(e) => setCurrentTask(e.target.value)} 
          placeholder="Enter task" 
        />
        <button className="add-btn" onClick={addTask}>+</button>
      </div>

      {/* Submit button */}
      <button className="submit-btn" onClick={submitTasks}>Submit</button>

      {/* Display the list of tasks */}
      <div className="task-list">
        <h3 className="task-list-header">Task List:</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
