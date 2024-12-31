import React from 'react';
import { FaUser, FaSuitcase, FaEnvelope } from 'react-icons/fa';
import { GoHomeFill } from "react-icons/go";
import './BottomNavigation.css';

const BottomNavigation = () => {
  return (
    <div className="bottom-navigation">
      <div className="nav-item">
        <GoHomeFill className="nav-icon" />
        <span className="nav-label">Home</span>
      </div>
      <div className="nav-item">
        <FaUser className="nav-icon" />
        <span className="nav-label">About</span>
      </div>
      <div className="nav-item">
        <FaSuitcase className="nav-icon" />
        <span className="nav-label">Portfolio</span>
      </div>
      <div className="nav-item">
        <FaEnvelope className="nav-icon" />
        <span className="nav-label">Contact</span>
      </div>
    </div>
  );
};

export default BottomNavigation;