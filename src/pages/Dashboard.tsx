import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/login");
  };
  return (
    <div>
      Dashboard
      <h1>Dashboard</h1>
      <p>You have been logged in.</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default Dashboard;
