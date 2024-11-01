import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home'
import Register from './components/Register'

const App = () => {
  return (
    <div className="App">
      <h1>Postagram!</h1>
      <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;