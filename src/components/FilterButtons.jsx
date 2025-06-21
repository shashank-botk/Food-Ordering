import React, { useState, useEffect } from 'react';

const filters = [
  { id: 'all', label: 'All', icon: '🍽️' },
  { id: 'veg', label: 'Vegetarian', icon: '🥬' },
  { id: 'nonveg', label: 'Non-Vegetarian', icon: '🍗' },
  { id: 'roundtheclock', label: 'Round the Clock', icon: '🕒' },
  { id: 'popular', label: 'Popular', icon: '⭐' },
];

export function FilterButtons({ selectedFilter, onFilterChange }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex flex-wrap justify-center gap-3 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      id="filters"
    >
      {filters.map(({ id, label, icon }, index) => (
        <button
          key={id}
          type="button"
          className={`flex transform items-center gap-2 rounded-full px-5 py-3 text-base font-medium shadow-lg backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95 ${selectedFilter === id
            ? 'ring-opacity-50 border-none bg-gradient-to-r from-amber-600 to-red-500 text-white ring-2 ring-amber-300'
            : 'border border-gray-200 bg-white/90 text-gray-700 hover:border-amber-300 hover:text-[#dc2626]'
            } `}
          onClick={() => onFilterChange(id)}
          style={{
            animationDelay: `${index * 100}ms`,
            animation: isVisible
              ? `fadeSlideIn 0.6s ${index * 100}ms ease-out backwards`
              : 'none',
          }}
        >
          <span
            className={`text-xl transition-all duration-300 ${selectedFilter === id ? 'scale-110 rotate-0' : 'rotate-0'} group-hover:rotate-12`}
          >
            {icon}
          </span>
          <span className="font-semibold">{label}</span>
        </button>
      ))}

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
