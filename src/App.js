import React, { useState } from 'react';
import './styles.css';
import NewsList from './components/NewsList';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Health News</h1>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <NewsList />
    </div>
  );
}

export default App;



