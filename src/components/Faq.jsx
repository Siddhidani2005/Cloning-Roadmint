import React, { useState } from "react";

const faqs = [
  {
    question: "Is this app really free?",
    answer: "Yes! The app is completely free with no hidden charges.",
  },
  {
    question: "Do I need to sign up to use this?",
    answer: "No sign-up is required to get started. Just open and use it!",
  },
  {
    question: "Can I customize the learning pace or days?",
    answer: "Absolutely! You can tailor your schedule to match your pace.",
  },
      {
    question: "Do I need to understand JSON?",
    answer: "Not at all! Everything is handled for you behind the scenes.",
  },
  {
    question: "Can I track my progress?",
    answer: "Yes, your progress is saved locally and visually tracked.",
  },
  {
    question: "Will I lose my data if I refresh?",
    answer: "Nope. Your progress is saved in local storage so it persists even after refreshing.",

  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-4 md:px-12 py-16 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Answers to the most common questions about the Roadmint app, learning pace, and features.
        </p>
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#1e1e1e] rounded-xl overflow-hidden">
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-medium text-base md:text-lg focus:outline-none"
            >
              {faq.question}

            </button>

            {/* Answer Panel */}
            <div
              className={`px-6 pb-5 text-sm text-gray-400 transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
