import { useState } from "react";
import { motion } from "framer-motion";

export default function Topics() {
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

            <div className="bg-neutral-900 p-2 ">

                <div className="mt-10 sm:mt-20 flex items-center flex-wrap gap-2 justify-center">

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
          );
}
