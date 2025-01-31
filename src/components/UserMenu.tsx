import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

export const UserMenu = () => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
      });
      navigate("/auth");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
      });
    }
  };

  if (!user) return null;

  return (
    <div className="fixed top-4 right-4 flex items-center gap-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
      <span className="text-white">{user.email}</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleSignOut}
        className="text-white hover:bg-white/20"
      >
        <LogOut className="w-4 h-4" />
      </Button>
    </div>
  );
};