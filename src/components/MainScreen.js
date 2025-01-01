import { FaWallet, FaTelegramPlane } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import './MainScreen.css';
import logo from './logo.png';
import BottomNavigation from './BottomNavigation';

const MainScreen = () => {
  const tokens = 1000;
  const level = 1;

  return (
    <div className="main-screen">
      <BottomNavigation />

      {/* Кнопка подключения кошелька */}
      <div className="wallet-connect">
        <button className="button-33">
          Connect <FaWallet className="wallet-icon" />
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
