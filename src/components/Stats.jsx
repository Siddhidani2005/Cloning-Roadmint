import React from 'react';
import { FaLightbulb, FaCodeBranch } from 'react-icons/fa';

export default function Stats() {
    return (
        <div className="bg-neutral-900 p-2 space-y-5">
            <div className="bg-neutral-800 w-full max-w-7xl mx-auto p-8 rounded-lg shadow-lg">
                <p className="text-lg font-medium text-gray-400 mb-3 flex items-center gap-1 select-none">
                    <FaLightbulb className=" text-gray-300" />
                    Daily Tip :
                </p>
                <p className="mt-1 text-white font-medium text-xl">
                    You don’t need a CS degree to be a great dev.
                </p>
            </div>
            <div className="bg-neutral-800 w-full max-w-7xl mx-auto p-8 rounded-lg shadow-lg">
                <p className="text-lg font-medium text-gray-400 mb-3 flex items-center gap-1 select-none">
                    <FaCodeBranch className="text-gray-300" />
                    Fun Developer Stat :
                </p>
                <p className="mt-1 text-white font-medium text-xl">                    
                    60% of developers learned programming through online tutorials and YouTube.
                </p>
            </div>
            <div className="bg-neutral-800 w-full max-w-7xl mx-auto p-8 rounded-lg shadow-lg select-none">
                <p className="text-lg font-medium text-gray-400 mb-3 flex items-center gap-1">
                    <FaLightbulb className="text-gray-300" />
                    Daily Trivia :
                </p>
                <p className="mt-8 text-white font-medium text-xl">
                What five letter word is the motto of the IBM Computer company?
                </p>
            <div className="flex flex-wrap mt-8 gap-4">
                {["Pixel", "Think", "Logic", "Click"].map((option, index) => (
                    <button
                        key={index}
                        className="bg-neutral-700 text-white  px-14 py-4 rounded-md text-sm font-medium hover:bg-neutral-600 transition-all duration-150"
                    >
                        {option}
                    </button>
                ))}
            </div>

        </div>
                </div >
    );
}
