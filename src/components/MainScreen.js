import React, { useState, useEffect, useRef } from 'react';
import { FaWallet, FaTelegramPlane } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { TonConnectUI } from '@tonconnect/ui';
import './MainScreen.css';
import logo from './logo.png';
import BottomNavigation from './BottomNavigation';

// Инициализация TonConnectUI вне компонента
const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://orange-high-chinchilla-505.mypinata.cloud/files/bafkreiaj7d2pebqjsuuscvfbcwduhrgrprbwqsjtjqnkccx5lvgd2k757a?X-Algorithm=PINATA1&X-Date=1735749046&X-Expires=30&X-Method=GET&X-Signature=17e430647a4ade70145952de4d9aa3008bf6665619cd17aea429a7bd7edde30f',
});

const MainScreen = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const tokens = 1000;
  const level = 1;

  // Подключение кошелька
  const connectWallet = async () => {
    try {
      await tonConnectUI.connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  // Отслеживание изменений состояния подключения
  useEffect(() => {
    const unsubscribe = tonConnectUI.onStatusChange((wallet) => {
      if (wallet) {
        setIsWalletConnected(true);
        setWalletAddress(wallet.account.address);
      } else {
        setIsWalletConnected(false);
        setWalletAddress(null);
      }
    });

    return () => unsubscribe(); // Отписка при размонтировании компонента
  }, []);

  return (
    <div className="main-screen">
      {/* Нижняя навигация */}
      <BottomNavigation />

      {/* Кнопка подключения кошелька */}
      <div className="wallet-connect">
        <button className="button-33" onClick={connectWallet}>
          {isWalletConnected ? 'Connected' : 'Connect'} <FaWallet className="wallet-icon" />
        </button>
        {isWalletConnected && <p>Wallet: {walletAddress}</p>}
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
        <div className="level">
          <span>🎮 Level {level}</span>
          <IoIosArrowForward className="arrow-right" />
        </div>
      </div>

      {/* Блок функций */}
      <div className="feature">
        <div className="follow-community">
          <button className="button-follow">
            <FaTelegramPlane className="follow-icon" />
            Follow Community
            <IoIosArrowForward className="arrow-icon" />
          </button>
        </div>
        <div className="game-placeholder scrollable">
          <p>Game coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;