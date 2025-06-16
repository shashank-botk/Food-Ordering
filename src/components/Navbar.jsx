// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <>
//       <nav className="will-change-opacity sticky top-[15px] m-[15px] flex items-center justify-between overflow-hidden rounded-[0.5rem] border border-black bg-white p-[10px_30px] shadow-[0.5px_1px_0_#000]">

//         <div className="logo">

//           {/* <img src="" alt="logo" /> */}

//           <h1 className="no-drag cursor-pointer font-mono text-[1.6rem] font-semibold tracking-[2px] transition-transform duration-300 ease-in-out will-change-transform select-none">
//             LOGO
//           </h1>
//         </div>

//         <div className="search-bar">

//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearch}
//             name="search"
//             placeholder="Search Your Cuisine..."
//             aria-label="Search"
//             className="placeholder:word-spacing-[1.5px] m-[2px] w-[300px] rounded-[0.5rem] border-[1.5px] border-black p-[0.875rem_1.5rem] text-base text-orange-600 shadow-[1px_1.5px_0_#000] transition-all duration-[0.25s] ease-in-out outline-none not-placeholder-shown:font-[Verdana,Geneva,Tahoma,sans-serif] not-placeholder-shown:tracking-[1px] placeholder:translate-y-[2.5px] placeholder:p-[0.875rem_0.7rem] placeholder:font-[Verdana,Geneva,Tahoma,sans-serif] placeholder:font-medium placeholder:tracking-[1px] placeholder:text-black placeholder:opacity-80 focus:shadow-[3px_3.5px_0_black]"
//           />

//         </div>

//         <div className="menu-icon">

//           <label className="hamburger">

//             <input
//               type="checkbox"
//               checked={isMenuOpen}
//               onChange={handleMenuToggle}
//             />

//             <svg viewBox="0 0 32 32">

//               <path
//                 className="line line-top-bottom"
//                 d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
//               ></path>

//               <path className="line" d="M7 16 27 16"></path>

//             </svg>

//           </label>

//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className="bg-white overflow-hidden sticky top-[15px] z-50 flex items-center justify-between m-[15px] p-[10px_30px] rounded-[0.5rem] shadow-[0.5px_1px_0_#000] border border-black will-change-opacity">
        {/* Rest of the navbar content remains the same */}
        <div className="logo">
          {/* <img src="" alt="logo" /> */}
          <h1 className="text-darkred text-[1.6rem] font-semibold font-mono transition-transform duration-300 ease-in-out animate-[float_3s_ease-in-out_infinite] cursor-pointer select-none no-drag tracking-[2px] will-change-transform">LOGO</h1>
        </div>

        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            name="search"
            placeholder="Search Your Cuisine..."
            aria-label="Search"
            className="w-[300px] m-[2px] p-[0.875rem_1.5rem] text-base border-[1.5px] border-black rounded-[0.5rem] shadow-[1px_1.5px_0_#000] outline-none transition-all duration-[0.25s] ease-in-out text-orange-600 placeholder:p-[0.875rem_0.7rem] placeholder:text-black placeholder:font-medium placeholder:opacity-80 placeholder:font-[Verdana,Geneva,Tahoma,sans-serif] placeholder:tracking-[1px] placeholder:word-spacing-[1.5px] placeholder:translate-y-[2.5px] focus:shadow-[3px_3.5px_0_black] not-placeholder-shown:font-[Verdana,Geneva,Tahoma,sans-serif] not-placeholder-shown:tracking-[1px]"
          />
        </div>

        <div className="menu-icon">
          <label className="hamburger">
            <input
              type="checkbox"
              checked={isMenuOpen}
              onChange={handleMenuToggle}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;