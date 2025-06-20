import React, { useState } from 'react';

/**
 * List of available filters for menu items.
 */
const filters = [
  { id: 'all', label: 'All', icon: '🍽️' },
  { id: 'veg', label: 'Vegetarian', icon: '🥬' },
  { id: 'nonveg', label: 'Non-Vegetarian', icon: '🍗' },
  { id: 'roundtheclock', label: 'Round the Clock', icon: '🕒' },
  { id: 'popular', label: 'Popular', icon: '⭐' },
];

/**
 * FilterButtons component.
 * @param {Object} props
 * @param {string} props.selectedFilter - Currently selected filter.
 * @param {function} props.onFilterChange - Callback when filter changes.
 */
export function FilterButtons({ selectedFilter, onFilterChange }) {
  return (
    <div
      className="mb-[5px] flex flex-wrap justify-center gap-[12px] py-[15px] pt-[0px]"
      id="filters"
    >
      {filters.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          className={`flex cursor-pointer items-center gap-[8px] rounded-full border-2 border-[#e5e7eb] bg-white px-[1.25rem] py-[0.625rem] text-[0.875rem] font-semibold text-[#4b5563] shadow-[0_2px_5px_rgba(0,0,0,0.05)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] select-none hover:-translate-y-[2px] hover:border-[#ef4444] hover:text-[#ef4444] hover:shadow-[0_4px_10px_rgba(239,68,68,0.15)] ${selectedFilter === id ? '!-translate-y-[2px] !border-none !bg-gradient-to-r !from-[#dc2626] !to-[#ef4444] !font-bold !text-white !shadow-[0_4px_15px_rgba(201,98,98,0.4)]' : ''}`}
          onClick={() => onFilterChange(id)}
        >
          <span className="text-[1.25rem] transition-transform duration-300 ease-in-out hover:scale-110">
            {icon}
          </span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
