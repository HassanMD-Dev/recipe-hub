import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-64 w-full">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-orange-100 rounded-full "></div>
        <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin "></div>
      </div>
      <p className="mt-4 text-orange-600 font-medium animate-pluse tracking-widest uppercase text-xs">
        Finding Recipes...
      </p>
    </div>
  );
};
export default Loading;
