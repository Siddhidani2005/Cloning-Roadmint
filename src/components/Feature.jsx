import { FaUserSecret, FaDollarSign, FaRoute, FaHeartbeat, FaDownload, FaRobot, FaBorderNone, FaCloud } from "react-icons/fa";

const features = [
  {
    title: "No Sign-Up Needed",
    description: "Jump straight in—no account required.",
    icon: <FaUserSecret className="text-2xl text-neutral-400 group-hover:text-green-500" />,
  },
  {
    title: "Forever Free",
    description: "Completely free to use. No fees. No paywalls. Ever.",
    icon: <FaDollarSign className="text-2xl text-neutral-400 group-hover:text-green-500" />,
  },
  {
    title: "Personalized Daily Steps",
    description: "Your topic is broken down into clear, focused steps for each day.",
    icon: <FaRoute className="text-2xl text-neutral-400 group-hover:text-green-500" />,
  },
  {
    title: "Progress Tracking",
    description: "Mark topics as 'learned' and watch your progress grow over time.",
    icon: <FaHeartbeat className="text-2xl text-neutral-400 group-hover:text-green-500" />,
  },
  {
    title: "Export to CSV",
    description: "Download your entire roadmap and progress as a CSV file anytime.",
    icon: <FaDownload className="text-2xl text-neutral-400 group-hover:text-green-500" />,
  },
  {
    title: "AI-Powered Breakdown",
    description: "Smart topic segmentation—crafted with the help of AI.",
    icon: <FaRobot className="text-2xl text-neutral-400 group-hover:text-green-500" />,
  },
  {
    title: "Clean, Minimal UI",
    description: "No clutter. No distractions. Just focused learning.",
    icon: <FaBorderNone className="text-2xl text-neutral-400 group-hover:text-green-500" />,
  },
  {
    title: "Offline Access",
    description: "Use your roadmap anytime—even without the internet.",
    icon: <FaCloud className="text-2xl text-neutral-400 group-hover:text-green-500" />,
  },
];

export default function FeatureGrid() {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border border-neutral-800">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-neutral-900 border border-neutral-800 px-6 py-10 transition hover:bg-neutral-800"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2 group-hover:translate-x-1 transition">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-300 max-w-xs">{feature.description}</p>
            <div className="absolute left-0 top-0 h-6 w-1 bg-purple-500 rounded-tr-full rounded-br-full scale-y-0 group-hover:scale-y-125 origin-top transition-transform duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
