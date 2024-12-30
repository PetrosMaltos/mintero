import React from 'react';
import { FaHome, FaUser, FaSuitcase, FaEnvelope } from 'react-icons/fa';
import './BottomNavigation.css';

const BottomNavigation = () => {
  const handleNavClick = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(50); // Пробная вибрация
    } else {
      console.log("Vibration API не поддерживается");
    }
  };

  return (
    <div className="bottom-navigation">
      <div className="nav-item" onClick={handleNavClick}>
        <FaHome className="nav-icon" />
        <span className="nav-label">Home</span>
      </div>
      <div className="nav-item" onClick={handleNavClick}>
        <FaUser className="nav-icon" />
        <span className="nav-label">About</span>
      </div>
      <div className="nav-item" onClick={handleNavClick}>
        <FaSuitcase className="nav-icon" />
        <span className="nav-label">Portfolio</span>
      </div>
      <div className="nav-item" onClick={handleNavClick}>
        <FaEnvelope className="nav-icon" />
        <span className="nav-label">Contact</span>
      </div>
    </div>
  );
};

export default BottomNavigation;
