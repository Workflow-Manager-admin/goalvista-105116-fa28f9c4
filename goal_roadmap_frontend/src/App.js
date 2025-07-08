import React, { useState, useEffect } from 'react';
import './App.css';

// Import dashboard UI components
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import RoadmapArea from './components/RoadmapArea';
import GoalModal from './components/GoalModal';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [category, setCategory] = useState('All Goals');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const handleGoalClick = (goalName) => {
    setSelectedGoal(goalName);
    setModalOpen(true);
  };

  // PUBLIC_INTERFACE
  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedGoal(null);
  };

  return (
    <div className="App dashboard-bg">
      <NavBar />
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <div className="dashboard-layout">
        <Sidebar
          selected={category}
          onSelect={setCategory}
        />
        <RoadmapArea
          onGoalClick={handleGoalClick}
        />
      </div>
      <GoalModal
        open={modalOpen}
        goal={selectedGoal}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App;
