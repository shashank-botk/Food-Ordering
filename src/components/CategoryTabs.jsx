import React, { useState } from 'react';

const categories = [
  { id: 'breakfast', label: 'Breakfast', icon: '🍳' },
  { id: 'soup', label: 'Soup', icon: '🥣' },
  { id: 'salad', label: 'Salad', icon: '🥗' },
  { id: 'quick-bite', label: 'Quick Bites', icon: '🥪' },
  { id: 'sandwich-burger', label: 'Sandwich & Burger', icon: '🍔' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'main-local-favourite', label: 'Local Favourite', icon: '👨‍🍳' },
  { id: 'rice-wonder', label: 'Rice Wonder', icon: '🍚' },
  { id: 'pasta', label: 'Pasta', icon: '🍝' },
  { id: 'dessert', label: 'Desserts', icon: '🍰' },
  { id: 'beverage', label: 'Beverages', icon: '🥤' },
  { id: 'mini-delights', label: 'Mini Delights', icon: '🍪' },
];

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
