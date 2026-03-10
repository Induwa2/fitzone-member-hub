import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, CalendarDays, CreditCard, Dumbbell, MessageSquare, LogOut } from "lucide-react";

const quickLinks = [
  { title: "My Bookings", desc: "View your upcoming training sessions and classes", icon: CalendarDays, link: "/classes" },
  { title: "Membership", desc: "View your current plan and upgrade options", icon: CreditCard, link: "/membership" },
  { title: "Browse Services", desc: "Explore all available fitness services", icon: Dumbbell, link: "/services" },
  { title: "Contact Us", desc: "Submit a query or get help from our team", icon: MessageSquare, link: "/contact" },
];

const CustomerDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate("/"); };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">My Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome, {user?.name}</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" /> Logout
          </Button>
        </div>

        <Card className="mb-8">
          <CardContent className="flex items-center gap-5 p-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">{user?.name}</h2>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
              <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent">Customer</span>
            </div>
          </CardContent>
        </Card>

        <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((q) => (
            <Link to={q.link} key={q.title}>
              <Card className="hover:shadow-glow transition-shadow cursor-pointer group h-full">
                <CardHeader className="pb-2">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2 group-hover:bg-primary/20 transition-colors">
                    <q.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{q.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{q.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
