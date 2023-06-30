import React, { useState } from 'react';
import './App.css'

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskId, setTaskId] = useState(1);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: taskId,
        content: newTask,
        completed: false,
      };

      setTodoList([...todoList, newTaskObj]);
      setNewTask('');
      setTaskId(taskId + 1);
    }
  };

  const deleteTask = (taskId) => {
    const updatedTodoList = todoList.filter((task) => task.id !== taskId);
    setTodoList(updatedTodoList);
  };

  const toggleCompleted = (taskId) => {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input type="text" value={newTask} onChange={handleChange} placeholder="Enter a task" />
        <button className='adt' onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {todoList.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? 'green' : 'red',
              }}
            >
              <h1>{task.content}</h1>
            </span>
            <button className='delete' onClick={() => deleteTask(task.id)}>Delete</button>
            <button className='complete' onClick={() => toggleCompleted(task.id)}>Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
