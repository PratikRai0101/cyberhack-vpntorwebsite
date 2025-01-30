import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Tools } from "@/components/Tools";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <Hero />
      <Timeline />
      <Tools />
      <Contact />
    </motion.div>
  );
};

export default Index;