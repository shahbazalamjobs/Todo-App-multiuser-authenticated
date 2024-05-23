import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// User authentication
export const signup = async (username, password) => {
  return await axios.post(`${API_BASE_URL}/signup`, { username, password });
};

export const login = async (username, password) => {
  return await axios.post(`${API_BASE_URL}/login`, { username, password });
};

export const accessProtectedRoute = async (token) => {
  return await axios.get(`${API_BASE_URL}/protected`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Todo operations
export const fetchTodos = async (token) => {
  return await axios.get(`${API_BASE_URL}/api/todos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addTodo = async (token, title) => {
  return await axios.post(`${API_BASE_URL}/api/todos`, { title }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateTodo = async (token, id, title, completed) => {
  return await axios.put(`${API_BASE_URL}/api/todos/${id}`, { title, completed }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteTodo = async (token, id) => {
  return await axios.delete(`${API_BASE_URL}/api/todos/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
