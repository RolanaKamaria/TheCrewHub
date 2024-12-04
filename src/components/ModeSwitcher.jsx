import React, { useState } from "react"
import {SunIcon, MoonIcon} from "@heroicons/react/outline";
import { useTheme } from "./ThemeProvider"; 

const ModeSwitcher = ({className}) => {
    const { isLight, setIsLight } = useTheme();
  return (
    <div className={`border-2 border-button2-light dark:border-button2-light rounded-full
    absolute right-10  px-2 py-1 justify-center items-center content-center ${className}`}>
  <button
        type="button"
        onClick={() => setIsLight(!isLight)}
        aria-label="Toggle dark mode"
      >
               {isLight ? (
                 <MoonIcon className="w-4 h-4 text-text-light fill-text-light " />
               ) : (
                 <SunIcon className="w-4 h-4 text-text-dark fill-text-dark " />
               )}
   </button>
   </div>
  )
}

export default ModeSwitcher
