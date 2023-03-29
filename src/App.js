import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const taskText = e.target.elements.task.value.trim();
    if (taskText) {
      setTasks(prevTasks => [...prevTasks, { text: taskText, completed: false }]);
      e.target.elements.task.value = '';
    }
  }

  function handleTaskCompletion(taskIndex) {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
      return updatedTasks;
    });
  }

  function handleTaskDeletion(taskIndex) {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(taskIndex, 1);
      return updatedTasks;
    });
  }

  function handleTaskEdit(taskIndex, newText) {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[taskIndex].text = newText;
      return updatedTasks;
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter a task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task.text} completed={task.completed} onCompletion={() => handleTaskCompletion(index)} onDelete={() => handleTaskDeletion(index)} onEdit={(newText) => handleTaskEdit(index, newText)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
