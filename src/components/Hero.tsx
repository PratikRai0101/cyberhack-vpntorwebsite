import { motion } from "framer-motion";
import { Shield, Search, Lock, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
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

  // Check auth state on component mount
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-100 pb-32">
      {/* Auth Buttons - Only show if user is not logged in */}
      {!user && (
        <div className="fixed top-4 right-4 z-50 flex gap-4">
          <Link to="/auth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg border border-gray-600 hover:bg-gray-700/80 transition-all duration-300"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </motion.button>
          </Link>
          <Link to="/auth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg border border-gray-600 hover:bg-gray-700/80 transition-all duration-300"
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </motion.button>
          </Link>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto mt-24"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-gray-700 to-gray-600 rounded-full mb-8 inline-block hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Advanced Cybersecurity Investigation
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
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
              className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Case Studies
            </motion.button>
          </Link>
          <Link to="/resources">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-600 rounded-lg hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              Explore Resources
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
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
            color: "bg-gradient-to-r from-gray-800 to-gray-700"
          },
          {
            icon: Search,
            title: "IP Intelligence",
            description: "Sophisticated tools for tracking and analyzing VPN-masked connections",
            color: "bg-gradient-to-r from-gray-800 to-gray-700"
          },
          {
            icon: Lock,
            title: "Secure Analysis",
            description: "Protected environment for investigating cyber threats safely",
            color: "bg-gradient-to-r from-gray-800 to-gray-700"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, translateY: -5 }}
            className={`${feature.color} p-6 rounded-xl backdrop-blur-sm border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <feature.icon className="w-10 h-10 mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2 text-gray-200">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-24 w-full max-w-md mx-auto text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-200">
          Coming Soon
        </h2>
        <p className="text-gray-300 mb-8">
          Be the first to know when we launch. Sign up for early access and exclusive updates.
        </p>
        <form onSubmit={handlePreRegister} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800/50 border-gray-600 text-gray-200 placeholder:text-gray-500"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-100 font-medium py-2 rounded-lg transition-all duration-300"
          >
            {isLoading ? "Registering..." : "Get Early Access"}
          </Button>
        </form>
      </motion.div>
    </section>
  );
};
