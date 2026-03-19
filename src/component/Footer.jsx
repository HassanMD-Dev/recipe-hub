import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 py-12 border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo in Footer */}
        <h2 className="text-xl font-black text-orange-500 tracking-tighter mb-4">
          RECIPE<span className="text-gray-800 dark:text-gray-100">HUB</span>
        </h2>

        {/* Attribution */}
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          Built with ❤️ by{" "}
          <span className="text-orange-500 font-bold underline decoration-2 underline-offset-4 cursor-pointer">
            Hassan Muhayyudin
          </span>
        </p>

        {/* Tagline */}
        <p className="text-xs text-gray-400 mt-4 uppercase tracking-[0.2em]">
          © 2026 • Discover. Cook. Eat. Repeat.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
