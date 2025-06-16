import { useState } from 'react';
import { menuItems } from '../../store/menuItemData';
import { FilterButtons } from './FilterButtons';

const MenuCards = () => {
  const [openCategories, setOpenCategories] = useState([]);

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
        <FilterButtons />
      </div>

      {menuItems.map((val, index) => (
        <div
          key={index}
          className="mb-5 flex w-3/4 flex-col items-center justify-center gap-4"
        >
          {/* Category Header with Toggle Button */}
          <div className="flex w-full items-center justify-between">
            <button
              className=" flex w-full justify-between rounded-2xl border-5 border-double p-3 text-left text-5xl text-yellow-300 uppercase transition hover:border-transparent hover:bg-white"
              onClick={() => toggleCategory(val.category)}
            >
              <h1 className='text-orange-400 font-bold font-fun'>{val.category}</h1>
              {/* Change Arrow Based on Open/Closed State */}
              <img
                className={`h-10 w-10 transition-transform duration-500 ease-in-out ${
                  openCategories.includes(val.category)
                    ? 'rotate-180'
                    : 'rotate-0'
                }`}
                src="https://img.icons8.com/?size=100&id=5fN9OjLoJlzY&format=png&color=000000"
                alt="Toggle"
              />
            </button>
          </div>

          {/* Show Menu Items Only When Category is Open */}
          <div
            className={`transform overflow-hidden transition-all duration-500 ease-in-out ${
              openCategories.includes(val.category)
                ? 'max-h-screen scale-y-100 opacity-100'
                : 'max-h-0 scale-y-0 opacity-0'
            }`}
          >
            <ul className="mt-4 flex w-full flex-wrap justify-center gap-4">
              {val.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="rounded-xl border-4 border-amber-300 p-3"
                >
                  <li className="flex h-[18vh] w-[20vw] flex-col items-center justify-center rounded-lg bg-amber-50 p-6 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-102 hover:bg-yellow-400 hover:text-white">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-center text-sm">{item.description}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCards;
