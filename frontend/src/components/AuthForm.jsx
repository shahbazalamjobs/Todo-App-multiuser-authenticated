import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


const AuthForm = ({ onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSignupSuccess = () => {
    setActiveTab('login');
  };

  return (
    <div className="auth-form">
      <div className="tabs">
        <button
          onClick={() => handleTabChange('login')}
          className={activeTab === 'login' ? 'active' : ''}
        >
          Login
        </button>
        <button
          onClick={() => handleTabChange('signup')}
          className={activeTab === 'signup' ? 'active' : ''}
        >
          Signup
        </button>
      </div>
      {activeTab === 'login' ? (
        <LoginForm onLoginSuccess={onLoginSuccess} />
      ) : (
        <SignupForm onSignupSuccess={handleSignupSuccess} />
      )}
    </div>
  );
};

export default AuthForm;
