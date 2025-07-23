import {
  FaTerminal,
  FaDollarSign,
  FaRoute,
  FaHeartbeat,
  FaDownload,
  FaRobot,
  FaEraser,
  FaCloud,
} from "react-icons/fa";

const features = [
  {
    title: "No Sign-Up Needed",
    description: "Jump straight in—no account required.",
    icon: <FaTerminal aria-hidden="true" className="text-2xl text-neutral-400 group-hover:text-green-500 transition-colors duration-200" />,
  },
  {
    title: "Forever Free",
    description: "Completely free to use. No fees. No paywalls. Ever.",
    icon: <FaDollarSign aria-hidden="true" className="text-2xl text-neutral-400 group-hover:text-green-500 transition-colors duration-200" />,
  },
  {
    title: "Personalized Daily Steps",
    description: "Your topic is broken down into clear, focused steps for each day.",
    icon: <FaRoute aria-hidden="true" className="text-2xl text-neutral-400 group-hover:text-green-500 transition-colors duration-200" />,
  },
  {
    title: "Progress Tracking",
    description: "Mark topics as 'learned' and watch your progress grow over time.",
    icon: <FaHeartbeat aria-hidden="true" className="text-2xl text-neutral-400 group-hover:text-green-500 transition-colors duration-200" />,
  },
  {
    title: "Export to CSV",
    description: "Download your entire roadmap and progress as a CSV file anytime.",
    icon: <FaDownload aria-hidden="true" className="text-2xl text-neutral-400 group-hover:text-green-500 transition-colors duration-200" />,
  },
  {
    title: "AI-Powered Breakdown",
    description: "Smart topic segmentation—crafted with the help of AI.",
    icon: <FaRobot aria-hidden="true" className="text-2xl text-neutral-400 group-hover:text-green-500 transition-colors duration-200" />,
  },
  {
    title: "Clean, Minimal UI",
    description: "No clutter. No distractions. Just focused learning.",
    icon: <FaEraser aria-hidden="true" className="text-2xl text-neutral-400 group-hover:text-green-500 transition-colors duration-200" />,
  },
  {
    title: "Offline Access",
    description: "Use your roadmap anytime—even without the internet.",
    icon: <FaCloud aria-hidden="true" className="text-2xl text-neutral-400 group-hover:text-green-500 transition-colors duration-200" />,
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className=" flex-col border lg:border-0 lg:border-r py-10 relative group lg:border-b border-neutral-800">
    <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t to-transparent pointer-events-none"></div>
    <div className="mb-4 relative z-10 px-10 text-neutral-400 text-xl group-hover:text-green-500">
      {icon}
    </div>
    <div className="text-lg font-bold mb-2 relative z-10 px-10">
      <div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full group-hover:bg-purple-500 transition-all duration-200 origin-center"></div>
      <span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-100">
        {title}
      </span>
    </div>
    <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
  </div>
);

export default function FeaturesGrid() {
  return (
        <div className="bg-neutral-900">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 pt-20 pb-32 lg:pt-32 px-4 lg:px-0 max-w-7xl mx-auto select-none gap-2 lg:gap-0">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
    </div>
  );
}