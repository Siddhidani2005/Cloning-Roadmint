import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
<footer className="s bg-neutral-900 text-white">
        <div className="relative z-10">
        <div className="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
          <div className="inline-flex items-center">
            <button type="button" aria-label="Navigate" className="text-2xl text-white font-semibold tracking-wide flex items-center w-fit">
              <img
                alt="Logo"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="w-10 mt-0.5"
                style={{ color: "transparent" }}
                src="\logo.webp"
              />

              Road
              <span className="text-[#60ff1c]">m</span>
              <span className="text-[#ff708f]">i</span>
              <span className="text-[#ffd86c]">n</span>
              <span className="text-[#e97cff]">t</span>
            </button>
            <div className="border-s border-neutral-700 ps-5 ms-5">
              <p className="text-sm text-neutral-400">
                All rights reserved © 2025 Roadmint</p>
            </div>
          </div>
          <p className="text-xs font-medium text-gray-400 mt-1 max-w-sm">
            Get a personalized free AI-powered learning roadmap in seconds. No sign-up &amp; Account needed. Free forever. Track your progress and export your learning data.

          </p>
        </div>
      </div>
    </footer>
  )
}
