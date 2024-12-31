import React, { useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { FaTelegramPlane } from 'react-icons/fa';
import './MainScreen.css';
import logo from './logo.png';
import BottomNavigation from './BottomNavigation';

const MainScreen = () => {
  const [connected, setConnected] = useState(false);
  const tokens = 1000;
  const level = 1; // Пример уровня

  const handleConnectWallet = () => {
    setConnected(true);
  };

  return (
    <div className="main-screen">
      <BottomNavigation />

      {/* Кнопка подключения кошелька */}
      <div className="wallet-connect">
        {connected ? (
          <p>Telegram Wallet Connected</p>
        ) : (
          <button onClick={handleConnectWallet} className="button-33">
            Connect <FaWallet style={{ marginLeft: '8px', marginRight: '0px' }} />
          </button>
        )}
      </div>

      {/* Логотип */}
      <div className="logo">
        <img src={logo} alt="Mintero Logo" />
      </div>

      {/* Баланс токенов */}
      <div className="token-balance">
        <div className="token-container">
          <span className="token-number">{tokens}</span>
          <span className="token-label">Mintero</span>
        </div>
        {/* Уровень */}
        <div className="level">
          <span>🎮 Level {level}</span>
          <IoIosArrowForward className="arrow-right" />
        </div>
      </div>

      {/* Feature Block */}
      <div className="feature">
        {/* Follow Community Button */}
        <div className="follow-community">
          <button className="button-follow">
            <FaTelegramPlane className="follow-icon" />
            Follow Community
            <IoIosArrowForward className="arrow-icon" />
          </button>
        </div>

        {/* Game Placeholder */}
        <div className="game-placeholder">
          <p>Game coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;