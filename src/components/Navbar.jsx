import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ onCategorySelect, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="will-change-opacity sticky top-[15px] z-50 m-[15px] flex items-center justify-between rounded-[0.5rem] border border-black bg-white p-[10px_30px] shadow-[1px_1.2px_0_#000]">
      <div className="logo">
        <h1 className="text-darkred no-drag animate-[float_3s_ease-in-out_infinite] cursor-pointer font-mono text-[1.6rem] font-semibold tracking-[2px] transition-transform duration-300 ease-in-out will-change-transform select-none">
          LOGO
        </h1>
      </div>

      <SearchBar onCategorySelect={onCategorySelect} onSearch={onSearch} />

      <div className="menu-icon">
        <label className="hamburger">
          <input
            type="checkbox"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
