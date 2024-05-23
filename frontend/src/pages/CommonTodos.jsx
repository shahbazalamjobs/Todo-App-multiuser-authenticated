import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import '../styles/commonTodos.css'
const API_BASE_URL = 'http://localhost:3000';

// Fetch common todos
const fetchCommonTodos = async () => {
    return await axios.get(`${API_BASE_URL}/api/common-todos`);
};

// Add a new common todo
const addCommonTodo = async (title) => {
    return await axios.post(`${API_BASE_URL}/api/common-todos`, { title });
};

// Update a common todo
const updateCommonTodo = async (id, title, completed) => {
    return await axios.put(`${API_BASE_URL}/api/common-todos/${id}`, { title, completed });
};

// Delete a common todo
const deleteCommonTodo = async (id) => {
    return await axios.delete(`${API_BASE_URL}/api/common-todos/${id}`);
};

const CommonTodos = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const loadTodos = async () => {
            const response = await fetchCommonTodos();
            setTodos(response.data);
        };
        loadTodos();
    }, []);

    const handleAddTodo = async () => {
        if (title.trim() === '') return;
        const response = await addCommonTodo(title);
        setTodos([...todos, response.data]);
        setTitle('');
    };

    const handleUpdateTodo = async (id, newTitle, completed) => {
        const response = await updateCommonTodo(id, newTitle, completed);
        setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
    };

    const handleDeleteTodo = async (id) => {
        await deleteCommonTodo(id);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = async (id, title, completed) => {
        const response = await updateCommonTodo(id, title, !completed);
        setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
    };

    return (
        <>
            <h1 className='title'> Common Todos </h1>
            <div className="todo-container">
                <div className="input">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button className="add-btn" onClick={handleAddTodo}>Add Todo</button>
                </div>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(todo.id, todo.title, todo.completed)}
                            />
                            <input
                                type="text"
                                value={todo.title}
                                onChange={(e) => handleUpdateTodo(todo.id, e.target.value, todo.completed)}
                            />
                            <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CommonTodos;
