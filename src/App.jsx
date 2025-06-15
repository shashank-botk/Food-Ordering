import React from 'react';
import Navbar from './components/Navbar';
import { CategoryTabs } from './components/CategoryTabs';
import { FilterButtons } from './components/FilterButtons';
import MenuCards from './components/MenuCards';

function App() {
  return (
    <div
      className="min-h-screen bg-orange-100 bg-cover bg-center"
      style={{ backgroundImage: 'url(/public/images/globalBackground.webp)' }}
    >
      <Navbar />
      <CategoryTabs />
      <main className="container  mx-auto max-w-7xl px-4 py-6 md:px-8">
        {/* <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center font-display">
            Our Menu
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover our wide range of delicious dishes, from local favorites to international cuisine
          </p>
        </div> */}

        <div className='flex flex-col items-center font-[menuTitle]'>
          <h1 className="font-bold text-center text-4xl text-gray-900">
          Discover Our Receipes And
        </h1>
        <div className="relative flex w-fit items-center justify-center">
          <h1 className="font-display absolute text-center text-4xl font-bold text-white ">
            Taste The Joy
          </h1>
          <img
            className="h-[4em] w-full object-cover"
            src="/public/images/paintbrush_red.svg"
            alt=""
          />
        </div>
        </div>
      </main>
      <MenuCards />
    </div>
  );
}

export default App;
