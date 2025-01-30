import { motion } from "framer-motion";
import { Shield, Search, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 inline-block hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Advanced Cybersecurity Investigation
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          Unmasking Digital Threats
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Advanced tools and methodologies for identifying perpetrators behind cyber threats,
          even when masked by VPNs and anonymity networks.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/case-studies">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Case Studies
            </motion.button>
          </Link>
          <Link to="/resources">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              Explore Resources
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
      >
        {[
          {
            icon: Shield,
            title: "Threat Detection",
            description: "Advanced systems to identify and analyze digital threats in real-time",
            color: "bg-gradient-to-r from-purple-500 to-pink-500"
          },
          {
            icon: Search,
            title: "IP Intelligence",
            description: "Sophisticated tools for tracking and analyzing VPN-masked connections",
            color: "bg-gradient-to-r from-blue-500 to-cyan-500"
          },
          {
            icon: Lock,
            title: "Secure Analysis",
            description: "Protected environment for investigating cyber threats safely",
            color: "bg-gradient-to-r from-emerald-500 to-teal-500"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, translateY: -5 }}
            className={`${feature.color} p-6 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <feature.icon className="w-10 h-10 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-100">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};