import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Contact our team of experts for professional consultation and support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-accent mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">contact@rakshika.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-accent mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+91 XXXXX XXXXX</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-accent mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  Nagpur<br />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent h-32"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-accent text-white font-medium rounded-lg transition-transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};