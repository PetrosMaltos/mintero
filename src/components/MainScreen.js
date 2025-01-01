import React, { useState, useEffect } from 'react';
import { FaWallet, FaTelegramPlane } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { TonConnectUI } from '@tonconnect/ui';
import './MainScreen.css';
import logo from './logo.png';
import BottomNavigation from './BottomNavigation';

const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://orange-high-chinchilla-505.mypinata.cloud/ipfs/bafkreicpxqtgrsant437cjhffd6cjnquuypqhc4oiwnj73gfmaqqdg5gsa', // Новый URL манифеста
});

const MainScreen = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isDisconnectModalOpen, setIsDisconnectModalOpen] = useState(false);
  const tokens = 1000;
  const level = 1;

  const connectWallet = async () => {
    try {
      await tonConnectUI.connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await tonConnectUI.disconnect();
      setIsDisconnectModalOpen(false); // Закрываем модальное окно
      setIsWalletConnected(false); // Обновляем состояние подключения
      setWalletAddress(null); // Очищаем адрес кошелька
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = tonConnectUI.onStatusChange((wallet) => {
      if (wallet) {
        setIsWalletConnected(true);
        setWalletAddress(wallet.account.address); // Сохраняем адрес кошелька
      } else {
        setIsWalletConnected(false);
        setWalletAddress(null);
      }
    });
  
    return () => unsubscribe();
  }, []);

 // Функция для сокращения адреса
const shortenAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};


const handleFollowCommunity = () => {
  window.location.href = 'https://t.me/minterofam'; // Перенаправляем на канал
};
  return (
    <div className="main-screen">
      {/* Нижняя навигация */}
      <BottomNavigation />

      {/* Кнопка подключения кошелька */}
      <div className="wallet-connect">
        <button
          className="button-33"
          onClick={isWalletConnected ? () => setIsDisconnectModalOpen(true) : connectWallet}
        >
          {isWalletConnected ? (
            <span>
              {shortenAddress(walletAddress)}
            </span>
          ) : (
            <span>Connect</span>
          )}
          <FaWallet className="wallet-icon" style={{ marginLeft: 10 }} />
        </button>
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
          <button className="button-follow" onClick={handleFollowCommunity}>
            <FaTelegramPlane className="follow-icon" />
            Follow Community
            <IoIosArrowForward className="arrow-icon" />
          </button>
        </div>
        <div className="game-placeholder scrollable">
          <p>Game coming soon...</p>
        </div>
      </div>
      
      {/* Модальное окно отключения кошелька */}
      {isDisconnectModalOpen && (
        <div className="disconnect-modal">
          <div className="disconnect-modal-content">
            <div className="ton-icon">TON</div>
            <h2>Disconnect Wallet?</h2>
            <p>Are you sure you want to disconnect your wallet?</p>
            <button className="button-33" onClick={disconnectWallet}>
              Disconnect
            </button>
            <button className="button-33" onClick={() => setIsDisconnectModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainScreen;