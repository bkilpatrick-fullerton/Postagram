import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login attempt (replace with API call in future)
    console.log('Trying to login:', username, password);
    setUsername('');
    setPassword('');
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
      <div className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </div>
    </>
  );
};

export default LoginForm;