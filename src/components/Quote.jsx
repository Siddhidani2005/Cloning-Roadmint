import React from "react";

export default function Quote() {
  return (
    <div className="relative bg-black text-white max-w-7xl px-10 py-14 sm:px-6 lg:px-8 mx-auto overflow-hidden">
      <blockquote className="text-center lg:mx-auto lg:w-3/5">
        <h3 className="text-neutral-500 text-2xl font-semibold italic">Quote</h3>
        
        <div className="mt-6 lg:mt-10 relative">
          <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-300">

            <span className="relative z-10 italic text-neutral-200 ">
              "Today is the oldest you've ever been, and the youngest you'll ever be again.
            </span>
          </p>
        </div>
        <footer className="mt-6">
          <div className="font-semibold text-neutral-200">— Eleanor Roosevelt</div>
        </footer>
      </blockquote>
    </div>
  );
}
