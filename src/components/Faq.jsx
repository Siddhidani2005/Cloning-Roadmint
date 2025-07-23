import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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
    answer:
      "Nope. Your progress is saved in local storage so it persists even after refreshing.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-900  max-w-7xl px-4 py-12 mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-neutral-400 max-w-xl mx-auto">
          Answers to the most common questions about the Roadmint app, learning
          pace, and features.
        </p>
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item bg-neutral-800 rounded-lg py-2 px-5 border-0"
            data-state={openIndex === index ? "open" : "closed"}
          >
            <h3 className="flex">
              <button
                type="button"
                id={`faq${index}-trigger`}
                aria-controls={`faq${index}-panel`}
                aria-expanded={openIndex === index}
                onClick={() => toggleFAQ(index)}
                className="group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 font-medium transition-all outline-none focus-visible:ring-[3px] text-left text-lg text-white hover:text-neutral-300 cursor-pointer w-full"
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 text-neutral-400 group-hover:text-green-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>

            <div
              id={`faq${index}-panel`}
              role="region"
              aria-labelledby={`faq${index}-trigger`}
              className={`overflow-hidden text-sm text-neutral-300 transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 py-2" : "max-h-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
