import Navbar from './components/Navbar';
// import { CategoryTabs } from './components/CategoryTabs';
import CategoryTabs from './components/CategoryTabs';
import MenuCards from './components/MenuCards';

function App() {
  return (
    <>
      <Navbar />
      <CategoryTabs />
      <main className="container mx-auto max-w-7xl px-4 py-6 md:px-8">
        <div className="flex flex-col items-center font-[menuTitle]">
          <h1 className="text-center text-4xl font-bold text-gray-900">
            Discover Our Receipes And
          </h1>
          <div className="relative flex w-fit items-center justify-center">
            <h1 className="font-display absolute text-center text-4xl font-bold text-white">
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
    </>
  );
}

export default App;
