import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import LoginSignupPage from './pages/LoginSignupPage';
import TodoApp from './pages/TodoApp';
import ProtectedRoute from './components/ProtectedRoute';
import CommonTodos from './pages/CommonTodos';
import './App.css';

function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginSignupPage setToken={setToken} />} />
          <Route path="/common-todos" element={<CommonTodos />} />
          <Route
            path="/todo"
            element={<ProtectedRoute token={token}><TodoApp token={token} /></ProtectedRoute>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
