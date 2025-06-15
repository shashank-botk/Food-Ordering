import React from 'react';
import Navbar from './components/Navbar';
import { CategoryTabs } from './components/CategoryTabs';
import { FilterButtons } from './components/FilterButtons';
import MenuCards from './components/MenuCards';

function App() {
  return (
    <div className="min-h-screen bg-red-600">
      <Navbar />
      <CategoryTabs />
      <main className="container mx-auto px-4 py-6 md:px-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center font-display">
            Our Menu
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover our wide range of delicious dishes, from local favorites to international cuisine
          </p>
        </div>

        <FilterButtons />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Menu items will be rendered here */}
        </div>
      </main>
          <>
      <MenuCards />
    </>
    </div>
  );
}

export default App;
