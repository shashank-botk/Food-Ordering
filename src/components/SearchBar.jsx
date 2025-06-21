import React, { useState, useEffect, useRef } from 'react';
import { menuItems } from '../../store/menuItemData';

const SearchBar = ({ onCategorySelect, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dishSuggestions, setDishSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setDishSuggestions([]);
      return;
    }
    const allDishes = menuItems.flatMap((category) =>
      category.items.map((dish) => ({
        ...dish,
        categoryId: category.category,
      })),
    );
    const filtered = allDishes.filter((dish) =>
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setDishSuggestions(filtered);
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowSuggestions(false);
      onCategorySelect(null);
      onSearch(searchQuery);
      inputRef.current.blur();
    }
  };

  const handleDishSelect = (dish) => {
    setSearchQuery(dish.name);
    setShowSuggestions(false);
    onCategorySelect(dish.categoryId);
    onSearch(dish.name);
  };

  return (
    <div className="relative w-[280px] max-w-full">
      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Search Your Cuisine..."
        aria-label="Search"
        className="placeholder:word-spacing-[1.5px] placeholder:translate-y-0.4 w-full rounded-xl border border-red-300 bg-white px-5 py-3 text-base text-red-600 shadow-md transition-all duration-200 outline-none not-placeholder-shown:font-[Verdana,Geneva,Tahoma,sans-serif] not-placeholder-shown:tracking-[1px] placeholder:p-[0_0.3rem] placeholder:font-[Verdana,Geneva,Tahoma,sans-serif] placeholder:font-medium placeholder:tracking-[1px] placeholder:text-gray-600 placeholder:opacity-80 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
      />

      {showSuggestions && dishSuggestions.length > 0 && (
        <div className="animate-fade-in absolute left-0 z-50 mt-2 max-h-72 w-full overflow-y-auto rounded-xl border border-orange-100 bg-white shadow-xl">
          {dishSuggestions.map((dish, idx) => (
            <div
              key={idx}
              className="flex cursor-pointer px-5 py-2 transition-colors hover:bg-gray-100"
              onClick={() => handleDishSelect(dish)}
            >
              <span className="font-medium text-gray-700">{dish.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
