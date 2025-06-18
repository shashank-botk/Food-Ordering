import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CategoryTabs from './components/CategoryTabs';
import MenuCards from './components/MenuCards';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    console.log('Category selected:', categoryId); // Debug log
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <Navbar onCategorySelect={handleCategorySelect} />
      <CategoryTabs />
      <main className="container mx-auto max-w-7xl px-4 py-6 pb-0 md:px-8">
        <div className="font-fun flex flex-col items-center">
          <h1 className="text-center text-5xl font-black text-gray-900">
            Discover Our Recipes And
          </h1>
          <div className="relative my-4 flex w-[23em] items-center justify-center">
            <h1 className="absolute text-center text-[40px] font-bold text-white">
              Taste The Joy
            </h1>
            <img
              className="h-[4.5em] w-full object-cover"
              src="/images/paintbrush_red.svg"
              alt=""
            />
          </div>
        </div>
      </main>
      <MenuCards selectedCategory={selectedCategory} />
    </>
  );
}

export default App;
