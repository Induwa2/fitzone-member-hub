import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/trainers", label: "Trainers" },
  { to: "/membership", label: "Membership" },
  { to: "/classes", label: "Classes" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-navy border-b border-primary/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground">
          <Dumbbell className="h-7 w-7 text-accent" />
          <span className="font-heading text-xl font-bold">FitZone</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to ? "text-accent" : "text-navy-foreground/80 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" className="text-navy-foreground hover:text-accent" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button className="gradient-accent text-accent-foreground font-semibold" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" className="text-navy-foreground hover:text-accent" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button className="gradient-accent text-accent-foreground font-semibold" asChild>
                <Link to="/membership">Join Now</Link>
              </Button>
            </>
          )}
        </div>

        <button className="lg:hidden text-navy-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden gradient-navy border-t border-primary/10 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium ${
                location.pathname === link.to ? "text-accent" : "text-navy-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2 space-y-2">
            {isAuthenticated ? (
              <>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
                </Button>
                <Button className="w-full gradient-accent text-accent-foreground font-semibold" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
                </Button>
                <Button className="w-full gradient-accent text-accent-foreground font-semibold" asChild>
                  <Link to="/membership" onClick={() => setOpen(false)}>Join Now</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
