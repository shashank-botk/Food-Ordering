import React, { useState } from 'react';

const filters = [
  { id: 'all', label: 'All', icon: '🍽️' },
  { id: 'veg', label: 'Vegetarian', icon: '🥬' },
  { id: 'nonveg', label: 'Non-Vegetarian', icon: '🍗' },
  { id: 'roundtheclock', label: 'Round the Clock', icon: '🕒' },
  { id: 'popular', label: 'Popular', icon: '⭐' },
];

export function FilterButtons() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="filter-buttons-container" id="filters">
      {filters.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          className={`filter-button ${selectedFilter === id ? 'active' : ''}`}
          onClick={() => setSelectedFilter(id)}
        >
          <span className="icon">{icon}</span>
          <span className="label">{label}</span>
        </button>
      ))}
    </div>
  );
}
