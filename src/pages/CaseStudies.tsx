import { motion } from "framer-motion";
import { Shield, Search, Lock } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      title: "Airline Threat Investigation",
      description: "Successfully traced VPN-masked perpetrator of airline bomb threats through advanced IP analysis.",
      icon: Shield,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      title: "Corporate Network Breach",
      description: "Identified anonymous attacker despite TOR network usage through correlation analysis.",
      icon: Search,
      color: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    {
      title: "Cryptocurrency Tracking",
      description: "Traced cryptocurrency transactions through multiple VPN layers to identify fraud perpetrator.",
      icon: Lock,
      color: "bg-gradient-to-r from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Case Studies
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Real-world examples of successful cyber investigations using our advanced methodologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${caseStudy.color} p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <caseStudy.icon className="w-12 h-12 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
              <p className="text-gray-100">{caseStudy.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudies;