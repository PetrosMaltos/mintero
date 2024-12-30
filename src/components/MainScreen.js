import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Выполнение haptic feedback при загрузке страницы
    if (window.Telegram?.WebApp?.triggerHapticFeedback) {
      window.Telegram.WebApp.triggerHapticFeedback({
        type: 'impact',
        impact_style: 'medium',
      });
      console.log('Haptic feedback при загрузке страницы выполнен');
    }
  }, []);

  const handleConnectWallet = () => {
    // Вызов haptic feedback при нажатии на кнопку Connect Wallet
    if (window.Telegram?.WebApp?.triggerHapticFeedback) {
      window.Telegram.WebApp.triggerHapticFeedback({
        type: 'impact',
        impact_style: 'medium',
      });
      console.log('Haptic feedback для кнопки Connect Wallet вызван');
    } else if (navigator.vibrate) {
      navigator.vibrate(200); // Вибрация при нажатии на кнопку, 200 миллисекунд
      console.log('Haptic feedback с использованием API вибрации вызван');
    } else {
      console.error('Haptic feedback не поддерживается.');
    }

    setConnected(true);
  };

  const handleTextButtonPress = () => {
    // Эффект вибрации для текстовой кнопки
    if (window.Telegram?.WebApp?.triggerHapticFeedback) {
      window.Telegram.WebApp.triggerHapticFeedback({
        type: 'selection',
      });
      console.log('Haptic feedback для текстовой кнопки вызван');
    }
  };

  return (
    <div className="main-screen">
      <BottomNavigation />

      {/* Эффект haptic touch */}
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
