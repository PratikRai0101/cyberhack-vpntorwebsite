import { motion } from "framer-motion";
import { Book, FileText, Video, Download } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Investigation Guides",
      items: [
        { name: "VPN Traffic Analysis Guide", type: "PDF", icon: FileText },
        { name: "IP Tracking Methodology", type: "PDF", icon: FileText },
        { name: "Digital Forensics Handbook", type: "PDF", icon: Book }
      ],
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      title: "Training Materials",
      items: [
        { name: "Advanced IP Tracing Course", type: "Video", icon: Video },
        { name: "VPN Investigation Techniques", type: "Video", icon: Video },
        { name: "Network Analysis Tools", type: "Guide", icon: Book }
      ],
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Software",
      items: [
        { name: "IP Analysis Toolkit", type: "Software", icon: Download },
        { name: "Traffic Monitor Pro", type: "Software", icon: Download },
        { name: "Network Mapper Elite", type: "Software", icon: Download }
      ],
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
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Investigation Resources
        </h1>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Access our comprehensive collection of guides, tools, and training materials
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${category.color} p-6 rounded-xl shadow-lg`}
            >
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Resources;