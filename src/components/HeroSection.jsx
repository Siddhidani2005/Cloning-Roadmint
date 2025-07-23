import { FiSearch } from "react-icons/fi";
import RainBg from "./RainBg";
import { motion } from "framer-motion";

export default function HeroSection() {
  const title = "Roadmap";

  return (
    <div className="relative bg-neutral-900 text-center px-4 overflow-hidden">
      {/* Rain Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <RainBg />
      </div>

      {/* Animated Title */}
      <h1 className="text-4xl sm:text-7xl font-bold text-white flex flex-wrap justify-center">
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      {/* Subtitle */}
      <p className="mt-5 text-gray-300 max-w-xl mx-auto font-bold flex flex-wrap gap-1 justify-center">
        Make sure your topic is clear, specific, and well-defined — the more precise it is, the better the roadmap you'll get!
      </p>

      {/* Search Input */}
      <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
        <form>
          <div className="bg-gradient-to-br from-[#60ff1c] via-[#ff708f] to-[#e97cff] p-1 rounded-2xl">
            <div className="relative z-10 flex gap-x-3 px-3 py-2 items-center bg-neutral-800 rounded-2xl shadow-2xl shadow-gray-900/20">
              <input
                type="text"
                name="roadmapSearch"
                id="roadmapSearch"
                placeholder="Topic Name..."
                className="w-full h-10 bg-transparent px-3 py-1 text-white text-base rounded-md outline-none border-0 tracking-wider font-medium capitalize"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-white bg-gradient-to-br from-[#60ff1c] via-[#ff708f] to-[#e97cff] hover:scale-105 duration-300"
              >
                <FiSearch size={20} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
