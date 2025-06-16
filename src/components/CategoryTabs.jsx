import React, { useState } from 'react';
import { categories } from '../../store/categoryData';

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  return (
    <div className="category-container sticky top-[106px] mx-[15px] my-[5px] flex items-center gap-[8px] py-[5px] whitespace-nowrap z-50">
      {categories.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          className={`category-tab flex cursor-pointer items-center gap-[4px] rounded-[8px] border-2 border-[#d1d5db] bg-white px-[0.8rem] py-[0.5rem] text-[0.9rem] font-semibold text-[#4b5563] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out select-none ${activeCategory === id ? 'active' : ''}`}
          onClick={() => setActiveCategory(id)}
        >
          <span className="text-[1rem]">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
