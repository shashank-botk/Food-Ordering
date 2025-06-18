import React, { useState, useEffect } from 'react';
import { categories } from '../../store/categoryData';

const Navbar = ({ onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter categories based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCategories([]);
      return;
    }

    const filtered = categories.filter((category) =>
      category.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredCategories(filtered);
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleCategorySelect = (category) => {
    setSearchQuery(category.label);
    setShowSuggestions(false);
    onCategorySelect(category.id); // Pass selected category to parent
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="will-change-opacity sticky top-[15px] z-50 m-[15px] flex items-center justify-between rounded-[0.5rem] border border-black bg-white p-[10px_30px] shadow-[1px_1.2px_0_#000]">
        <div className="logo">
          <h1 className="text-darkred no-drag animate-[float_3s_ease-in-out_infinite] cursor-pointer font-mono text-[1.6rem] font-semibold tracking-[2px] transition-transform duration-300 ease-in-out will-change-transform select-none">
            LOGO
          </h1>
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            name="search"
            placeholder="Search Your Cuisine..."
            aria-label="Search"
            className="placeholder:word-spacing-[1.5px] m-[2px] w-[300px] rounded-[0.5rem] border-[1.5px] border-black p-[0.875rem_1.5rem] text-base text-orange-600 shadow-[1px_1.2px_0_#000] transition-all duration-[0.25s] ease-in-out outline-none not-placeholder-shown:font-[Verdana,Geneva,Tahoma,sans-serif] not-placeholder-shown:tracking-[1px] placeholder:translate-y-[2.5px] placeholder:p-[0.875rem_0.7rem] placeholder:font-[Verdana,Geneva,Tahoma,sans-serif] placeholder:font-medium placeholder:tracking-[1px] placeholder:text-black placeholder:opacity-80 focus:shadow-[3px_3.2px_0_black]"
          />

          {/* Search Suggestions Dropdown */}
          
          {showSuggestions && filteredCategories.length > 0 && (
            <div className="absolute z-50 mt-1.5 ml-[2.2px] w-[300px] rounded-lg border bg-white shadow-lg">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:rounded-lg hover:bg-gray-200"
                  onClick={() => handleCategorySelect(category)}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.label}</span>
                </div>
              ))}
            </div>
          )}
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
