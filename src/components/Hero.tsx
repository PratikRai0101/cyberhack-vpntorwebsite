import { motion } from "framer-motion";
import { Shield, Search, Lock, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePreRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('pre_registrations')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Thank you for pre-registering. We'll notify you when we launch!",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "This email has already been registered or is invalid",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] text-white">
      {/* Auth Buttons */}
      <div className="absolute top-4 right-4 flex gap-4">
        <Link to="/auth">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <LogIn className="w-4 h-4" />
            Sign In
          </motion.button>
        </Link>
        <Link to="/auth">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <UserPlus className="w-4 h-4" />
            Sign Up
          </motion.button>
        </Link>
      </div>

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
          className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-[#D6BCFA] to-[#9b87f5] rounded-full mb-6 inline-block hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Advanced Cybersecurity Investigation
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#D6BCFA] to-white"
        >
          Unmasking Digital Threats
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
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
              className="px-8 py-3 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
            color: "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]"
          },
          {
            icon: Search,
            title: "IP Intelligence",
            description: "Sophisticated tools for tracking and analyzing VPN-masked connections",
            color: "bg-gradient-to-r from-[#7E69AB] to-[#6E59A5]"
          },
          {
            icon: Lock,
            title: "Secure Analysis",
            description: "Protected environment for investigating cyber threats safely",
            color: "bg-gradient-to-r from-[#6E59A5] to-[#9b87f5]"
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

      {/* Coming Soon Section with Pre-registration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-24 w-full max-w-md mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#D6BCFA] to-white">
          Coming Soon
        </h2>
        <p className="text-gray-100 mb-8">
          Be the first to know when we launch. Sign up for early access and exclusive updates.
        </p>
        <form onSubmit={handlePreRegister} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#7E69AB] hover:to-[#6E59A5] text-white font-medium py-2 rounded-lg transition-all duration-300"
          >
            {isLoading ? "Registering..." : "Get Early Access"}
          </Button>
        </form>
      </motion.div>
    </section>
  );
};