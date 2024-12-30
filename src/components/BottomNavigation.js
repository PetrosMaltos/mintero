import React from 'react';
import { FaHome, FaUser, FaSuitcase, FaEnvelope } from 'react-icons/fa';
import './BottomNavigation.css';

const BottomNavigation = () => {
  const handleNavClick = () => {
    // Проверяем, поддерживается ли вибрация устройством
    if ('vibrate' in navigator) {
      navigator.vibrate(50); // Вибрация на 50 мс
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
