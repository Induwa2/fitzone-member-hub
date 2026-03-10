import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CalendarDays, MessageSquare, ClipboardList, LogOut } from "lucide-react";

const stats = [
  { label: "Today's Check-ins", value: "34", icon: Users, color: "text-primary" },
  { label: "Upcoming Appointments", value: "18", icon: CalendarDays, color: "text-accent" },
  { label: "New Queries", value: "5", icon: MessageSquare, color: "text-primary" },
  { label: "Class Registrations", value: "42", icon: ClipboardList, color: "text-accent" },
];

const tasks = [
  { title: "View Customer Registrations", desc: "Review new member sign-ups and approve memberships", icon: Users },
  { title: "Appointment Bookings", desc: "Check and manage today's training appointments", icon: CalendarDays },
  { title: "Class Registrations", desc: "Monitor class enrollment and capacity", icon: ClipboardList },
  { title: "Customer Queries", desc: "Read and respond to customer messages", icon: MessageSquare },
];

const StaffDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate("/"); };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">Staff Dashboard</h1>
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

        <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Your Tasks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tasks.map((t) => (
            <Card key={t.title} className="hover:shadow-glow transition-shadow cursor-pointer group">
              <CardHeader className="pb-2">
                <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2 group-hover:bg-primary/20 transition-colors">
                  <t.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{t.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
