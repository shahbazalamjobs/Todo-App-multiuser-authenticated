import React, { useState } from 'react';
import { signup } from '../api';

const SignupForm = ({ onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(username, password);
      setMessage('Signup successful');
      onSignupSuccess();
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Error during signup');
    }
  };

  return (
    <div className="signup-form"> {/* Add a class name for styling */}
      <h2>Signup</h2>
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
        <button type="submit">Signup</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignupForm;
