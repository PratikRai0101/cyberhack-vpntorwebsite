import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

type AuthMode = "signin" | "signup" | "reset";

export function AuthForm() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your email address",
      });
      return false;
    }
    if (!password && mode !== "reset") {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your password",
      });
      return false;
    }
    if (mode !== "reset" && password.length < 6) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Password must be at least 6 characters long",
      });
      return false;
    }
    return true;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast({
          title: "Success!",
          description: "You have been signed in.",
        });
        navigate("/");
      } else if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast({
          title: "Success!",
          description: "Please check your email to verify your account.",
        });
      } else if (mode === "reset") {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) throw error;
        toast({
          title: "Success!",
          description: "Password reset instructions have been sent to your email.",
        });
      }
    } catch (error: any) {
      let errorMessage = "An unexpected error occurred";
      
      if (error.message.includes("Invalid login credentials")) {
        errorMessage = "Invalid email or password";
      } else if (error.message.includes("Email not confirmed")) {
        errorMessage = "Please verify your email address before signing in";
      } else if (error.message.includes("User already registered")) {
        errorMessage = "An account with this email already exists";
      }

      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg animate-fade-up">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary">
          {mode === "signin"
            ? "Sign In"
            : mode === "signup"
            ? "Create Account"
            : "Reset Password"}
        </h2>
      </div>
      <form onSubmit={handleAuth} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
            className="bg-white/50"
          />
        </div>
        {mode !== "reset" && (
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
              minLength={6}
              className="bg-white/50"
            />
          </div>
        )}
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#7E69AB] hover:to-[#6E59A5] text-white" 
          disabled={loading}
        >
          {loading ? "Please wait..." : mode === "signin"
            ? "Sign In"
            : mode === "signup"
            ? "Sign Up"
            : "Reset Password"}
        </Button>
      </form>
      <div className="space-y-2 text-center text-sm">
        {mode === "signin" ? (
          <>
            <button
              onClick={() => setMode("reset")}
              className="text-primary hover:underline"
              disabled={loading}
            >
              Forgot password?
            </button>
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-primary hover:underline"
                disabled={loading}
              >
                Sign up
              </button>
            </p>
          </>
        ) : mode === "signup" ? (
          <p>
            Already have an account?{" "}
            <button
              onClick={() => setMode("signin")}
              className="text-primary hover:underline"
              disabled={loading}
            >
              Sign in
            </button>
          </p>
        ) : (
          <p>
            Remember your password?{" "}
            <button
              onClick={() => setMode("signin")}
              className="text-primary hover:underline"
              disabled={loading}
            >
              Sign in
            </button>
          </p>
        )}
      </div>
    </div>
  );
}