import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css'

const LoginSignupPage = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = (token) => {
    setToken(token);
    navigate('/todo'); 

  };

  return (
    <div className='page-container'>
      <AuthForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginSignupPage;
