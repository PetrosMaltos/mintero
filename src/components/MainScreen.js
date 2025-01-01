import React, { useState, useEffect } from 'react';
import { FaWallet, FaTelegramPlane } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import './MainScreen.css';
import logo from './logo.png';
import BottomNavigation from './BottomNavigation';
import { TonConnectUI } from '@tonconnect/ui'; // Импортируем TonConnect UI

const MainScreen = () => {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [tonConnectUI, setTonConnectUI] = useState(null); // Состояние для TonConnect UI

  const tokens = 1000;
  const level = 1;

  useEffect(() => {
    const preventTouchMove = (e) => {
      if (!e.target.closest('.scrollable')) {
        e.preventDefault(); // Блокируем движение
      }
    };

    document.addEventListener('touchmove', preventTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventTouchMove);
    };
  }, []);

  useEffect(() => {
    // Проверяем, был ли уже зарегистрирован элемент tc-root
    if (!customElements.get('tc-root')) {
      const tonConnectUIInstance = new TonConnectUI({
        manifestUrl: 'https://orange-high-chinchilla-505.mypinata.cloud/files/bafkreibcel5cn64uhga5vmevdzdbdm7ejodpogvcdfl5whufsel3hwjaoi?X-Algorithm=PINATA1&X-Date=1735746187&X-Expires=30&X-Method=GET&X-Signature=2e7fa319f9c0f5a431be254c2da19b35fa2e50c75ca08af80a07a9c31c859ba3',
      });

      setTonConnectUI(tonConnectUIInstance);
    } else {
      console.warn('TonConnect UI already initialized');
    }
  }, []); // Эта зависимость пустая, чтобы инициализация происходила только один раз

  const handleConnectWallet = async () => {
    if (tonConnectUI) {
      try {
        const connectedAddress = await tonConnectUI.connect(); // Запрос на подключение через TonConnect
        setWalletAddress(connectedAddress);
        setConnected(true);
      } catch (error) {
        console.error('Connection failed', error);
      }
    } else {
      alert('TonConnect UI not initialized');
    }
  };

  return (
    <div className="main-screen">
      <BottomNavigation />

      {/* Кнопка подключения кошелька */}
      <div className="wallet-connect">
        {connected ? (
          <p className="wallet-status">Wallet Connected: {walletAddress}</p>
        ) : (
          <button onClick={handleConnectWallet} className="button-33">
            Connect <FaWallet className="wallet-icon" />
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
