import { motion } from "framer-motion";
import { Network, Database, Shield, Eye, Server, Lock } from "lucide-react";

export const Tools = () => {
  const tools = [
    {
      icon: Network,
      title: "Network Analysis",
      description: "Advanced tools for analyzing network traffic and identifying patterns",
    },
    {
      icon: Database,
      title: "Data Mining",
      description: "Extract and analyze large datasets to uncover hidden connections",
    },
    {
      icon: Shield,
      title: "Threat Intelligence",
      description: "Real-time monitoring and analysis of potential threats",
    },
    {
      icon: Eye,
      title: "Digital Forensics",
      description: "Professional tools for gathering and analyzing digital evidence",
    },
    {
      icon: Server,
      title: "Log Analysis",
      description: "Advanced log parsing and correlation capabilities",
    },
    {
      icon: Lock,
      title: "Encryption Analysis",
      description: "Tools for analyzing encrypted communications",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Investigation Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            State-of-the-art tools designed for professional cyber investigators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-600">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};