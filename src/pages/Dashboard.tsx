import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import StaffDashboard from "./StaffDashboard";
import CustomerDashboard from "./CustomerDashboard";

const Dashboard = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;

  switch (user.role) {
    case "admin": return <AdminDashboard />;
    case "staff": return <StaffDashboard />;
    case "customer": return <CustomerDashboard />;
    default: return <Navigate to="/" replace />;
  }
};

export default Dashboard;
