import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Dumbbell, CreditCard, CalendarDays, FileText, MessageSquare, Settings, LogOut } from "lucide-react";

const stats = [
  { label: "Total Members", value: "1,247", icon: Users, color: "text-primary" },
  { label: "Active Plans", value: "892", icon: CreditCard, color: "text-accent" },
  { label: "Today's Bookings", value: "56", icon: CalendarDays, color: "text-primary" },
  { label: "Pending Queries", value: "12", icon: MessageSquare, color: "text-accent" },
];

const sections = [
  { title: "Manage Users", desc: "View, edit, and manage all user accounts and roles", icon: Users },
  { title: "Membership Plans", desc: "Create and manage membership tiers and pricing", icon: CreditCard },
  { title: "Services", desc: "Add, edit, or remove gym services and programs", icon: Dumbbell },
  { title: "Trainers", desc: "Manage trainer profiles, certifications and packages", icon: Users },
  { title: "Class Schedule", desc: "Create and update class timetables and capacity", icon: CalendarDays },
  { title: "Blog Posts", desc: "Publish, edit, and manage blog content", icon: FileText },
  { title: "Customer Queries", desc: "View and respond to customer messages", icon: MessageSquare },
  { title: "Settings", desc: "System configuration and preferences", icon: Settings },
];

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate("/"); };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, {user?.name}</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-3 rounded-lg bg-muted"><s.icon className={`h-6 w-6 ${s.color}`} /></div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((s) => (
            <Card key={s.title} className="hover:shadow-glow transition-shadow cursor-pointer group">
              <CardHeader className="pb-2">
                <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
