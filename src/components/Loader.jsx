import React from "react";

export const ThreeDotLoader = () => {
  return (
    <>
      <div className="flex space-x-2 justify-center items-center text-white bg-white h-8 dark:invert">
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
      </div>
    </>
  );
};
