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
          // Flatten all dishes with their category
          const allDishes = menuItems.flatMap(category =>
               category.items.map(dish => ({
                    ...dish,
                    categoryId: category.category,
               }))
          );
          // Filter dishes by name only (not description)
          const filtered = allDishes.filter(
               dish =>
                    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setDishSuggestions(filtered);
     }, [searchQuery]);

     const handleSearch = (e) => {
          setSearchQuery(e.target.value);
          setShowSuggestions(true);
     };

     // Handle Enter key for search
     const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
               setShowSuggestions(false);
               onCategorySelect(null); // Show all relevant categories
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
          <div className="relative">
               <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for dishes..."
                    aria-label="Search"
                    className="placeholder:word-spacing-[1.5px] m-[2px] w-[300px] rounded-[0.5rem] border-[1.5px] border-black p-[0.875rem_1.5rem] text-base text-orange-600 shadow-[1px_1.2px_0_#000] transition-all duration-[0.25s] ease-in-out outline-none"
               />

               {showSuggestions && dishSuggestions.length > 0 && (
                    <div className="absolute z-50 mt-1.5 ml-[2.2px] w-[300px] rounded-lg border bg-white shadow-lg max-h-[400px] overflow-y-auto">
                         {dishSuggestions.map((dish, idx) => (
                              <div
                                   key={idx}
                                   className="flex cursor-pointer px-4 py-2 hover:bg-orange-50"
                                   onClick={() => handleDishSelect(dish)}
                              >
                                   <span className="font-medium text-orange-700">{dish.name}</span>
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
};

export default SearchBar;