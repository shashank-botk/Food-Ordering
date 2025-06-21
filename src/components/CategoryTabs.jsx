import React, { useState, useEffect } from 'react';
import { categories } from '../../store/categoryData';

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  useEffect(() => {
    // Create observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryId = entry.target.getAttribute('data-category');
            setActiveCategory(categoryId);

            // Scroll the active tab into view
            const activeTab = document.querySelector(
              `[data-tab="${categoryId}"]`,
            );
            if (activeTab) {
              activeTab.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
              });
            }
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      },
    );

    // Observe all menu sections
    document.querySelectorAll('[data-category]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);

    // Find the section and scroll to it
    const section = document.querySelector(`[data-category="${categoryId}"]`);
    if (section) {
      const headerOffset = 120; // Adjust based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="category-container sticky top-[106px] z-40 mx-[15px] my-[5px] flex items-center gap-3 px-3 whitespace-nowrap">
      {categories.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          data-tab={id}
          className={`category-tab flex cursor-pointer items-center gap-[4px] rounded-[8px] border-2 border-[#d1d5db] bg-orange-50 px-[0.8rem] py-[0.5rem] text-[0.9rem] font-semibold text-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out select-none ${activeCategory === id ? 'active' : ''
            }`}
          onClick={() => handleCategoryClick(id)}
        >
          <span className="text-[1rem]">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
