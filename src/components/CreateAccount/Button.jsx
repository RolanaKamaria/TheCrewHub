import React from "react";

function Button({ text, onClick, className }) {
  return (
    <button
    className={`border border-solid border-button2-light dark:border-button2-light bg-mode-light
              dark:bg-mode-dark hover:bg-gray-hover-light hover:dark:bg-gray-hover-dark rounded-xl
              xl:w-60 xl:h-14 lg:w-56 lg:h-12 md:w-40 md:h-12 sm:w-36 sm:h-10 w-24 h-12 ${className}`}
      onClick={onClick} >
      {text}
    </button>
  );
}

export default Button;
