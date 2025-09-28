import React from 'react';
import './Login.css';

function Login({ onLogin, navigate }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back</h2>
        <p>Please log in to access your dashboard.</p>
        <form className="login-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="signup-link">
          <p>
            Don't have an account?{' '}
            <a onClick={() => navigate('signup')}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
