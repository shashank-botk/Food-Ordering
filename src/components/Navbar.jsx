import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ onCategorySelect, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-4 z-50 mx-4 my-4 flex items-center justify-between rounded-xl border-gray-300 bg-gradient-to-r from-orange-50 to-yellow-50 px-10 py-3 shadow-xl transition-all duration-300">
      <div className="logo flex items-center gap-2">
        <h1 className="animate-[float_3s_ease-in-out_infinite] cursor-pointer font-mono text-2xl font-bold tracking-widest text-black drop-shadow-sm select-none">
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
