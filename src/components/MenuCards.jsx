import { menuItems } from '../../store/menuItemData';
import { FilterButtons } from './FilterButtons';

const MenuCards = () => {
  return (
    <>



      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <div className='py-2'>
          <FilterButtons />
        </div>
        {/* Render Categories & Assign Refs */}
        {menuItems.map((val, index) => (
          <div
            key={index}
            className="flex w-3/4 flex-col items-center justify-center gap-4  mb-5"
          >
            <h2
              className="customeTextStyle self-start font-[menuTitle]  text-5xl text-yellow-300 uppercase"
            >
              {val.category}
            </h2>
            <ul className="flex w-full flex-wrap gap-4">
              {val.items.map((item, itemIndex) => (
                <div className="border-4 border-amber-300 rounded-xl p-3">
                  <li
                    
                    key={itemIndex}
                    className="flex h-[18vh] w-[20vw]  flex-col items-center justify-center rounded-lg bg-amber-50 p-6 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-102 hover:bg-yellow-400 hover:text-white"
                  >
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-center text-sm">{item.description}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuCards;
