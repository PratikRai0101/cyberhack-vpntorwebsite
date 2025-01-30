import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const Timeline = () => {
  const steps = [
    {
      title: "Initial Detection",
      description: "Automated systems identify potential threats and suspicious activities",
    },
    {
      title: "Data Collection",
      description: "Gathering digital footprints and technical indicators",
    },
    {
      title: "Analysis",
      description: "Advanced correlation of collected data to identify patterns",
    },
    {
      title: "Attribution",
      description: "Linking activities to specific sources or individuals",
    },
    {
      title: "Documentation",
      description: "Comprehensive reporting of findings and evidence",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Investigation Methodology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our systematic approach to investigating cyber threats ensures thorough
            analysis and accurate attribution.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};