import React, { useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import './MainScreen.css';
import logo from './logo.png'; // Импортируем логотип

const MainScreen = () => {
  const [connected, setConnected] = useState(false);
  const tokens = 1000;


  const handleConnectWallet = () => {
    setConnected(true);
  };

  return (
    <div className="main-screen">
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
        <h2>{tokens} Mintero</h2>
      </div>

      <div className="feature">
        <p>The app's main feature will be here soon!</p>
      </div>
    </div>
  );
};

export default MainScreen;
