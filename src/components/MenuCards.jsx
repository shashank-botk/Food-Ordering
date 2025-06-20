import { useState, useEffect } from 'react';
import { menuItems } from '../../store/menuItemData';
import { FilterButtons } from './FilterButtons';

const MenuCards = ({ selectedCategory, searchQuery }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [openCategories, setOpenCategories] = useState(
    menuItems.map((category) => category.category),
  );
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);

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
            // Exclude 24-hour dishes (available_24h true or service_hours empty)
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

    setFilteredMenuItems(filtered);
  }, [searchQuery, selectedCategory, selectedFilter]);

  const toggleCategory = (category) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category],
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-8">
      <div className="py-2">
        <FilterButtons
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      </div>

      {filteredMenuItems.map((val, index) => (
        <div
          key={index}
          data-category={val.category}
          className="mb-8 flex w-full max-w-5xl flex-col items-center justify-center gap-4"
        >
          {/* Category Header with Toggle Button */}
          <div className="flex w-full items-center justify-between">
            <button
              className="flex w-full items-center justify-between rounded-xl border-2 border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 text-left text-3xl font-bold text-orange-500 shadow transition hover:border-orange-300 hover:bg-white"
              onClick={() => toggleCategory(val.category)}
            >
              <span className="font-fun tracking-wider uppercase">
                {val.category.replace(/_/g, ' ')}
              </span>
              <img
                className={`h-8 w-8 transition-transform duration-300 ${!openCategories.includes(val.category) ? 'rotate-0' : 'rotate-180'}`}
                src="https://img.icons8.com/?size=100&id=5fN9OjLoJlzY&format=png&color=000000"
                alt="Toggle"
              />
            </button>
          </div>

          {/* Show Menu Items - Open by Default */}
          <div
            className={`w-full transition-all duration-500 ease-in-out ${
              openCategories.includes(val.category)
                ? 'max-h-[2000px] scale-y-100 opacity-100'
                : 'pointer-events-none max-h-0 scale-y-95 opacity-0'
            }`}
          >
            <ul className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {val.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="menu-item group flex flex-col rounded-2xl border border-orange-200 bg-white/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-50 hover:shadow-2xl"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-orange-700 group-hover:text-orange-900">
                      {item.name}
                    </h3>
                    <span
                      className={`ml-2 rounded-full px-3 py-1 text-xs font-bold ${
                        item.is_veg
                          ? 'border border-green-300 bg-green-100 text-green-700'
                          : 'border border-red-300 bg-red-100 text-red-700'
                      }`}
                    >
                      {item.is_veg ? 'VEG' : 'NON-VEG'}
                    </span>
                  </div>
                  <p className="mb-3 text-gray-600">{item.description}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="text-lg font-bold text-orange-600">
                      ₹{item.base_price}
                    </span>
                    <span
                      className={`$$ {item.available_24h ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500' } rounded px-2 py-1 text-xs font-semibold`}
                    >
                      {item.available_24h
                        ? '24/7 Available'
                        : `Service: ${item.service_hours}`}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCards;
