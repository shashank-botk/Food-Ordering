import { useState, useEffect, useRef } from 'react';
import { menuItems } from '../../store/menuItemData';
import { categories } from '../../store/categoryData';
import { FilterButtons } from './FilterButtons';

const MenuCards = ({ selectedCategory, searchQuery }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [openCategories, setOpenCategories] = useState(
    menuItems.map((category) => category.category),
  );
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRefs = useRef({});

  const shortServiceHours = (service_hours) => {
    if (service_hours === '7:00 AM - 11:00 AM') return '7-11 AM';
    if (service_hours === '12:00 PM - 11:00 PM') return '12-11 PM';
    if (service_hours === '6:00 PM - 11:00 PM') return '6-11 PM';
    if (service_hours === '12:00 PM - 10:00 PM') return '12-10 PM';
    if (service_hours === '6:00 PM - 2:00 AM') return '6 PM-2 AM';
    // Add more rules as needed
    return service_hours;
  };

  // Usage Example:
  menuItems.forEach((category) => {
    category.items.forEach((item) => {
      item.service_hours = shortServiceHours(item.service_hours);
    });
  });

  // Helper: Map category id to icon
  const categoryIconMap = categories.reduce((acc, cat) => {
    acc[cat.id] = cat.icon;
    return acc;
  }, {});

  useEffect(() => {
    let filtered = [...menuItems];

    // Filter by search query (dish name only)
    if (searchQuery) {
      filtered = menuItems
        .map((category) => {
          const itemsInCategory = category.items.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()),
          );
          if (itemsInCategory.length > 0) {
            return {
              ...category,
              items: itemsInCategory,
            };
          }
          return null;
        })
        .filter(Boolean);
    }

    // Filter by category (when a dish is selected from dropdown)
    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
      // Auto-open the selected category
      setOpenCategories((prev) =>
        prev.includes(selectedCategory) ? prev : [...prev, selectedCategory],
      );
    }

    // Filter by selected filter button
    if (selectedFilter !== 'all') {
      filtered = filtered
        .map((category) => {
          let itemsInCategory = category.items;
          if (selectedFilter === 'veg') {
            itemsInCategory = itemsInCategory.filter((item) => item.is_veg);
          } else if (selectedFilter === 'nonveg') {
            itemsInCategory = itemsInCategory.filter((item) => !item.is_veg);
          } else if (selectedFilter === 'roundtheclock') {
            itemsInCategory = itemsInCategory.filter(
              (item) =>
                !item.available_24h &&
                item.service_hours &&
                item.service_hours.trim() !== '',
            );
          } else if (selectedFilter === 'popular') {
            itemsInCategory = itemsInCategory.filter((item) => item.popular);
          }
          if (itemsInCategory.length > 0) {
            return {
              ...category,
              items: itemsInCategory,
            };
          }
          return null;
        })
        .filter(Boolean);
    }

    // Animate the transition
    setIsAnimating(true);
    setTimeout(() => {
      setFilteredMenuItems(filtered);
      setIsAnimating(false);
    }, 300);
  }, [searchQuery, selectedCategory, selectedFilter]);

  // Setup intersection observer for animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all menu category elements
    const elements = document.querySelectorAll('.menu-category');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredMenuItems]);

  const toggleCategory = (category) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category],
    );
  };

  const getCategoryIcon = (catId) => {
    return categoryIconMap[catId] || '🍴';
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="w-full max-w-5xl">
        <FilterButtons
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      </div>

      {filteredMenuItems.length === 0 ? (
        <div className="animate-fadeIn flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 animate-bounce text-6xl">🍽️</div>
          <h3 className="mb-2 text-2xl font-semibold text-gray-700">
            No menu items found
          </h3>
          <p className="max-w-md text-gray-500">
            Try changing your filters or selecting a different category to
            discover more delicious options.
          </p>
        </div>
      ) : (
        <div
          className={`w-full transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
        >
          {filteredMenuItems.map((val, index) => (
            <div
              key={index}
              data-category={val.category}
              className="menu-category mx-auto mb-8 flex w-full max-w-5xl translate-y-10 transform flex-col items-center justify-center gap-4 rounded-xl opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Category Header with Toggle Button */}
              <div className="flex w-full items-center justify-between">
                <button
                  className="flex w-full items-center justify-between rounded-xl border-2 border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 text-left text-3xl font-bold text-orange-500 shadow transition-all duration-300 hover:border-orange-300 hover:bg-white hover:shadow-lg"
                  onClick={() => toggleCategory(val.category)}
                >
                  <span className="font-fun flex items-center tracking-wider uppercase">
                    <span className="mr-3 inline-block text-2xl">
                      {getCategoryIcon(val.category)}
                    </span>
                    {val.category.replace(/_/g, ' ')}
                  </span>
                  <div
                    className={`rounded-full bg-orange-100 p-2 transition-all duration-300 ${openCategories.includes(val.category)
                      ? 'rotate-180 bg-orange-200'
                      : ''
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Show Menu Items - Open by Default */}
              <div
                className={`w-full transition-all duration-500 ease-in-out ${openCategories.includes(val.category)
                  ? 'max-h-[5000px] scale-y-100 opacity-100'
                  : 'pointer-events-none max-h-0 scale-y-95 opacity-0'
                  }`}
              >
                <ul className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {val.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="menu-item group flex flex-col rounded-2xl border border-orange-200 bg-white/90 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:bg-orange-50 hover:shadow-2xl"
                      style={{
                        animationDelay: `${itemIndex * 100}ms`,
                        animation: openCategories.includes(val.category)
                          ? `fadeSlideUp 0.5s ${itemIndex * 100}ms ease-out backwards`
                          : 'none',
                      }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-[18px] font-semibold text-orange-700 transition-colors duration-300 group-hover:text-orange-900">
                          {item.name}
                        </h3>
                        <span
                          className={`ml-2 flex w-22 items-center justify-center rounded-full px-2 py-1 text-xs font-bold transition-all duration-300 ${item.is_veg
                            ? 'w-22 border border-green-300 bg-green-100 text-green-700 group-hover:bg-green-200'
                            : 'border border-red-300 bg-red-100 text-red-700 group-hover:bg-red-200'
                            }`}
                        >
                          {item.is_veg ? 'VEG' : 'NON-VEG'}
                        </span>
                      </div>
                      <p className="mb-3 text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                        {item.description}
                      </p>
                      <div className="mt-auto flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <span className="text-lg font-bold text-orange-600 transition-colors duration-300 group-hover:text-orange-700">
                          ₹{item.base_price}
                        </span>
                        <span
                          className={`rounded px-2 py-1 text-xs font-semibold transition-colors duration-300 ${item.available_24h
                            ? 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
                            : item.service_hours
                              ? 'bg-orange-100 text-orange-700 group-hover:bg-orange-200'
                              : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                            }`}
                        >
                          {item.available_24h
                            ? '24/7 Available'
                            : item.service_hours
                              ? `Service: ${item.service_hours}`
                              : 'Not Available'}
                        </span>

                        {item.popular && (
                          <span className="flex items-center gap-1 rounded bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 transition-colors duration-300 group-hover:bg-amber-200">
                            <span>⭐</span> Popular
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCards;
