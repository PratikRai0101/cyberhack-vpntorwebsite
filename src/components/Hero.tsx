import { motion } from "framer-motion";
import { Shield, Search, Lock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-primary to-secondary text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="px-3 py-1 text-sm font-medium bg-accent/10 rounded-full mb-6 inline-block">
          Advanced Cybersecurity Investigation
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Unmasking Digital Threats
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Advanced tools and methodologies for identifying perpetrators behind cyber threats,
          even when masked by VPNs and anonymity networks.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-white text-primary font-medium rounded-lg transition-transform hover:scale-105">
            Explore Tools
          </button>
          <button className="px-8 py-3 border border-white/20 rounded-lg transition-transform hover:scale-105">
            Learn More
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
      >
        {[
          {
            icon: Shield,
            title: "Threat Detection",
            description: "Advanced systems to identify and analyze digital threats in real-time"
          },
          {
            icon: Search,
            title: "IP Intelligence",
            description: "Sophisticated tools for tracking and analyzing VPN-masked connections"
          },
          {
            icon: Lock,
            title: "Secure Analysis",
            description: "Protected environment for investigating cyber threats safely"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <feature.icon className="w-10 h-10 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};