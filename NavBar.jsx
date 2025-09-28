import React from 'react';
import './NavBar.css';

function Navbar({ navigate, isLoggedIn, onLogout }) {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand" onClick={() => navigate('home')}>
          TrueErase
        </div>
        <nav className="navbar-nav">
          <ul>
            <li onClick={() => navigate('home')}><a>Home</a></li>
            <li><a>How It Works</a></li>
            {isLoggedIn ? (
              <>
                <li onClick={() => navigate('dashboard')}><a>Dashboard</a></li>
                <li onClick={onLogout}><a className="login-button">Logout</a></li>
              </>
            ) : (
              <li onClick={() => navigate('login')}><a className="login-button">Login</a></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
