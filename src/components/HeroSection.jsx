import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import RainBg from "./RainBg";

export default function HeroSection() {
  const topics = [
    "Web Development",
    "Data Structures and Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "Python Programming",
    "C++ Programming",
    "System Design",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Cloud Computing",
    "DevOps",
    "Cybersecurity",
    "Mobile App Development",
    "Blockchain Development",
    "Game Development",
    "Computer Architecture",
    "Linux and Shell Scripting",
    "Frontend Development (HTML, CSS, JS, React)",
    "Backend Development (Node.js, Django, Spring Boot)",
    "Software Engineering Principles",
    "Git and Version Control",
    "Data Science",
    "Natural Language Processing (NLP)",
    "Quantum Computing (Beginner Level)",
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      <RainBg />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-1 text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-7xl font-bold text-white flex flex-wrap justify-center">
          {"Roadmap".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block animate-slide-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-gray-300 max-w-xl mx-auto font-bold">
          Make sure your topic is clear, specific, and well-defined — the more precise it is, the better the roadmap you'll get!
        </p>

        {/* Search Box */}
        <div className="mt-10 mx-auto max-w-xl">
          <form>
            <div className="bg-gradient-to-br from-[#60ff1c] via-[#ff708f] to-[#e97cff] p-1 rounded-2xl">
              <div className="flex items-center bg-neutral-800 rounded-2xl shadow-2xl px-3 py-2 gap-3">
                <input
                  id="roadmapSearch"
                  name="roadmapSearch"
                  type="text"
                  placeholder="Topic Name..."
                  className="w-full h-10 bg-transparent text-white px-3 py-1 rounded-md outline-none font-medium tracking-wider border-0"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  title="Search"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-white bg-gradient-to-br from-[#60ff1c] via-[#ff708f] to-[#e97cff] hover:scale-105 transition-transform duration-300"
                >
                  <FiSearch size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Topics */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {topics.map((topic, i) => (
            <button
              key={i}
              type="button"
              className="text-gray-300 border-2 border-neutral-800 hover:text-white hover:scale-105 transition-transform duration-300 font-medium rounded-lg py-2.5 px-5 text-xs"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
