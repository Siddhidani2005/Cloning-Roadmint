import React from "react";
import RainBg from "./RainBg";
import { motion } from "framer-motion";


export default function Header() {
  return (
    <header className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Rain Background as background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <RainBg />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-[70px] flex flex-col justify-center items-center px-4 py-1">
        {/* Your logo, nav, title etc */}
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between gap-1">
          <button
            type="button"
            aria-label="Navigate"
            className="text-2xl text-white font-semibold tracking-wide flex items-center w-fit"
          >
            <img
              alt="Logo"
              loading="lazy"
              width="10"
              height="10"
              decoding="async"
              className="w-10 mt-0.5"
              style={{ color: "transparent" }}
              src="/logo.webp"
            />
            Road
            <span className="text-[#60ff1c]">m</span>
            <span className="text-[#ff708f]">i</span>
            <span className="text-[#ffd86c]">n</span>
            <span className="text-[#e97cff]">t</span>
          </button>
          <button
            type="button"
            aria-label="Navigate"
            className="text-gray-300 font-semibold cursor-pointer s:font-medium bg-neutral-800 hover:bg-neutral-900 hover:text-white border-2 border-neutral-700 duration-300 px-33 lg:px-5 py-2 lg:py-2.5 rounded-lg hover:-translate-y-0.5 active:scale-95"
          >
            Your Desk
          </button>
        </nav>
      </div>
            <div className=" pt-[110px] flex flex-wrap gap-2 justify-center">
        {/* You can insert topic buttons or components here */}
      </div>

    </header>
    
  );
}
