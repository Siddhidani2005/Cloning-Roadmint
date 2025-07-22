import React from 'react';
import { FaLightbulb, FaCodeBranch } from 'react-icons/fa';

export default function Stats() {
    return (
        <div className="bg-black w-full min-h-screen px-2 md:px-4 py-10 space-y-6">

            {/* Daily Tip */}
            <div className="bg-[#262626] rounded-lg mx-auto p-6 md:p-8 shadow-md">
                <p className="text-lg font-medium text-gray-300 mb-3 flex items-center gap-2">
                    <FaLightbulb className="text-indigo-400" />
                    Daily Tip :
                </p>
                <p className="text-white font-bold text-xl">
                    You don’t need a CS degree to be a great dev.
                </p>
            </div>

            {/* Fun Developer Stat */}
            <div className="bg-[#262626] rounded-lg mx-auto p-6 md:p-8 shadow-md">
                <p className="text-lg font-medium text-gray-300 mb-3 flex items-center gap-2">
                    <FaCodeBranch className="text-indigo-400" />
                    Fun Developer Stat :
                </p>
                <p className="text-white font-bold text-xl">
                    60% of developers learned programming through online tutorials and YouTube.
                </p>
            </div>

            {/* Daily Trivia */}
            <div className="bg-[#262626] rounded-lg mx-auto p-6 md:p-8 shadow-md">
                <p className="text-lg font-medium text-gray-300 mb-3 flex items-center gap-2">
                    <FaLightbulb className="text-indigo-400" />
                    Daily Trivia :
                </p>
                <p className="text-white font-bold text-xl mb-4">
                    What five letter word is the motto of the IBM Computer company?
                </p>
                <div className="flex flex-wrap gap-4">
                    {["Pixel", "Think", "Logic", "Click"].map((option, index) => (
                        <button
                            key={index}
                            className="bg-neutral-700 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-600 transition-all duration-150"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
