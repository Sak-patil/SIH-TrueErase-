import React, { useState } from 'react';
import Navbar from './NavBar.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import WipeDetails from './WipeDetails.jsx';
import SignUp from './SignUp.jsx';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedWipe, setSelectedWipe] = useState(null);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('dashboard');
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
    navigate('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('home');
  };

  const viewWipeDetails = (wipe) => {
    setSelectedWipe(wipe);
    navigate('wipeDetails');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'login':
        return <Login onLogin={handleLogin} navigate={navigate} />;
      case 'signup':
        return <SignUp onSignUp={handleSignUp} />;
      case 'dashboard':
        return <Dashboard onViewDetails={viewWipeDetails} />;
      case 'wipeDetails':
        return <WipeDetails wipe={selectedWipe} onBack={() => navigate('dashboard')} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="App">
      <Navbar navigate={navigate} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main>
        {renderPage()}
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 TrueErase. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
