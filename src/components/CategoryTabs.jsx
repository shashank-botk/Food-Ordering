import React, { useState } from 'react';
import { categories } from '../../store/categoryData';


export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <nav className="category-tabs">
      <div className="tabs-container">
        {categories.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            className={`category-tab ${activeCategory === id ? 'active' : ''}`}
            onClick={() => setActiveCategory(id)}
          >
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
