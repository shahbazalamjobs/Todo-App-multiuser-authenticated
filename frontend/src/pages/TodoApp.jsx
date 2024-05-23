import React, { useState, useEffect } from 'react';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from '../api';
import '../styles/todos.css';

const TodoApp = ({ token }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    if (token) {
      getTodos();
    }
  }, [token]);

  const getTodos = async () => {
    try {
      const response = await fetchTodos(token);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = async () => {
    try {
      const response = await addTodo(token, newTodo);
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(token, id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
    try {
      const response = await updateTodo(token, id, updatedTodo.title, updatedTodo.completed);
      setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const updatedTodo = { title: todos.find(todo => todo.id === id).title, completed: !completed };
      await handleUpdateTodo(id, updatedTodo);
    } catch (error) {
      console.error('Error toggling completion:', error);
    }
  };


  return (
    <>
      <h1 className='title'>Todo List</h1>

      <div className='todo-container'>
        <div className='input'>
          <input
            type="text"
            placeholder="Enter todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>

              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id, todo.completed)}
              />
              <input
                type="text"
                value={todo.title}
                onChange={(e) => handleUpdateTodo(todo.id, { ...todo, title: e.target.value })}
              />
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
