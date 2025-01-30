import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

type AuthMode = "signin" | "signup" | "reset";

export function AuthForm() {
  const [mode, setMode] = useState<AuthMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-lg shadow-lg animate-fade-up">
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
            required
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
              required
            />
          </div>
        )}
        <Button type="submit" className="w-full">
          {mode === "signin"
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
            >
              Forgot password?
            </button>
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-primary hover:underline"
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
            >
              Sign in
            </button>
          </p>
        )}
      </div>
    </div>
  );
}