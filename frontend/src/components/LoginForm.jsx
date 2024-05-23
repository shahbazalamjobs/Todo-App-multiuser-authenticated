import React, { useState } from 'react';
import { login } from '../api';

const LoginForm = ({ onLoginSuccess, onLogout }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      console.log('Login successful');
      setMessage('Login successful');
      onLoginSuccess(response.data.token);
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Invalid username or password');
    }
  };

  const fillTestData = () => {
    setUsername('test');
    setPassword('test123');
  };

  const handleLogout = () => {
    // onLogout();
    setMessage('Logged out successfully');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="button-container">
        <button className="test-button" onClick={fillTestData}>Test Data</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default LoginForm;
