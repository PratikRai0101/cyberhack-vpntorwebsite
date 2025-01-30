import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [investigations, setInvestigations] = useState([]);

  useEffect(() => {
    checkUser();
    fetchInvestigations();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/auth");
    }
    setLoading(false);
  };

  const fetchInvestigations = async () => {
    // This is where you would fetch investigations from your Supabase database
    // For now, we'll use dummy data
    setInvestigations([
      { id: 1, title: "Investigation 1", status: "In Progress" },
      { id: 2, title: "Investigation 2", status: "Completed" },
    ]);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Investigation Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {investigations.map((investigation) => (
            <div
              key={investigation.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-up"
            >
              <h3 className="text-xl font-semibold mb-2">{investigation.title}</h3>
              <p className="text-muted-foreground mb-4">{investigation.status}</p>
              <Button className="w-full">View Details</Button>
            </div>
          ))}

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-dashed border-gray-200 hover:border-primary transition-colors flex flex-col items-center justify-center text-center cursor-pointer animate-fade-up">
            <h3 className="text-xl font-semibold mb-2">Start New Investigation</h3>
            <p className="text-muted-foreground mb-4">
              Click here to begin a new investigation case
            </p>
            <Button variant="outline">Create New</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;