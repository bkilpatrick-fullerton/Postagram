import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Simulate login attempt (replace with actual API call in the future)
    console.log('Trying to login:', username, password);

    // mock validation
    if (username === 'post' && password === 'gram') {
      setUsername('');
      setPassword('');
      setError('');
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="browser-bar">
        <div>
          {/* Add your browser bar elements here */}
        </div>
        <div className="tabs">
          <ul>
            {/* Add your tab items here */}
          </ul>
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>

        <button type="button" onClick={handleRegisterRedirect} className="register-button">
          Register
        </button>
      </form>
    </>
  );
};

export default LoginForm;
