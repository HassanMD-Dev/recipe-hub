import React, { useState } from "react";

// 1. Props mein setDarkMode ko bhi receive karein
const Navbar = ({ onSearch, darkMode, setDarkMode }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    // 2. dark:bg-slate-900 aur text transitions add kiye hain
    <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-40 px-6 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo section with Toggle Button */}
        <div className="flex items-center justify-between w-full md:w-auto gap-1">
          <img src="/logo.png" alt="RecipeHub Logo" className="w-9 h-9" />
          <h1 className="text-2xl font-black text-orange-500 tracking-tighter cursor-pointer">
            RECIPE<span className="text-gray-800 dark:text-gray-100">HUB</span>
          </h1>

          {/* --- DARK MODE TOGGLE BUTTON --- */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-yellow-400 hover:scale-110 transition-all md:ml-4"
          >
            {/* AGAR Dark Mode ON hai (darkMode === true) */}
            {darkMode ? (
              // SUN Icon dikhao (Taake user click kare aur LIGHT mode ho jaye)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              // AGAR Light Mode ON hai (darkMode === false)
              // MOON Icon dikhao (Taake user click kare aur DARK mode ho jaye)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591-1.591M12 18.75V21"
                />
                <circle cx="12" cy="12" r="5" />
              </svg>
            )}
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="relative w-full md:w-96 group">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full bg-gray-100 dark:bg-slate-800 dark:text-white border-none rounded-2xl py-2 px-5 pr-12 focus:ring-2 focus:ring-orange-500 outline-none transition-all text-sm"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-1.5 rounded-xl hover:bg-orange-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-600 dark:text-gray-300">
          <a
            href="#"
            className="hover:text-orange-500 dark:hover:text-orange-400"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-orange-500 dark:hover:text-orange-400"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
