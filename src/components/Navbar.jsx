import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className="navbar">

        <div className="logo">
          {/* <img src="" alt="logo" /> */}
          <h1>LOGO</h1>
        </div>

        <div className="search-bar">
          <input 
            type="text" 
            value={searchQuery}
            onChange={handleSearch}
            name="search" 
            placeholder="Search Your Cuisine..." 
            aria-label="Search"
          />
        </div>

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
    </>
  );
};

export default Navbar;
